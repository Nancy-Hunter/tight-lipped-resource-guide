const { parse } = require("dotenv");
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

function parseSpreadsheet (spreadsheetID, options, DB) {
    const spreadsheet = new PublicGoogleSheetsParser(spreadsheetID, options)
    spreadsheet.parse().then( data => {
        DB.push(data)
    })
}
async function parseFiles () {
    parseSpreadsheet(TightLippedID, aboutTightLipped, aboutTightLippedDB)
    parseSpreadsheet(TightLippedID, findAProvider, findAProviderDB)
    parseSpreadsheet(TightLippedID, resources, resourcesDB)
    parseSpreadsheet(TightLippedID, mentalHealthResources, mentalHealthResourcesDB)
    parseSpreadsheet(TightLippedID, connection, connectionDB)
    parseSpreadsheet(TightLippedID, supplementalHealth, supplementalHealthcareDB)
}
parseFiles()

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
            supplementalHealthcareDB : supplementalHealthcareDB.flat()
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
app.get("/supplementalResources", (req,res) =>{
        res.render("supplementalResources.ejs", { 
            resourcesDB: resourcesDB.flat(),
            supplementalHealthcareDB : supplementalHealthcareDB.flat()
         });
            
    });
app.listen(process.env.PORT, ()=>{
    console.log(`Listening...`);
});