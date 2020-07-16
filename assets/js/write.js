// Currently running as a script to fetch data
const fs = require('fs');
const cvoc= require('./db.js');

    //this creates a usable json file.
    fs.writeFile('assets/js/data.json', JSON.stringify(cvoc), 
                 (err) => { if(err) throw err;})

    //kaggle can autoupdate a dataset by connecting it to a repo, which allows
    //this data to be used for statistical analysis, which would be very nice