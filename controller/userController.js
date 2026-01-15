//controller concept
exports.registerUser =(req,res)=>{
    const{name,email,contact}=req.body;
    res.send("user get registerd: "+name+","+email+","+contact+",");
};