// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on all possible friends
// ===============================================================================
var friendsData = require('../data/friends.js');


module.exports = function(app) {
  // API GET requests
  // Below code handles when users "visits" a page
  // In each of the below cases when a user visits a link
  app.get("/api/friends", function(req, res) {
      res.json(friendsData);
  });

  app.post("/api/friends", function(req, res) {
      var bestMatch = {
          name: "",
          photo: "",
          difference: 100
      }

      var userData = req.body
      var userScores = userData.scores;
      var totalDifference = 0;
      var totalArray = [];

      for (var i = 0; i < friendsData.length; i++){
        totalDifference = 0;

          for (let j = 0; j < friendsData[i].scores.length; j++) {
            totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friendsData[i].scores[j]));

              if (totalDifference <= bestMatch.difference) {
                  bestMatch.name = friendsData[i].name;
                  bestMatch.photo = friendsData[i].photo;
                  bestMatch.difference = totalDifference;
              }
          }
      };

      friendsData.push(userData)
      res.json(bestMatch)

  })


}