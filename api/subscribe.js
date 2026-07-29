// Vercel serverless function: POST /api/subscribe
// Receives { email } from the site's contact form and creates a Beehiiv
// subscription. API key + publication ID are read from Vercel env vars.

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const email = (req.body && req.body.email || '').trim().toLowerCase();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Please enter a valid email address.' });
  }

  const apiKey = process.env.BEEHIIV_API_KEY;
  const pubId  = process.env.BEEHIIV_PUBLICATION_ID;

  if (!apiKey || !pubId) {
    console.error('Missing BEEHIIV_API_KEY or BEEHIIV_PUBLICATION_ID env var');
    return res.status(500).json({ error: 'Server not configured.' });
  }

  try {
    const upstream = await fetch(
      `https://api.beehiiv.com/v2/publications/${pubId}/subscriptions`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          reactivate_existing: true,
          send_welcome_email: true,
          utm_source: 'warriorpoetsavant.com',
          utm_medium: 'website-form',
        }),
      }
    );

    if (!upstream.ok) {
      const detail = await upstream.text();
      console.error('Beehiiv API error', upstream.status, detail);
      return res.status(502).json({ error: 'Something went wrong. Please try again.' });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Subscribe handler error', err);
    return res.status(500).json({ error: 'Something went wrong. Please try again.' });
  }
};
