import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    pId: Number,
    username: String,
    postBody: String,
    replies: {type: Array, default: []},
    upvotes: Number
});

export default mongoose.model('Posts', PostSchema);