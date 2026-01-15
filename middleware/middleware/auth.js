//creating first authorization middleware  --(Type-2)
const auth = (req,res,next) =>{
    const token = req.headers["authorization"];

    if(!token){
        return res.status(401).send("No token provided");
    }
    if(token !== "abc123"){ //abc123 token hai
        return res.status(403).send("Invalid token");
    }
    next();
};

module.exports = auth;