/**
 * This script executed by nodejs. First part reads input data from 'input.json'
 * Then some processing involving data from input file is done. We do md5 here, 
 * just to demonstrate you may use external modules (md5 is installed using npm).
 * Finally we write result to output.json. So rapise may read it
 */

var fs = require('fs');

var inputPath = 'input.json';
var outputPath = 'output.json'

var inputData = fs.readFileSync(inputPath);

var inputObj = JSON.parse(inputData);
var resultObj = {};

// This is just a sample. We do something with input object using external module
var md5 = require('md5');
resultObj.data = md5(inputObj.data);

// Finally, write results to the output
fs.writeFileSync(outputPath, JSON.stringify(resultObj))