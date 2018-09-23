const path =  require  ('path');
const  friendsData= require('/../data/friends.js');
module.exports = function(app){

    app.get('/friends', function(req, res){
        res.json(friendsData)
    });

    // app.post()
    
}