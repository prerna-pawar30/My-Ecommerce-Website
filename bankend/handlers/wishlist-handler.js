const Wishlist = require("./../db/wishlist");  // Use uppercase W

async function addToWishlist(userId, productId) {
    const wishList = new Wishlist({
        userId: userId,
        productId: productId
    });
    await wishList.save();
    return wishList.toObject();
}

async function removeFromWishlist(userId, productId) {
    await Wishlist.deleteMany({ userId: userId, productId: productId });
}

async function getWishlist(userId) {
    let wishlists = await Wishlist.find({ userId }).populate("productId");
    return wishlists.map((x) => x.toObject().productId); 
}


module.exports = { getWishlist, addToWishlist, removeFromWishlist };
