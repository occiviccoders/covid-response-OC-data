// Currently running as a script to fetch data
const axios = require("axios");
const fs = require('fs');
const cvoc= require('./db.js');

// Get data from these urls
const cityUrl = "https://services2.arcgis.com/LORzk2hk9xzHouw9/ArcGIS/rest/services/VIEWLAYER_Orange_County_Cities_COVID19_Cases_with_Child_Age_Groups/FeatureServer/0/query?where=0=0&outFields=*&f=json";
const caseUrl = "https://services2.arcgis.com/LORzk2hk9xzHouw9/ArcGIS/rest/services/occovid_democase_csv/FeatureServer/0/query?where=0%3D0&outFields=%2A&f=json";
const deathUrl = "https://services2.arcgis.com/LORzk2hk9xzHouw9/ArcGIS/rest/services/occovid_demodth_csv/FeatureServer/0/query?where=0%3D0&outFields=%2A&f=json";
const hospUrl = "https://data.ca.gov/api/3/action/datastore_search?resource_id=42d33765-20fd-44b8-a978-b083b7542225&q=Orange&sort=todays_date%20desc&limit=5";

// create todays date string
const today = new Date(); 
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const dateString = months[today.getMonth()] + ' ' + today.getDate() + ', ' + today.getFullYear();


// get the existing covid dataset on this app
let newCvoc = { cities: cvoc.cities };
// prep the current data to remove todays date
newCvoc.counts = cvoc.counts.filter(function(datum){
    return datum.label !== dateString;
});

// writes the data to js files
const writeData = async () => {

    // to query the hospital data, we use the previous date and convert to iso to match the api data
    let dateQuery = new Date(today.getTime() - (today.getTimezoneOffset() * 60000));
    dateQuery.setDate(dateQuery.getDate() - 1);
    dateQuery.setUTCHours(0,0,0,0);
    dateQuery = dateQuery.toISOString().slice(0,-5);

    // Pull Hospital data
    const hospResult = await axios.get(hospUrl);
    const hospData = hospResult.data.result.records.find(function(county){
        return county.county === "Orange" && county.todays_date === dateQuery;
    });
    if (!hospData){
        console.log("err - hospital data")
    }
    
    // Get case data
    const caseResult = await axios.get(caseUrl);
    const caseData = caseResult.data.features[0].attributes;

    const deathResult = await axios.get(deathUrl);
//    const deathData = deathResult.data.features[0].attributes;

    // Parse data
    const jsonData = [
        {
            "category": "Total Cases",
            "type": "Cases",
            "count": caseData.total_cases,
        },
        {
            "category": "Total Cases",
            "type": "Deaths",
            "count": 0,//deathData.total_dth,
        },
        {
            "category": "Currently",
            "type": "Hospitalized",
            "count": hospData.hospitalized_covid_confirmed_patients,
        },
        {
            "category": "Currently",
            "type": "ICU",
            "count": hospData.icu_covid_confirmed_patients,
        },
        {
            "category": "Male",
            "type": "Cases",
            "count": caseData.case_male,
        },
        {
            "category": "Male",
            "type": "Deaths",
            "count": 0,//.dth_male,
        },
        {
            "category": "Female",
            "type": "Cases",
            "count": caseData.case_female,
        },
        {
            "category": "Female",
            "type": "Deaths",
            "count": 0,//.dth_female,
        },
        {
            "category": "Unknown",
            "type": "Cases",
            "count": caseData.case_unk_sex,
        },
        {
            "category": "Unknown",
            "type": "Deaths",
            "count": 0,//.dth_unk_sex,
        },
        {
            "category": "Other",
            "type": "Cases",
            "count": caseData.case_oth_sex,
        },
        {
            "category": "Other",
            "type": "Deaths",
            "count": 0,//.dth_oth_sex,
        },
        {
            "category": "<18",
            "type": "Cases",
            "count": caseData.case_0_17,
        },
        {
            "category": "<18",
            "type": "Deaths",
            "count": 0,//.dth_0_17,
        },
        {
            "category": "18 - 24",
            "type": "Cases",
            "count": caseData.case_18_24,
        },
        {
            "category": "18 - 24",
            "type": "Deaths",
            "count": 0,//.dth_18_24,
        },
        {
            "category": "25 - 34",
            "type": "Cases",
            "count": caseData.case_25_34,
        },
        {
            "category": "25 - 34",
            "type": "Deaths",
            "count": 0,//.dth_25_34,
        },
        {
            "category": "35 - 44",
            "type": "Cases",
            "count": caseData.case_35_44,
        },
        {
            "category": "35 - 44",
            "type": "Deaths",
            "count": 0,//.dth_35_44,
        },
        {
            "category": "45 - 54",
            "type": "Cases",
            "count": caseData.case_45_54,
        },
        {
            "category": "45 - 54",
            "type": "Deaths",
            "count": 0,//.dth_45_54,
        },
        {
            "category": "55 - 64",
            "type": "Cases",
            "count": caseData.case_55_64,
        },
        {
            "category": "55 - 64",
            "type": "Deaths",
            "count": 0,//.dth_55_64,
        },
        {
            "category": "65 - 74",
            "type": "Cases",
            "count": caseData.case_65_74,
        },
        {
            "category": "65 - 74",
            "type": "Deaths",
            "count": 0,//.dth_65_74,
        },
        {
            "category": "75 - 84",
            "type": "Cases",
            "count": caseData.case_75_84,
        },
        {
            "category": "75 - 84",
            "type": "Deaths",
            "count": 0,//.dth_75_84,
        },
        {
            "category": "≥ 85",
            "type": "Cases",
            "count": caseData.Case_85,
        },
        {
            "category": "≥ 85",
            "type": "Deaths",
            "count": 0,//.dth_85,
        }
    ];

    // function to convert number to string
    const numToString = function(x) {
        if(x){
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");            
        } else {
            return "";
        }
    }

    // pull data from OC arcgis dashboard and parse
    /** USE THIS WHEN CITY URL IS WORKING (START) **/
    const cityResult = await axios.get(cityUrl);
    const jsonLocation = cityResult.data.features.map(function(city){
        let population = city.attributes.Total_Pop;
        if(population){
            population = numToString(city.attributes.Total_Pop);
        } else {
            population = "Not Available"
        }
        return { 
            city: city.attributes.City,
            population: population,
            cases: numToString(city.attributes.Tot_Cases)
        }
    }).filter(function(city){
        return city.city;
    }).sort(function(a, b){
        if ( a.city < b.city ){
            return -1;
        }
        if ( a.city > b.city ){
            return 1;
        }
        return 0;
    });
    /** USE THIS WHEN CITY URL IS WORKING (END) **/

    /** USE THIS IF CITY URL STOPS WORKING (START) **/
    // get the last location, which we'll need to update manually.  This is if the city url stops working...
    /*let jsonLocation = newCvoc.counts.slice(-1)[0].location.filter(function(datum){
        return datum.city !== "All of Orange County";
    });*/
    /** USE THIS IF CITY URL STOPS WORKING (END) **/

    // add all of OC
    jsonLocation.push({
        "city": "All of Orange County",
        "population": "3,222,498",
        "cases": numToString(caseData.total_cases),
        "deaths": 0//numToString(deathData.total_dth)
    })

    /** USE THIS WHEN CITY URL IS WORKING (START) **/
    const checkSum = newCvoc.counts.slice(-1)[0].location.find(function(datum){
        return datum.city === "Santa Ana";
    });

    // check for any new cities or no data changes
    jsonLocation.map(function(city){
        let checkData = newCvoc.cities.find(function(index){
            return index.city === city.city || city.city === "Other*" || city.city === "Unknown**";
        })
        if(!checkData){
            newCvoc.cities.push({
                city: city.city,
                location: [],
            })
            newCvoc.cities = newCvoc.cities.sort(function(a, b){
                let nameA=a.city.toLowerCase(), nameB=b.city.toLowerCase()
                if (nameA < nameB || nameA === 'All of Orange County') //sort string ascending
                    return -1 
                if (nameA > nameB)
                    return 1
                return 0 //default return value (no sorting)
            });
            console.log('ALERT:  THERE ARE NEW CITIES')
            console.log('ALERT:  THERE ARE NEW CITIES')
            console.log('ALERT:  THERE ARE NEW CITIES')                        
            console.log(city.city)
        }
        if(checkSum.city === city.city && checkSum.cases === city.cases){
            console.log('ALERT:  DOUBLE CHECK YOUR DATA!!!  IT APPEARS THERE ARE NO UPDATES FOR SANTA ANA....') 
            console.log('ALERT:  DOUBLE CHECK YOUR DATA!!!  IT APPEARS THERE ARE NO UPDATES FOR SANTA ANA....') 
            console.log('ALERT:  DOUBLE CHECK YOUR DATA!!!  IT APPEARS THERE ARE NO UPDATES FOR SANTA ANA....')                         
        }
    })
    /** USE THIS WHEN CITY URL IS WORKING (END) **/

    // add the latest data
    newCvoc.counts.push({
        label: dateString,
        data: jsonData,
        location: jsonLocation
    });

    // write the frontend data
    // write the data
    fs.writeFile('assets/js/db.js', "const cvoc = " + JSON.stringify(newCvoc, null, 4) + ";\n" + "module.exports = cvoc;", (err) => { 
        // In case of a error throw err. 
        if (err) throw err; 
    })
}
writeData();

