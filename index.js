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
                name: "Title",
                message: "What is the title of the project?",
            },
            {
                type: "input",
                name: "Description",
                message: "Please describe the project",
            },
            {
                type: "input",
                name: "Table of Contents",
                message: "Please provide a table of contents",
            },
            {
                type: "input",
                name: "Installation",
                message: "Please provide instructions for installation",
            },
            {
                type: "input",
                name: "Usage",
                message: "Please describe the usage of the project",
            },
            {
                type: "input",
                name: "License",
                message: "Please provide any licenses",
            },
            {
                type: "input",
                name: "Contributing",
                message: "Please list any contributors",
            },
            {
                type: "input",
                name: "Tests",
                message: "Please describe tests included, if applicable",
            },
            {
                type: "input",
                name: "Questions",
                message: "Please list instructions for asking questions",
            }
        ])
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
