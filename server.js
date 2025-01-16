const express = require("express");
const app = express();
const PublicGoogleSheetsParser = require('public-google-sheets-parser')

const aboutTightLippedDB = []
const findAProviderDB = []
const resourcesDB = []
const conditionsDB = []
const connectionDB = []
const mentalHealthResourcesDB = []
const supplementalHealthcareDB = []

const TightLippedID= '1Gt8w6KYMYxjsg6lbY8QpVqkQtZfbPQtIpbAXlAAMMKA'

const aboutTightLipped = { sheetName: 'About Tight Lipped'}
const findAProvider = { sheetName: 'Find a Provider'}
const resources = { sheetName: 'Resources'}
const conditions = { sheetName: 'Conditions'}
const connection = { sheetName: 'Connection x Condition'}
const mentalHealthResources = { sheetName: 'Mental Health Resources'}
const supplementalHealth = { sheetName: 'Supplemental Healthcare Resources'}

const aboutSpreadsheet = new PublicGoogleSheetsParser(TightLippedID, aboutTightLipped)
aboutSpreadsheet.parse().then( data => {  
    aboutTightLippedDB.push(data)
})

const findAProviderSpreadsheet = new PublicGoogleSheetsParser(TightLippedID, findAProvider)
findAProviderSpreadsheet.parse().then( data => {
    findAProviderDB.push(data)
})

const resourcesSpreadsheet = new PublicGoogleSheetsParser(TightLippedID, resources)
resourcesSpreadsheet.parse().then( data => {
    resourcesDB.push(data)
})

const mentalHealthSpreadsheet = new PublicGoogleSheetsParser(TightLippedID, mentalHealthResources)
mentalHealthSpreadsheet.parse().then( data => {
    mentalHealthResourcesDB.push(data)
})

const connectionSpreadsheet = new PublicGoogleSheetsParser(TightLippedID, connection)
connectionSpreadsheet.parse().then( data => {
    connectionDB.push(data)
})

//to complile into one database. However having issues load in sequence
// const database = []
// function parseSpreadsheet (spreadsheetID, options) {
//     const spreadsheet = new PublicGoogleSheetsParser(spreadsheetID, options)
//     spreadsheet.parse().then( data => {
//         database.push(data)
//         console.log(data)
//     })
// }

// let googleSheets = [aboutTightLipped, findAProvider, resources, conditions, connectionXCondition, mentalHealthResources, supplementalHealthcareResources]
// async function readFiles (files) {
//     for (let file of files) {
//         await parseSpreadsheet(TightLippedID, file)
//     }
// }
// readFiles(googleSheets)


//Use .env file in config folder
require("dotenv").config({ path: "./config/.env" });

//Using EJS for views
app.set("view engine", "ejs");

//Static Folder
app.use(express.static("./public"));

app.get("/", (req,res) =>{
        res.render("index.ejs", { 
            aboutTightLippedDB: aboutTightLippedDB.flat(), findAProviderDB:findAProviderDB.flat(),
            resourcesDB: resourcesDB.flat(),
            connectionDB : connectionDB.flat(),
         });
            
    });
app.get("/providers", (req,res) =>{
        res.render("providers.ejs", { findAProviderDB:findAProviderDB.flat() });
    });
app.get("/generalInfo", (req,res) =>{
        res.render("generalInfo.ejs", { resourcesDB: resourcesDB.flat() });
    });
app.get("/support", (req,res) =>{
        res.render("support.ejs", { 
            resourcesDB: resourcesDB.flat(), 
            mentalHealthResourcesDB: mentalHealthResourcesDB.flat() });
    });

app.listen(process.env.PORT, ()=>{
    console.log(`Listening...`);
});