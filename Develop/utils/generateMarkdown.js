function generateMarkdown(githubData, promptData) {
  return `
  ## ${promptData.project_name}
  ${promptData.username}
  ${promptData.description}
  ${promptData.dependencies}
  ${promptData.license}
  ${promptData.test}
  ${promptData.using_repo}
  ${promptData.contributing_repo}
# ${githubData.login}
## ${githubData.name}
##$${githubData.avatar_url}
`;
}

module.exports = generateMarkdown;
