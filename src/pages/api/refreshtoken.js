import jwt from 'jsonwebtoken';

export default function handler(req, res) {
  const { refreshToken } = req.body;

  try {
   
    jwt.verify(refreshToken, 'your-refresh-token-secret');
    
    const accessToken = jwt.sign({ mobileNumber }, 'your-access-token-secret', {
      expiresIn: '5m',
    });

    res.json({ accessToken });
  } catch (error) {
    res.status(401).json({ message: 'Invalid refresh token' });
  }
}
