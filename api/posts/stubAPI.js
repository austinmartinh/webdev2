import _ from 'lodash';

  const posts = [
         {  pId: 1,
            username: 'jbloggs',
            postBody: "This is some text to fill out the post body",
            replies: [{
                rId: 1,
                username: 'austin',
                postBody: "This is a reply",
                },
                {
                rId: 2,
                username: 'astrid',
                postBody: "This is also a reply",
                }
            ],
            upvotes: 15
        },
        {
            pId: 2,
            username: 'notme',
            postBody : "2nd test post also has some test text",
            replies: [{
                rId: 1,
                username: 'astrid',
                postBody: "astrid has written a reply",
                },
                {
                rId: 2,
                username: 'astrid',
                postBody: "Astrid has responded again",
                }],
            upvotes: 12,
          },
          {
            pId: 3,
            username: 'notme',
            postBody: "This is test post number 3",
            replies: [{rId: 1,
                username: 'Austin',
                postBody: "austin has responded here",
                }],
            upvotes: 12,
          },
          {
            pId: 4,
            username: 'psmith',
            postBody :"Four test posts exist in this selection of data",
            replies: [],
            upvotes: 2,
          },
      ];


     const stubAPI = {
         getAll: () => {
            return posts;
          },
         add: (t, l) => {
              if (!(t && l)) return false;
              let pId = 1;
              const last = _.last(posts);
              if (last) {
                 pId = last.pId + 1;
              }
              let len = posts.length;
              let newLen = posts.push({
                  'pId': pId,
                 'title': t, 'link': l, 'username': '', 'replies': [], 'upvotes': 0});
               return newLen > len?pId:-1;
              },
         upvote: (pId) => {
             const index = _.findIndex(posts,
                   (post) => {
                    return post.pId == pId;
                  } );
             if (index !== -1) {
                  posts[index].upvotes += 1;
                  return true;
                }
              return false;
           },
         getPost: (pId) => {
            let result = null;
            const index = _.findIndex(posts,
                   (post) => {
                    return post.pId == pId;
                  } );
             if (index !== -1) {
                result = posts[index];
                    }
            return result;
            },
         addComment: (postId, c, n) => {
            let result = false;
            const post = stubAPI.getPost(postId);
            let pId = 1;
            if (post) {
            const last = _.last(post.comments);
            if (last) {
               pId = last.pId + 1;
            }
            post.comments.push({'pId': pId,
                     'comment': c, 'author': n, 'upvotes': 0} );
            result = true;
            }
          return result;
            },
         upvoteComment: (postId, commentId) => {
            let result = false;
            const post = stubAPI.getPost(postId);
            if (post) {
            const index = _.findIndex(post.comments, (c) => {
                      return c.pId == commentId;
                    });
             if (index !== -1) {
                 post.comments[index].upvotes += 1;
                 result = true;
                }
              }
            return result;
          },
      };
    export default stubAPI;