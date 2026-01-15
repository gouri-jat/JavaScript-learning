// Route specific middleware  --(Type-1)
const checkRole = (req,res,next)=>{
    if(req.query.role === "admin"){
        next(); //to continue
    }else{
        res.send("Access denied : admin only");
    }
};
module.exports = checkRole;
