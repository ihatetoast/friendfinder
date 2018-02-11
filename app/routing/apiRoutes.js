//holder.js has my original attempts

// LOAD DATA
var friendsData = require("../data/friends");
  
// ROUTING
module.exports = function(app) {
  // GET
  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  // POST
  //will need to get the current list of friends and do the math BEFORE i push user's data; otherwise, i'll give user itself as a match. ... although that can sometimes be best. todo: introverted friend finder
  app.post("/api/friends", function(req, res) {
    let userData = req.body;
    //parse data above to what I need:
    //no matter how i name these, they don't get read.
		let userName = req.body.name;
    let userPhoto = req.body.photo;
    let userScores = req.body.scores;
    // let userScores = JSON.parse(req.body.scores);


    //token pairedProgrammer
    //generic name and photo. score at 55, which would be beaten with any score. Gives something to compare to. 0 would rarely be beaten.
    let pairedProgrammer = {
      name: 'Gene Eric',
      photo: 'https://markmanson.net/wp-content/uploads/2015/09/man-with-crazy-eyes.jpg',
      devDiff: 55
    };
    let runningDiff;
    
    //iterate over friendsData THEN iterate over friendsData.scores
    console.log(`current devDiff: ${pairedProgrammer.devDiff}`);
  
//friendsData from get request. go over each possible friend:
//keep track of friend and user index. for
  
//for the millionth time...
    for(var i = 0; i < friendsData.length; i++){
      runningDiff = 0;
      console.log(`Name: ${friendsData[i].name} Scores ${friendsData[i].scores}`);
      //and again ... comp one index spot at a time
      for(var j = 0; j<friendsData[i].scores[j]; j++){
    //TypeError: Cannot read property '0' of undefinedat /Users/marykcassidy/coding/UTCBC/code/hmwk/13_friendfinder/app/routing/apiRoutes.js:44:52
        runningDiff += Math.abs(parseInt(userScores[j]) - parseInt(friendsData[i].scores[j]));
        if(runningDiff <= pairedProgrammer.devDiff){
          pairedProgrammer.name = friendsData[i].name;
          pairedProgrammer.photo = friendsData[i].photo;
          pairedProgrammer.devDiff = runningDiff;
        }
      }
    }
    friendsData.push(userData);
    //goes back to html for modal or wherever I want to put it. 
    //doesn't matter as i can't get the above to work. using dummy data
    res.json(pairedProgrammer);
    // console.log("wreck body:");
    // console.log(req.body);
  }); 
};
