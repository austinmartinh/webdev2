import postModel from './api/posts/postModel';

const posts = [
    {  _id: 1,
       username: 'jbloggs',
       postBody: "This is some text to fill out the post body",
       replies: [{
           _id: 1,
           username: 'austin',
           postBody: "This is a reply",
           },
           {
           _id: 2,
           username: 'astrid',
           postBody: "This is also a reply",
           }
       ],
       upvotes: 15
   },
   {
       _id: 2,
       username: 'notme',
       postBody : "2nd test post also has some test text",
       replies: [{
           _id: 1,
           username: 'astid',
           postBody: "astid has written a reply",
           },
           {
           _id: 2,
           username: 'astid',
           postBody: "Astid has responded again",
           }],
       upvotes: 12,
     },
     {
       _id: 3,
       username: 'notme',
       postBody: "This is test post number 3",
       replies: [{id: 1,
           username: 'Austin',
           postBody: "austin has responded here",
           }],
       upvotes: 12,
     },
     {
       _id: 4,
       username: 'psmith',
       postBody :"Four test posts exist in this selection of data",
       replies: [],
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