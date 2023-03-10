const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const User = new Schema(
  {
    full_name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    address:{
      type:String,
    },
    phone:{
      type:String,
    },
    sex:{
      type:Number,
    },
    role_id: {
      type: Number,
      // required: true,
    },
    products: {
      type: [{ type: ObjectId, ref: "products" }],
    },
    cart: {
      type: [{ type: ObjectId, ref: "products" }],
    },
    active:{
      type:Boolean,
      default:true,
    },
    refreshToken: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("users", User);
