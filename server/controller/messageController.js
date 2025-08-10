import Message from "../model/message.js"
import Conversation from "../model/conversation.js";

export const newMessage =async (req,res) => {
    try {
        const newMessage = new Message(req.body);
        await newMessage.save();
        await Conversation.findByIdAndUpdate(req.body.conversationId,{message:req.body.text})
        return res.status(200).json("message saved successfully");
    }catch(err){
        res.status(500).json("error while message saving",err.message);
    }
}

export const getMessage = async(req,res) => {
    try{
        let messages = await Message.find({conversationId: req.params.id});
        return res.status(200).json(messages);
    }catch(err){
        return res.status(500).json(err.message);
    }
}