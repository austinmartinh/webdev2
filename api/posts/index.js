import express from 'express';
import Posts from './postModel';
import asyncHandler from 'express-async-handler';

const router = express.Router();

/********** api/posts  ************/

// get all posts
router.get('/', async(req, res) => {
  try{ 
  const posts = await Posts.find();
  console.log(posts);
  res.status(200).json(posts);
} catch (error){
  handleError(res,error.message);
}
});


// create a post
router.post('/', asyncHandler(async(req, res) => {
    const newPost = await Posts.create(req.body);
    res.status(201).json(newPost);
}));



/************ api/posts/:postId ***************/

// get a post
router.get('/:id', async(req, res) => {
  try{ 
  const post = await Posts.findById(req.params.id);
  if(!post) return res.send(404);
  res.status(205).json({post});
} catch (error){
  handleError(res,error.message);
}
});

//Edit a post
router.put('/:id', asyncHandler(async(req,res) => {
  if(req.body._id) delete req.body._id;
  const postToUpdate = await Posts.update({
    _id: req.params.id,
  }, req.body, {
    upsert: false,
  });
  if(!postToUpdate) return res.sendStatus(404);
  return res.json(200,postToUpdate);
}));

//Delete a Post
router.delete('/:id', asyncHandler(async (req,res) => {
  const postToDelete = await Posts.findById(req.params.id);
  if(!postToDelete) return res.send(404);
  await postToDelete.remove();
  return res.status(204).send(postToDelete);
}));

/************ api/posts/:postid/upvote */

// upvote a post
router.post('/:id/upvote', asyncHandler(async(req,res) =>{

  const postToUpvote = await Posts.findById(req.params.id);
  if(!postToUpvote) return res.send(404);
  postToUpvote.upvotes +=1;
  postToUpvote.save();
 
  if(!postToUpvote) return res.sendStatus(404);
  return res.json(200,postToUpvote);

}))

/************ api/posts/:postId/replies */

// get all replies
router.get('/:id/replies', async(req,res) =>{
  try{ 
    const post = await Posts.findById(req.params.id)
    if(!post) return res.send(404);
    const replies = post.replies;

    return res.status(200).json({replies});
  } catch (error){
    handleError(res,error.message);
  }
})
// submit a reply
router.post('/:id/replies', asyncHandler(async(req,res) =>{
  try{ 
    const post = await Posts.findById(req.params.id)
    if(!post) return res.send(404);
    const replies = post.replies;

    return res.status(200).json({replies});
  } catch (error){
    handleError(res,error.message);
  }

  const newReply = await Posts.create(req.body);
  res.status(201).json(newPost);

}))

// edit a reply

// delete a reply



function handleError(res,err) {
  return res.send(500,err);
};

export default router