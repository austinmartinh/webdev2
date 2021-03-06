import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    username: {type: String, minlength: 0, maxlength:30},
    postBody: {type: String, maxlength: 140},
    // replies: {type: [ReplySchema], default: []},
    upvotes: {type:Number, default:0, min:0}
});

const ReplySchema = new Schema({
    replyBody : {type:String, required: true, maxlength:140},
    username: {type: String, required: true, minlength: 5, maxlength:30},
})

export default mongoose.model('Posts', PostSchema);