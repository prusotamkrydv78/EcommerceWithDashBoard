import Jwt from "jsonwebtoken";
import usermodel from "../models/usermodel.js";

//  protected routes

export const requireSignIn = async (req, res, next) => {
  try {
    const decode = Jwt.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );
    req.user = decode;
    next();
  } catch (error) {
    console.log(error);
  }
};

// admin access

export const isAdmin = async (req, res, next) => {
  try { 
    const user = await usermodel.findById(req.user._id);
    if (user.role === false) {
      return res.status(401).send({
        success: false,
        message: "unAuthorized Access",
      });
    } else {
      return next();
    }
    next()
  } catch (error) {
    console.log(error);
    res.status(401).send({
      success: false,
      message: "Error at isadmin middleware",
      error,
    });
  }
};
