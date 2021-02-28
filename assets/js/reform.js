// patch to add year stamps to all dates
const cvoc= require('./db.js');
const fs = require('fs');

// get the existing covid dataset on this app
let newCvoc = { cities: cvoc.cities };
// prep the current data to remove todays date
newCvoc.counts = cvoc.counts.map(function(datum){
    let label = datum.label;
    let JanExists = label.search("Jan");
    let FebExists = label.search("Feb");
    if (JanExists>-1 || FebExists>-1){
        datum.label += ", 2021";
    } else {
        datum.label += ", 2020";
    }
    return datum;
});

// writes the data to js files
const writeData = async () => {

    // write the frontend data
    // write the data
    fs.writeFile('assets/js/db.js', "const cvoc = " + JSON.stringify(newCvoc, null, 4) + ";\n" + "module.exports = cvoc;", (err) => { 
        // In case of a error throw err. 
        if (err) throw err; 
    })

}
writeData();