const database = require('./db.js');
const getAllMinions = (req, res)=>{
    const allMinions = database.getAllFromDatabase('minions');
    res.send(allMinions);
}

const createMinion = (req,res) => {
    const minion = req.body;
    database.addToDatabase('minions', minion);
    res.status(201).send(minion);
}

const getMinionByID = (req,res) => {
    const ID = req.params.minionID;
    const minion = database.getFromDatabaseById('minions', ID);
    if(minion){
        res.send(minion);
        
    }else{
        res.status(404).send();
    }
}
const putMinionByID = (req, res) =>{
    const ID = req.params.minionID;
    const updatedMinion = req.body;
    const existingMinion = database.getFromDatabaseById('minions', ID);
    if(existingMinion){
        database.updateInstanceInDatabase('minions', updatedMinion);
        res.send(updatedMinion);
    }else{
        res.status(404).json({ message: 'Item not found' });
    } 
}

const deleteMinionByID = (req, res) => {
    const ID = req.params.minionID;
    const deleted = database.deleteFromDatabasebyId('minions', ID);
    if(deleted){
        res.status(204);
    }else{
        res.status(404);
    }
    res.send()
}

module.exports = {
    getAllMinions,
    createMinion,
    getMinionByID,
    putMinionByID,
    deleteMinionByID
};