const express = require('express');
const apiRouter = express.Router();
const minions = require('./minions.js');
const ideas = require('./ideas.js');
const meetings = require('./meetings.js')
const checkMillionDollarIdea = require('./checkMillionDollarIdea');

//Minions APIs
apiRouter.get('/minions', minions.getAllMinions);
apiRouter.post('/minions', minions.createMinion);
apiRouter.get('/minions/:minionID', minions.getMinionByID);
apiRouter.put('/minions/:minionID', minions.putMinionByID);
apiRouter.delete('/minions/:minionID', minions.deleteMinionByID);

//Ideas APIs
apiRouter.get('/ideas', ideas.getAllIdeas);
apiRouter.post('/ideas',checkMillionDollarIdea, ideas.createIdea);
apiRouter.get('/ideas/:ideaID', ideas.getIdeaByID);
apiRouter.put('/ideas/:ideaID',ideas.putIdeaByID, checkMillionDollarIdea);
apiRouter.delete('/ideas/:ideaID', ideas.deleteIdeaByID);

//Meetings APIs
apiRouter.get('/meetings', meetings.getAllMeetings);
apiRouter.post('/meetings', meetings.createMeeting);
apiRouter.delete('/meetings', meetings.deleteMeetings);


module.exports = apiRouter;
