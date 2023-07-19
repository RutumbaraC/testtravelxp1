import jwt from 'jsonwebtoken';

export default function login(req, res) {
  const { mobileNumber } = req.body;

  const accessToken = jwt.sign({ mobileNumber }, 'your-access-token-secret', {
    expiresIn: '5m',
  });

  const refreshToken = jwt.sign({ mobileNumber }, 'your-refresh-token-secret', {
    expiresIn: '30m',
  });

  res.json({ accessToken, refreshToken });
}
