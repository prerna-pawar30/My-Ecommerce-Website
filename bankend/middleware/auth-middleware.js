const jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {
    let token = req.header('Authorization'); // Use `let` instead of `const`
    if (token && token.startsWith("Bearer ")) {
        token = token.slice(7); // Remove the "Bearer " prefix
    }

    if (!token) {
        return res.status(401).send({ error: "Access denied" });
    }

    try {
        const decoded = jwt.verify(token, "secret");
        req.user = decoded;
        next();
    } catch (err) {
        console.error("Token verification error:", err);
        return res.status(401).send({ error: "Invalid token" });
    }
}




function isAdmin(req,res,next){
    console.log(req, "whole req arrived at isAdmin fn");
    
    if(req.user && req.user.isAdmin){
        next();
    }else{
        return res.status(403).send({
            error:"Forbidden",
        });
    }
}
module.exports = { verifyToken,isAdmin };