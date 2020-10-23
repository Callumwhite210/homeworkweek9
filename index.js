
const inquirer = require("inquirer");
const fs = require("fs");
import generateMarkdown from "./utils/generateMarkdown.js";

// array of questions for user
const questions = [
{
    type:"input",
    message:"What is your projects title?",
    name:"title"
},
{
    type:"input",
    message:"Describe your project",
    name:"describe"
},
{
    type:"input",
    message:"How do you install your project?",
    name:"install"
},
{
    type:"input",
    message:"What is the use of your project?",
    name:"usage"
},
{
    type:"input",
    message:"What are the licenses used?",
    name:"licence",
    choices:[
        "MIT",
        "BSD 3",
        "APACHE",
        "GVL-GLP",
        "None"
    ]
},
{
    type:"input",
    message:"Any contributors?",
    name:"contributer"
},
{
    type:"input",
    message:"Any testing?",
    name:"test"
},
{
    type:"input",
    message:"Any questions?",
    name:"question"
}
];

// function to write README file
function writeToFile(fileName, data) {
    writeFile(fileName, data, err => {
        if (err){
            throw err;
        }
    });
}

// function to initialize program
function init() {
    prompt(questions).then(answers => {
        const response = generateMarkdown(answers);
        console.log(answers);
        writeToFile("README.md",response);
    });
}

// function call to initialize program

init();
