
// // LOAD DATA
// var friendsData = require("../data/friends");
  
// // ROUTING
// module.exports = function(app) {
//   // API GET Requests
//   app.get("/api/friends", function(req, res) {
//     //get array of friends array first to do the calc
//     res.json(friendsData);
//   });

//   // API POST Requests
//   //will need to get the current list of friends and do the math BEFORE i push user's data; otherwise, i'll give user itself as a match. ... although that can sometimes be best. todo: introverted friend finder
//   app.post("/api/friends", function(req, res) {
//     let userData = req.body;
//     //parse data above to what I need:
//     //no matter how i name these, they don't get read.
// 		let userName = userData.name;
// 		let userPhoto = userData.photo;
//     let userScores = JSON.parse(req.body.scores);
//     console.log(userScores);

//     //token pairedProgrammer
//     //generic name and photo. score at 55, which would be beaten with any score. Gives something to compare to. 0 would rarely be beaten.
//     let pairedProgrammer = {
//       name: 'Gene Eric',
//       photo: 'https://markmanson.net/wp-content/uploads/2015/09/man-with-crazy-eyes.jpg',
//       devDiff: 55
//     };
//     let runningDiff;
    
//     //iterate over friendsData THEN iterate over friendsData.scores
//     console.log(`current devDiff: ${pairedProgrammer.devDiff}`);
  
// //friendsData from get request. go over each possible friend:
// //keep track of friend and user index. for
//   for(let i = 0; i < friendsData.length; i ++){
//     // console.log(`Name: ${friendsData[f].name} Scores ${friendsData[f].scores}`);
//     runningDiff = 0;
//     //iterate now over the scores BUT COMPARE one score at a time. comparing only 1 index at a time, so scores at current index
//    //friendsData[where we are in first loop].scores[where index is at nested loop]
//     for(let k = 0; k < friendsData[i].scores[k]; k++){
//        //accumulate the absval of each index current user then friendsData
//       runningDiff += Math.abs(parseInt(userScores[k]) - parseInt(friendsData[i].scores[j]));

//       console.log(`Running difference is now ${runningDiff}`);
//     }
//   }
//     console.log("wreck body:");
//     console.log(req.body);
//     //logic of match making
//   }); 
// };
