import jwt from 'jsonwebtoken';
import axios from 'axios';

export default async function validate(req, res) {
  const { accessToken, refreshToken } = req.body;

  if(jwt.verify(accessToken, 'your-access-token-secret')) 
  {
    res.json({ valid: true });
  } 
  else {
    
    try {
      
      const response = await axios.post('/api/refreshtoken', { refreshToken });
      const { accessToken: newAccessToken } = response.data;
      res.json({ valid: true, newAccessToken });
    } 
    catch (error) {
      res.json({ valid: false });
    }
  }
}

