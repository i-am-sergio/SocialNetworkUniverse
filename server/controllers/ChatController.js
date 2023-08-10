import ChatModel from "../models/chatModel.js";

export const createChat = async (req, res) => {
    const newChat = new ChatModel({
        members: [req.body.senderId, req.body.receiverId],
    });
    try {
        const result = await newChat.save();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const userChats = async (req, res) => {
    try {
        const chat = await ChatModel.find({
            members: {$in: [req.params.userId]},
        });
        res.status(200).json(chat);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const findChat = async (req, res) => {
    try {
        const chat = await ChatModel.findOne({
            members: {$all: [req.params.firstId, req.params.secondId]},
        });
        res.status(200).json(chat)
    } catch (error) {
        res.status(500).json(error)
    }
};

export const deleteChat = async (req, res) => {
    try {

        const deletedChat = await ChatModel.findByIdAndDelete(req.params.chatId);

        if (deletedChat) {
            res.status(200).json({ message: "Chat deleted successfully." });
        } else {
            res.status(404).json({ message: "Chat not found." });
        }
    } catch (error) {
        res.status(500).json(error);
    }
};