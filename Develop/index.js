// fs
// util
// axios for git
// inquirer

// github api
// grab username

const fs = require("fs");
const api = require("./utils/api");
const markdown = require("./utils/generateMarkdown");
const axios = require("axios");
const inquirer = require("inquirer");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

const questions = [];

// function promptUser() {
//   return
inquirer
  .prompt([
    {
      type: "input",
      name: "username",
      message: "What is your username?"
    },
    {
      type: "input",
      name: "project name",
      message: "What is the name of your project?"
    },
    {
      type: "input",
      name: "description",
      message: "Please write a short description of your project"
    },
    {
      type: "input",
      name: "install dependencies",
      message: "What command should be run to install dependencies?"
    },
    {
      type: "input",
      name: "license",
      message: "What kind of license should your project have?"
    },
    {
      type: "input",
      name: "run test",
      message: "What command should be run to run tests?"
    },
    {
      type: "input",
      name: "using repo",
      message: "What does the user need to know about using the repo?"
    },
    {
      type: "input",
      name: "contributing repo",
      message: "what does the user need to know about contributing to the repo?"
    }
  ])

  .then(function({ username }) {
    const queryUrl = `https://api.github.com/users/${username}`;
    axios.get(queryUrl).then(function(response) {
      const username = response.data;
    });
    console.log({ username });
  })
  .catch(function(err) {
    console.log(err);
  });

// axios.get("https://www.github.com/user")

// function writeToFile(fileName, data) {}

// function init() {}

// init();
