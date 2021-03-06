var friends = require('../data/friends');

module.exports = (app) =>{
    app.get('/api/friends/', (req, res) =>{
        res.json(friends);
    });

    app.post('/api/friends/', (req, res) =>{        
        var maxDifference = 100;
        var potentialMatch;
        var client = req.body;
        
        friends.forEach(friend =>{
            var scoreDifference = 0;
            for(var i = 0; i < client.scores.length; i++){
                scoreDifference += Math.abs(parseInt(friend.scores[i]) - parseInt(client.scores[i]));
            }
            if(scoreDifference < maxDifference){
                maxDifference = scoreDifference;
                potentialMatch = friend;
            }
            console.log(scoreDifference);
        });
       res.json(potentialMatch);
       console.log(potentialMatch);
       friends.push(req.body);

    });
}