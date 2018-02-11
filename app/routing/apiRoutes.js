// LOAD DATA
var friendsData = require("../data/friends");
  
// ROUTING
module.exports = function(app) {
  // API GET Requests
  app.get("/api/friends", function(req, res) {
    //get array of friends array first to do the calc
    res.json(friendsData);
  });

  // API POST Requests
  //will need to get the current list of friends and do the math BEFORE i push user's data; otherwise, i'll give user itself as a match. ... although that can sometimes be best. todo: introverted friend finder
  app.post("/api/friends", function(req, res) {
    var newUserData = req.body;
    var newUserName = newUserData.name;
    var newUserPic = newUserData.photoUrl;
    var newUserScores = newUserData.scores;

    //token pairedProgrammer
    //generic name and photo. score at 55, which would be beaten with any score. Gives something to compare to. 0 would rarely be beaten.
    let pairedProgrammer = {
      name: 'Gene Eric',
      photo: 'https://markmanson.net/wp-content/uploads/2015/09/man-with-crazy-eyes.jpg',
      devDiff: 55
    }
    
    //iterate over friendsData THEN iterate over friendsData.scores
    /*Convert each user's results into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the totalDifference.
Example:
User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]
Total Difference: 2 + 1 + 2 = 5
Remember to use the absolute value of the differences. */
console.log(`current devDiff: ${pairedProgrammer.devDiff}`);
console.log(`current user: ${newUserData.scores}`);
    friendsData.forEach(function(friend){
      console.log(`${friend.name}: scores ${friend.scores}`);
      
    })
    console.log("wreck body:");
    console.log(req.body);
    //logic of match making
  }); 
};
