const logger = (req,res,next)=>{
    req.requestTime = new Date().toISOString();
    next();
};
module.exports = logger;
//practice middleware simple task
//global middleware