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
    let newFriend2= request.body.scores;
      console.log(newFriend2);
    // Using a RegEx Pattern to remove spaces from newFriend
    // You can read more about RegEx Patterns at https://www.regexbuddy.com/regex.html
    newFriend.name = newFriend.name.replace(/\s+/g, "").toLowerCase();
    console.log(newFriend); 
    // to decide who  your match is, and then displays the results via res.json.
       //matching friends
       let match = "";
       let matchImage = "";
       let totalDifference = 25;
       
       for (let i = 0; i < ultFriends.length; i++) {
    
         let diff = 0;
   
         for (let x = 0; x < newFriend2.length; x++) {
          diff += Math.abs(ultFriends[i].scores[x] - newFriend2[x]);
        }


         if (diff < totalDifference) {
           totalDifference = diff;
           match = ultFriends[i].name;
           matchImage = ultFriends[i].photo;
         }
       }
       //returning response
       response.json({ match: match, matchImage: matchImage });
       // pushes the values submitted to the friends.js file to save a new friend!
      //  we  do this last because  we dont  want you to match with yourself:-) How lonely!
    ultFriends.push(newFriend);
  });
}