import mongoose from "mongoose";

const contentItemSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    featuredContent: {
        type: String,
        required: true,
    },
    fullContent: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
        required: true,
    },
    author: {
        type: Object,
        required: true,
    },
    createdDate: {
        type: String,
        required: true,
    },
    viewCount: {
        type: Number,
        required: true,
        lowercase: true,
    }
})

export default mongoose.model("ContentItem", contentItemSchema);