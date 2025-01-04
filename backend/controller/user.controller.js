import User from "../model/user.model.js";
import bcryptjs from "bcryptjs"

export const signup = async (req, res) => {
    try {
    const {fullname, email, password} = req.body;
    const user = await User.findOne({email});
    if(user){
        return res.status(400).json({message : "User already exist!"})
    }
    
    const hashpassword = await bcryptjs.hash(password,10);

    const createdUser = new User({
        fullname,
        email,
        password : hashpassword
    })
    await createdUser.save()
    res.status(201).json({message : "User created successfully", user : {
        _id : createdUser._id,
        fullname : createdUser.fullname,
        email : createdUser.email
    }})
    } catch (error) {
        console.log("Error : " ,error)
        res.status(500).json({message : "internal server error"})
    }
}

export const login = async (req, res) => {
    try {
        const {email, password} = await req.body
        const user = await User.findOne({email})
      
        if(!user){
            return res.status(400).json({message: "User don't exist "});
        }else{

            const isMatch = await bcryptjs.compare(password,user.password)
            if(isMatch){
                res.status(200).json({message : "Login successful", user : {
                    _id : user._id,
                    fullname : user.fullname,
                    email : user.email
                }})
            }else{
                return res.status(400).json({message: "incorrect password"});
            }
        }
        

    } catch (error) {
        console.log("error : ", error)
        res.status(500).json("Internal server error");
    }
}