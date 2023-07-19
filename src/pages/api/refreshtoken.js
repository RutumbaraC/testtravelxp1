import jwt from 'jsonwebtoken';

export default function handler(req, res) {
  const { refreshToken } = req.body;

  try {
    // Verify and decode the refresh token
    jwt.verify(refreshToken, 'your-refresh-token-secret');
    
    // Generate a new access token
    const accessToken = jwt.sign({ mobileNumber }, 'your-access-token-secret', {
      expiresIn: '5m',
    });

    res.json({ accessToken });
  } catch (error) {
    res.status(401).json({ message: 'Invalid refresh token' });
  }
}
