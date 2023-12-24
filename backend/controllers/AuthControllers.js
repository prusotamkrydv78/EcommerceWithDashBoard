import { comparePass, hashPassword } from "../helpers/authHelper.js";
import usermodel from "../models/usermodel.js";
import userModel from "../models/usermodel.js";
import jwt from "jsonwebtoken";
const registerControllers = async (req, res) => {
  try {
    const { name, email, password, address, phone } = req.body;
    // validation
    if (!name) {
      return res.send({ message: "name is required" });
    }
    if (!email) {
      return res.send({ message: "email is required" });
    }
    if (!password) {
      return res.send({ message: "password is required" });
    }
    if (!address) {
      return res.send({ message: "address is required" });
    }
    if (!phone) {
      return res.send({ message: "phone is required" });
    }

    // checking existing user

    const existinguser = await userModel.findOne({ email });
    if (existinguser) {
      return res.status(200).send({
        success: false,
        message: "already rigister please login",
      });
    }
    const hashedPassword = await hashPassword(password);

    // save
    const user = await new userModel({
      name,
      email,
      phone,
      address,
      password: hashedPassword,
    });
    user.save();
    res.status(201).send({
      success: true,
      message: "user register suscessfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error in registeration",
      error,
    });
  }
};

// forget passsrod
export const forgotPasswordController = async (req, res) => {
  try {
    const { email, question, newPassword } = req.body;
    if (!email) {
      res.status(400).send({ message: "email is required" });
    }
    if (!question) {
      res.status(400).send({ message: "question is required" });
    }
    if (!newPassword) {
      res.status(400).send({ message: "newPassword is required" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: fasle,
      message: "Something is wrond",
      error,
    });
  }
};
// login page

const loginControllers = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(404).send({
        success: false,
        message: "Invalid Details",
      });
    }
    // check user
    const user = await usermodel.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Email is not Registered",
      });
    }
    const match = await comparePass(password, user.password);
    if (!match) {
      return res.status(200).send({
        success: false,
        message: "invalid password",
      });
    }

    // tokens

    const token = await jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    res.status(200).send({
      success: true,
      message: "Login successfuly",
      user: {
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
        role: user.role,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in login",
      error,
    });
  }
};

// test controllers
const testControllers = (req, res) => {
  console.log("protected routes");
  res.send("protected routes");
};
export { registerControllers, loginControllers, testControllers };
