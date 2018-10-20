// const path =  require  ('path');
const ultFriends= require('../data/friends.js');
module.exports = function(app){

    app.get('/api/friends', function(req, res){
        res.json(ultFriends)
    });

    // Create Friends - takes in JSON input
    // the  request is from the  ajax request, submitting the newFriend; the response is what we 
    // give back to the front end.
    app.post("/api/friends", function(request, response) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser and express middleware
    let newFriend = request.body;
    
    // Using a RegEx Pattern to remove spaces from newFriend
    // You can read more about RegEx Patterns at https://www.regexbuddy.com/regex.html
    newFriend.name = newFriend.name.replace(/\s+/g, "").toLowerCase();
    console.log(newFriend); 
// pushes the values submitted to the friends.js file to save a new friend!
    ultFriends.push(newFriend);
    // res.json(newFriend);
    // to decide who  your match is, and then displays the results via res.json.
       //matching friends
       let match = "";
       let matchImage = "";
       let total = 100;
   
       for (let i = 0; i < ultFriends.length; i++) {
    
         let diff = 0;
   
         for (let x in newFriend.scores) {
           let currentInfo = parseInt(ultFriends[i].scores);
           let newInfo = parseInt(newFriend.scores[x]);
           diff = Math.abs(currentInfo - newInfo);
         };
         if (diff < total) {
           total = diff;
           match = ultFriends[i].name;
           matchImage = ultFriends[i].photo;
         }
       }
       //returning response
       response.json({ match: match, matchImage: matchImage });
  });
}