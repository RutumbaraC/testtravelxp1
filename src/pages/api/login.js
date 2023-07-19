import jwt from 'jsonwebtoken';

export default function handler(req, res) {
  const { mobileNumber } = req.body;

  // Verify mobileNumber and generate access token
  const accessToken = jwt.sign({ mobileNumber }, 'your-access-token-secret', {
    expiresIn: '5m',
  });

  // Generate refresh token
  const refreshToken = jwt.sign({ mobileNumber }, 'your-refresh-token-secret', {
    expiresIn: '30m',
  });

  res.json({ accessToken, refreshToken });
}
