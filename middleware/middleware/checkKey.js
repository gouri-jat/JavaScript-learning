const checkKey = (req,res,next)=>{
    if(req.query.key === "12345"){
        next();
    }else{
        res.status(401).send("Access Denied : invalid api key");
    }
};
module.exports = checkKey;
//route specific middleware