const database = require('./db.js');
const getAllMeetings = (req, res)=>{
    const allMeetings = database.getAllFromDatabase('meetings');
    res.send(allMeetings);
    console.log(allMeetings);
}

const createMeeting = (req,res) => {
    const Meeting = database.addToDatabase('meetings', database.createMeeting());
    res.status(201).send(Meeting);
}
const deleteMeetings = (req, res) => {
    const deleted = database.deleteAllFromDatabase('meetings');
    res.status(204).send();
}

module.exports = {
    getAllMeetings,
    createMeeting,
    deleteMeetings
}