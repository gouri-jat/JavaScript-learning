//creating our first validation middleware - task ---imp middleware -(Type-4)
const validateUser = (req,res,next)=>{
    const {name,email,contact} = req.body;
    if(!name){
        return res.status(400).send("Name is required");
    }
     if(!email){
        return res.status(400).send("Email is required");
    }
     if(!email.includes("@")){
        return res.status(400).send("Invalid email format");
    }
     if(!contact){
        return res.status(400).send("Contact is required");
    }
     if(contact.length !==10){
        return res.status(400).send("Contact must be 10 digits");
    }
    next();
};

module.exports = validateUser;