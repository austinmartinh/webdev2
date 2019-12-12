import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    _id: {type:Number, required: true, min:0},
    username: {type: String, required: true, minlength: 5, maxlength:30},
    postBody: {type: String, required:true, maxlength: 140},
    replies: {type: [ReplySchema], default: []},
    upvotes: {type:Number, default:0, min:0}
});

const ReplySchema = new Schema({
    replyBody : {type:String, required: true, maxlength:140},
    username: {type: String, required: true, minlength: 5, maxlength:30},
})

export default mongoose.model('Posts', PostSchema);