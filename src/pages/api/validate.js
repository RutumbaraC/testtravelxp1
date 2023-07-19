import jwt from 'jsonwebtoken';

export default function handler(req, res) {
  const { accessToken } = req.body;

  try {
    jwt.verify(accessToken, 'your-access-token-secret');
    res.json({ valid: true });
  } catch (error) {
    res.json({ valid: false });
  }
}
