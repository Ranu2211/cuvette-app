import mongoose, { Schema} from 'mongoose';


const userModel = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  phone: {
    type: String,
    required: true,
    unique: true,  // Ensures no duplicate phone numbers
  },
  companyName: {
    type: String,
    required: true,
  },
  companyEmail: {
    type: String,
    required: true,
    unique: true,  // Ensures no duplicate email addresses
    trim: true,
    lowercase: true,
  },
  employeeSize: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,  // To ensure a strong password
  },
  emailOTP: {
    type: String,  // OTP code for email verification
    required: false,
  },
  mobileOTP: {
    type: String,  // OTP code for mobile verification
    required: false,
  },
  isEmailVerified: {
    type: Boolean,
    default: false,  // To track if email is verified
  },
  isMobileVerified: {
    type: Boolean,
    default: false,  // To track if phone is verified
  },
  createdAt: {
    type: Date,
    default: Date.now,  // Automatically set the creation date
  },
}, { timestamps: true });  // Adds createdAt and updatedAt fields
const User = mongoose.model("User", userModel);
export default User;
