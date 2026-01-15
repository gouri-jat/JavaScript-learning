// global error handle middleware  --(Type-3)
const errorhandler = (err,req,res,next) =>{
    console.error("Error: ",err.message);

    res.status(err.statusCode || 500).json({
        success:false,
        error:err.message || "Internal server error",
        time: req.requestTime
    });
};
module.exports = errorhandler;