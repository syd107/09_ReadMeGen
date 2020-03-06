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

//  moving stuff up here temporarily to check stuff

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
      name: "project_name",
      message: "What is the name of your project?"
    },
    {
      type: "input",
      name: "description",
      message: "Please write a short description of your project"
    },
    {
      type: "input",
      name: "dependencies",
      message: "What command should be run to install dependencies?"
    },
    {
      type: "input",
      name: "license",
      message: "What kind of license should your project have?"
    },
    {
      type: "input",
      name: "test",
      message: "What command should be run to run tests?"
    },
    {
      type: "input",
      name: "using_repo",
      message: "What does the user need to know about using the repo?"
    },
    {
      type: "input",
      name: "contributing_repo",
      message: "what does the user need to know about contributing to the repo?"
    }
  ])
  .then(function(promptData) {
    // can pull out any info from my prompts, or could just use (response)
    // step 2
    console.log("prompt complete");
    console.log(promptData);

    apiCall(promptData);
  })
  .catch(function(err) {
    console.log(err);
  });

var apiCall = promptData => {
  const queryUrl = `https://api.github.com/users/${promptData.username}`;

  axios.get(queryUrl).then(function(githubData) {
    // this .then function would be to write the info to the file -- look into this
    //   fs.write('whateverfilename.md', )

    writeFile(githubData, promptData);
    console.log(`axios complete`);
    // .data coming from object in github
    // console.log(githubData.data);

    // step 3
  });
};
var writeFile = (githubData, promptData) => {
  const md = markdown(githubData.data, promptData);

  fs.writeFile("readme.md", md, function(err) {
    if (err) {
      console.log(err);
    }
  });
  console.log("file has been saved");
};

// step 4 html
function generateHtml(answers) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <title>Document</title>
  </head>
  <body>
    <div class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1 class="display-4">Hi! My name is ${answers.name}</h1>
      <p class="lead">I am from ${answers.location}.</p>
      <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
      <ul class="list-group">
        <li class="list-group-item">My GitHub username is ${answers.github}</li>
        <li class="list-group-item">LinkedIn: ${answers.linkedin}</li>
      </ul>
    </div>
  </div>
  </body>
  </html>`;
}
