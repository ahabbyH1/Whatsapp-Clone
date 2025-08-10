import Conversation from "../model/conversation.js";


export const newConversation =async (req,res) => {
    try{
    const senderId = req.body.senderId;
    const receiverId = req.body.receiverId;
    const exist = await Conversation.findOne({member: {$all: [receiverId,senderId]}});
    if(exist){
        return res.status(200).json("conversation already exists");
    }
    const newConversation = new Conversation({
        member: [senderId,receiverId]
    })
    await newConversation.save();
    return res.status(200).json("conversation saved successfully");
    }catch(err){
        res.status(500).json({ error: err.message });
    }
}

export const getConversation = async(req,res) => {
    try{
        const senderId = req.body.senderId;
        const receiverId = req.body.receiverId;
        let conversation = await Conversation.findOne({member: {$all: [receiverId,senderId]}});
        return res.status(200).json(conversation);
    }catch(err){
        return res.status(500).json(err.message);
    }
}