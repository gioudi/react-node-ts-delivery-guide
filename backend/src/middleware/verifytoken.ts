import jwt from 'jsonwebtoken';

const verifyToken = (req: { headers: { [x: string]: any; }; userId: any; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { message: string; }): any; new(): any; }; }; }, next: () => void) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(403).json({ message: 'No token provide' });
  }

  jwt.verify(token, process.env.JWT_SECRET || 'default_secret', (err: any, decoded: any) => {
    if (err) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    req.userId = decoded.userId;

    next();
  });
};

module.exports = verifyToken;
