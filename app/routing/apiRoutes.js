const path =  require  ('path');
const ultFriends= require('../data/friends.js');
module.exports = function(app){

    app.get('/api/friends', function(req, res){
        res.json(ultFriends)
    });

    // Create New Characters - takes in JSON input
app.post("/api/friends", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser and express middleware
    let newFriend = req.body;
    let match ='';
    let matchImage='';
    // Using a RegEx Pattern to remove spaces from newFriend
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newFriend.name = newFriend.name.replace(/\s+/g, "").toLowerCase();
    console.log(newFriend); 
// ultFriends may need to be modified to be able to  send across files.*******DELETE
    ultFriends.push(newFriend);
    res.json({match:match, matchImage:matchImage});
  });
}