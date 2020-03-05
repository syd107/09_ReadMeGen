// fs
// util
// axios for git
// inquirer

// github api
// grab username

// .then access the promise/does something with it

const fs = require("fs");
const api = require("./utils/api");
const markdown = require("./utils/generateMarkdown");
const axios = require("axios");
const inquirer = require("inquirer");
const util = require("util");

// const writeFileAsync = util.promisify(fs.writeFile);

// step 1
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
  .then(function(promptData) {
    // can pull out any info from my prompts, or could just use (response)
    // step 2
    console.log("prompt complete");
    console.log(promptData);

    const queryUrl = `https://api.github.com/users/${promptData.username}`;

    axios.get(queryUrl).then(function(githubData) {
      // this .then function would be to write the info to the file -- look into this
      //   fs.write('whateverfilename.md', )
      console.log(`axios complete`);
      console.log(githubData.data);

      // step 3
      const md = markdown(githubData.data, promptData);

      fs.writeFile("readme.md", md, function(err) {
        if (err) {
          console.log(err);
        }

        console.log("file has been saved");
      });
    });
  })
  .catch(function(err) {
    console.log(err);
  });
