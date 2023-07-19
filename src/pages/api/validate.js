import jwt from 'jsonwebtoken';

export default function handler(req, res) {
  const { accessToken } = req.body;

  try {
    // Verify and decode the access token
    jwt.verify(accessToken, 'your-access-token-secret');
    res.json({ valid: true });
  } catch (error) {
    res.json({ valid: false });
  }
}
