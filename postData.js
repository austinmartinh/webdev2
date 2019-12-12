import postModel from './api/posts/postModel';

const posts = [
    { 
       username: 'jbloggs',
       postBody: "This is some text to fill out the post body",
    //    replies: [{
          
    //        username: 'austin',
    //        postBody: "This is a reply",
    //        },
    //        {
           
    //        username: 'astrid',
    //        postBody: "This is also a reply",
    //        }
    //    ],
       upvotes: 15
   },
   {
       
       username: 'notme',
       postBody : "2nd test post also has some test text",
    //    replies: [{
          
    //        username: 'astid',
    //        postBody: "astid has written a reply",
    //        },
    //        {
          
    //        username: 'astid',
    //        postBody: "Astid has responded again",
    //        }],
       upvotes: 12,
     },
     {
       username: 'notme',
       postBody: "This is test post number 3",
    //    replies: [{
    //        username: 'Austin',
    //        postBody: "austin has responded here",
    //        }],
       upvotes: 12,
     },
     {
       username: 'psmith',
       postBody :"Four test posts exist in this selection of data",
    //    replies: [],
       upvotes: 2,
     },
 ];

 export default async function loadTestPosts() {
     try {
         await postModel.deleteMany();
         await postModel.collection.insertMany(posts);
         console.log(posts);
         console.info(`${posts.length} test posts were successfully stored`);
     } catch (err) {
         console.error(`failed to load post data: ${err}`);
     }
 }