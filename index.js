const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

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
    type:"list",
    message:"license",
    name:"licence",
    choices:[
        "1",
        "2",
        "3",
        "4",
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
    fs.writeFile(fileName, data, err => {
        if (err){
            throw err;
        }
    });
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(answers => {
        const response = generateMarkdown(answers);
        console.log(answers);
        writeToFile("README.md",response);
    });
}

// function call to initialize program

init();
