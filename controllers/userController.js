import User from "../models/User.js";
import bcrypt from "bcrypt";

const userController = {


    registerUser: async (req, res) => {
        try {

            const { name, email, password } = req.body;

            if (!name || !email || !password) {
                return res.status(400).json({ message: "Please fill all the fields" });
            }

            const userExist = await User.findOne({email})

            if (userExist) {
                return res.status(400).json({ message: "User already exists" });
            }

            if (!name || !email || !password) {
                return res.status(400).json({ message: "Please fill all the fields" });
            }

            if (password.length < 4) {
                return res.status(400).json({ message: "Password must be at least 4 characters" });
            }

            const salts = 10

            const hashPassword = await bcrypt.hash(password, salts)

            const user = await User.create({
                name,
                email,
                password: hashPassword
            });

            res.status(201).json({message: "User created successfully "+ user.name});

        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    loginUser: async (req,res) => {

        try{

            const { email, password } = req.body;

            const user = await User.findOne({ email });

            if(!user){
                return res.status(400).json({ message: "User does not exist, please register" });
            }

            const hashPassword = await bcrypt.compare(password, user.password);

            if(!hashPassword){
                return res.status(400).json({ message: "Invalid credentials" });
            }

            res.status(200).json({ message: "Login successful" });


        } catch(error){
            res.status(500).json({ message: error.message });
        }

    }, 

};

export default userController;
