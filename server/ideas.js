const database = require('./db.js');

const getAllIdeas = (req, res)=>{
    const allIdeas = database.getAllFromDatabase('ideas');
    res.send(allIdeas);
}

const createIdea = (req,res) => {
    const idea = req.body;
    database.addToDatabase('ideas', idea);
    res.status(201).send(idea);
}

const getIdeaByID = (req,res) => {
    const ID = req.params.ideaID;
    const idea = database.getFromDatabaseById('ideas', ID);
    if(idea){
        res.send(idea);
    }else{
        res.status(404).send();
    }
    
}
const putIdeaByID = (req, res) => {
    const ID = req.params.ideaID;
    const updatedIdea = req.body;
    const existingIdea = database.getFromDatabaseById('ideas', ID);
    if (existingIdea) {
        database.updateInstanceInDatabase('ideas', updatedIdea);
        res.send(updatedIdea);
    } else {
        res.status(404).send();
    }
}

const deleteIdeaByID = (req, res) => {
    const ID = req.params.ideaID;
    const deleted = database.deleteFromDatabasebyId('ideas', ID);
    if(deleted){
        res.status(204);
    }else{
        res.status(404);
    }
    res.send();

}

module.exports = {
    getAllIdeas,
    createIdea,
    getIdeaByID,
    putIdeaByID,
    deleteIdeaByID
};