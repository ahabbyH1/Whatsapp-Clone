import User from '../model/user.js';


export const addUser = async (req, res) => {
    console.log("Incoming body:", req.body);  // ✅ Debug what frontend sent
    try {
        let exist = await User.findOne({ sub: req.body.sub });
        console.log("User found:", exist);    // ✅ Debug if DB query worked

        if (exist) {
            res.status(200).json({ msg: "user already exist" });
            return;
        }
        const newUser = new User(req.body);
        await newUser.save();
        return res.status(200).json(newUser);
    } catch (err) {
        console.error("Error in addUser:", err); // ✅ Log the real error
        return res.status(500).json(err.message);
    }
}


export const getUser = async(req,res) => {
    try{
        let users = await User.find({});
        return res.status(200).json(users);
    }catch(err)
    {
        return res.status(500).json(err.message);
    }
}