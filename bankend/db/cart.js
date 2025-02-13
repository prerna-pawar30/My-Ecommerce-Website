const mongoose = require("mongoose");
const { Schema } = mongoose;

const cartSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'users' },
  productId: { type: Schema.Types.ObjectId, ref: 'products' },
  quantity: Number
});

const Cart = mongoose.model("carts", cartSchema);
module.exports = Cart;
