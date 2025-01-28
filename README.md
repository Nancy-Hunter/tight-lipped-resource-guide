
# Tight Lipped Resource Guide

Responsive resource Guide for the non-profit Tight Lipped. Designed to be easily updated directly by the client using a google spreadsheet. 

Tight Lipped is a grassroots advocacy organization by and for people with chronic vulvovaginal and pelvic pain conditions.

**Link to project:** https://tight-lipped-resource-guide.onrender.com/

![Tight Lipped Logo](https://images.squarespace-cdn.com/content/v1/619d3c8977221f5b60cee0b5/1a9a74c0-c7f1-4785-ab62-a669c5d611bb/Lips_TransparentBG.png?format=500w)

## How It's Made:

**Tech used:** HTML, CSS, JavaScript, EJS, Sass, Node.js, google-sheets-parser, and Express

Client database is small but subject to frequent changes. While a static website would be more ideal for optimization of speed the client budget does not support having a developer on retainer. To best suit the client's needs the database is lifted using the package google-sheets-parser and dynamically added to the DOM with EJS. 

## Optimizations

Ideally the database would be migrated to proper database which would improve load times and increase security. MongoDB would be a good option. Additionally, the current deploy is utilizing the free tier of render. Upgrading would increase the speed of the http requests.  


