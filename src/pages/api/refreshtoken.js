import jwt from 'jsonwebtoken';

export default function refreshToken(req, res) {
  const { refreshToken } = req.body;
  const { mobileNumber } = req.body;

  if( jwt.verify(refreshToken, 'your-refresh-token-secret')) {
    // res.json({ valid: true });
    const accessToken = jwt.sign({ mobileNumber }, 'your-access-token-secret', {
      expiresIn: '5m',
    });
    res.json({ accessToken });
  } 
  else {
    res.status(401).json({ message: 'Invalid refresh token' });
  }
}
