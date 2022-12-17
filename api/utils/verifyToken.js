import jwt from 'jsonwebtoken';
import { createError } from '../utils/error.js';

export const verfiyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  console.log(token);
  if (!token) {
    return next(createError(403, 'You are not authenticated!.'));
  }

  jwt.verify(token, process.env.JWT, (error, user) => {
    if (error) return next(createError(403, 'Token is not valid!'));

    req.user = user;
    console.log(req.user);
    //if every thing is okey, we are gonna sent new request property.

    next();
  });
};

export const verifyUser = (req, res, next) => {
  verfiyToken(req, res, next, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      if (err) return next(createError(403, 'you are not authorized!'));
    }
  });
};
export const verifyAdmin = (req, res, next) => {
  verfiyToken(req, res, next,() => {
    console.log('before and after token.');
    if (req.user.isAdmin) {
      console.log('burda');
      next();
    } else {
      if (error) return next(createError(403, 'you are not authorized!'));
    }
  });
};
