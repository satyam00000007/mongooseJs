const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/satyamDb", { useNewUrlParser : true , useUnifiedTopology : true})
.then( () => console.log(" connected Successfully"))
.catch( (err) => console.log(err));


//Schemas
// A mongoose schema defines the structure of the document
// default values , validators , etc ...

const playlistSchema = new mongoose.Schema({
    name : {
        type : String,
        require : true
    },
    ctype : String,
    videos : Number,
    author : String,
    active : Boolean,
    date : {
        type : Date,
        default : Date.now
    }
})


// A Mongoose model is a wrapper on the Mongoose schema.
// A Mongoose schema defines the structure of the document,
//default values, validators, etc., whereas a Mongoose model
// provides an interface to the database for creating,
// querying, updating, deleting records, etc.

// collection creation
const Playlist = new mongoose.model("Playlist",playlistSchema)

// create document or Insert

// ------ simple method start -----------

// const reactPlaylist = new Playlist({
//     name : "React JS",
//     ctype : "Front End",
//     videos : 80,
//     author : "Thapa Technical",
//     active : true
// })

// reactPlaylist.save();

// ------ simple method end -------------

// ----------- proper data storing start-------------

// const createDocument = async () => {
//     try {

//         const reactPlaylist = new Playlist({
//             name : "Node JS",
//             ctype : "Back End",
//             videos : 50,
//             author : "Thapa Technical",
//             active : true
//         })

//         const result = await reactPlaylist.save();
//         console.log(result);

//     } catch (error) {
//         console.log(error);
//     }
// }

// createDocument();

// ----------- proper data storing end -------------

// ---------- Add multiple document Once Start ------------

// const createDocument = async () => {
//     try {

//         const mongoPlaylist = new Playlist({
//             name : "Mongo",
//             ctype : "Back End",
//             videos : 50,
//             author : "Thapa Technical",
//             active : true
//         })

//         const nodePlaylist = new Playlist({
//             name : "Node JS",
//             ctype : "Back End",
//             videos : 50,
//             author : "Thapa Technical",
//             active : true
//         })

//         const jsPlaylist = new Playlist({
//             name : "JS",
//             ctype : "Front End",
//             videos : 50,
//             author : "Thapa Technical",
//             active : true
//         })

//         const expressPlaylist = new Playlist({
//             name : "Express JS",
//             ctype : "Back End",
//             videos : 50,
//             author : "Thapa Technical",
//             active : true
//         })

//         const result = await Playlist.insertMany([expressPlaylist,nodePlaylist,jsPlaylist,mongoPlaylist]);
//         console.log(result);

//     } catch (error) {
//         console.log(error);
//     }
// }

// createDocument();

// ---------- Add multiple document Once end ------------


// ----------- Find document with other functions start ------------
// const getDocument = async () =>{
//     try {

//         const result = await Playlist.find({ctype : "Front End"})
//         .select({name:1,_id:0})
//         .limit(1);
//         console.log(result);
        
//     } catch (error) {
//         console.log(error)
//     }
// } 
// getDocument();

// ----------- Find document with other functions end ------------

// ----------- Comparision Operator start ------------------------

// const getDocument = async () =>{
//     try {

//         // const result = await Playlist.find({videos : {$gt : 50}})
//         // const result = await Playlist.find({videos : {$lte : 50}})
//         const result = await Playlist.find({ctype : {$in : ["Back End","Database"]}})
//         .select({name:1,_id:0})
//         // .limit(1);
//         console.log(result);
        
//     } catch (error) {
//         console.log(error)
//     }
// } 
// getDocument();

// ----------- Comparision Operator end --------------------------


// ----------- Logical Query Operator start ----------------------

// Or - The $or operator performs a logical OR operation on an array of one or more <expressions> and selects the documents that satisfy at least one of the <expressions>. 

// const getDocument = async () =>{
//     try {

//         // const result = await Playlist.find({$or : [{ ctype : "Back End"},{author : "Thapa Technical"}]})
//         const result = await Playlist.find({$and : [{ ctype : "Back End"},{author : "Thapa Technical"}]})
//         .select({name:1,_id:0})
//         // .limit(1);
//         console.log(result);
        
//     } catch (error) {
//         console.log(error)
//     }
// } 
// getDocument();

// ----------- Logical Query Operator end ------------------------

// ----------- Advance Query start -------------------------------

//countDocuments()
//sort()

// const getDocument = async () =>{
//     try {

//         const result = await Playlist.find({$and : [{author : "Thapa Technical"}]})
//         .select({name:1,_id:0})
//         // .countDocuments();
//         .sort({name : 1});
//         // .sort({name : -1});   //reverse
//         console.log(result);
        
//     } catch (error) {
//         console.log(error)
//     }
// } 
// getDocument();

// ----------- Advance Query end ---------------------------------

// ----------- Update start -------------------------------

// const getDocument = async (_id) =>{
//     try {

//         // const result = await Playlist.updateOne({_id},{$set : {name : "Javascript"}})
//         const result = await Playlist.findByIdAndUpdate({_id},{$set : {name : "Javascript"}},{new : true,useFindAndModify : false})
//         console.log(result);
        
//     } catch (error) {
//         console.log(error)
//     }
// } 
// getDocument('64c63259043859d7b38c67f5');

// ----------- Update end ---------------------------------

// ----------- Delete start -------------------------------

const getDocument = async (_id) =>{
    try {

        // const result = await Playlist.deleteOne({_id})
        // const result = await Playlist.deleteMany({_id})
        const result = await Playlist.findByIdAndDelete({_id})
        console.log(result);
        
    } catch (error) {
        console.log(error)
    }
} 
getDocument('64c63259043859d7b38c67f4');

// ----------- Dpdate end ---------------------------------

