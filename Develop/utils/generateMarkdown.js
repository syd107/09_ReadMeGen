function generateMarkdown(githubData, promptData) {
  return `
  # ${promptData.project_name}
  [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/syd107)
  ## Description
  ${promptData.description}
  ## Table of Contents 
  ## Installation
  To install necessary dependencies, run the following command:
  
  \`${promptData.dependencies}\`
  
  ## License
  ${promptData.license}
  ## Testing
  To run tests, run the following command:

  \`${promptData.test}\`

  ## Usage
  ${promptData.using_repo}
  ## Contributing
  ${promptData.contributing_repo}
  ## Questions?
**${githubData.name}**

${githubData.bio}
<html><img src="https://avatars3.githubusercontent.com/u/51732808?v=4" style="width: 50px"</html>
`;
}

module.exports = generateMarkdown;
