const mongoose=require("mongoose");

const CategorySchema = new mongoose.Schema({

    name: String,
    
});
const Category = mongoose.model("categories",CategorySchema);
module.exports = Category;