// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [
    function promptUser() {
        return inquirer.prompt([
            {
                type: "input",
                name: "title",
                message: "What is the title of the project?",
            },
            {
                type: "input",
                name: "description",
                message: "Please describe the project",
            },
            {
                type: "input",
                name: "contents",
                message: "Please provide a table of contents",
            },
            {
                type: "input",
                name: "installation",
                message: "Please provide instructions for installation",
            },
            {
                type: "input",
                name: "usage",
                message: "Please describe the usage of the project",
            },
            {
                type: "input",
                name: "license",
                message: "Please provide any licenses",
            },
            {
                type: "input",
                name: "contributing",
                message: "Please list any contributors and guidelines for contribution",
            },
            {
                type: "input",
                name: "tests",
                message: "Please describe tests included, if applicable",
            },
            {
                type: "input",
                name: "username",
                message: "What is your GitHub username?",
            },
            {
                type: "input",
                name: "email",
                message: "What is your email address?"
            }
        ])
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFile("./src/README.md", fileName, data);
}

// TODO: Create a function to initialize app
function init() {
    writeToFile("./src/README.md", questions);
    console.log("README.md was successfully created")
}

// Function call to initialize app
init();
