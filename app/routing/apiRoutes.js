
// LOAD DATA OF FRIENDS:
var programmers = require("../data/friends");
  
// ROUTING
module.exports = function(app) {
  // API GET Requests
  app.get("/api/friends", function(req, res) {
    //get array of friends array first to do the calc
    res.json(programmers);
  });

  // API POST Requests
  app.post("/api/friends", function(req, res) {
    let userData = req.body;
    //parse data above to what I need:
    //no matter how i name these, they don't get read.
		let userName = userData.name;
		let userPhoto = userData.photo;
    let userScores = userData.scores;
    // console.log(userScores);
    // console.log("wreck body:");
    // console.log(req.body);
    //captures the result of absval algorithm.
    let pairedProgrammer = {
      name: '',
      photo: '',
      devDiff: 55
    };
    let runningDiff;
    
    //iterate over friendsData THEN iterate over friendsData.scores
//friendsData from get request. go over each possible friend:
//keep track of friend and user index. 
  for(let i = 0; i < programmers.length; i ++){
    runningDiff = 0;
    //iterate over scores at position
    for(let k = 0; k < userScores.length; k++){
       //rundif+= |userscore at k index| - |programmer at i scores at k index|
      runningDiff += Math.abs(userScores[k] - programmers[i].scores[k]);
    }
    // console.log(`Running difference is now ${runningDiff}`);
    if(runningDiff <= pairedProgrammer.devDiff){
      pairedProgrammer.name = programmers[i].name;
      pairedProgrammer.photo = programmers[i].photo;
      pairedProgrammer.devDiff = runningDiff;
    }
  }
    programmers.push(userData);
    // console.log(pairedProgrammer);
    res.json(pairedProgrammer);
  }); 
};
