import mongoose from "mongoose";

const converSchema = new mongoose.Schema({
    member: {
        type: Array
    },
    message: {
        type: String
    }},
    {
        timestamps: true
    }
);

const Conversation = mongoose.model("conversation",converSchema);

export default Conversation;