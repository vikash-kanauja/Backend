import userModel from "../modules/user.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const user = await userModel.find({ email });
    if (user) {
      return res.status(401).json({
        success: false,
        message: "User already exist",
      });
    }
    const newUser = new userModel({
      name,
      email,
      password,
    });
    const salt = await bcryptjs.genSalt(10);
    console.log(salt);
    const hashPassword = await bcryptjs.hash(password, salt);

    newUser.password = hashPassword;
    await newUser.save();

    res.status(200).json({
      success: true,
      message: "User Register successfully",
      newUser,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Invalid credentials",
      });
    }
    const isPasswordValid = await bcryptjs.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(404).json({
        success: false,
        message: "Invalid credentials",
      });
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRETE);
    res.cookie('token',token,{
      httpOnly:true,
      secure:false,
      maxAge: 3600000
    })
    res.status(200).json({
      success: true,
      message: "Login user successfully",
      user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

const logout = (req,res)=>{
  try {
    res.clearCookie('token')
    res.status(200).json({
      message:"User logout sucessfully"
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
  
}

export { register, login,logout };
