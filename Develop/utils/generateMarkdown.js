function generateMarkdown(githubData, promptData) {
  return `
# ${githubData.login}
## ${promptData.description}
## ${githubData.name}
`;
}

module.exports = generateMarkdown;
