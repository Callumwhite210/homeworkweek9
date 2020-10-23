// function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  #${data.title}
  
  ## Table of contents
  [describe](#description)
  [install]
  [usage]
  [license]
  [contributer]
  [test]
  [question]

  ##Description 
  ${data.describe}

  ##Installation
  ${data.install}

  ## Usage information
  ${data.usage}

  ## Lisense used
  ${data.license}
  
  ##Contributer
  ${data.contributer}

  ##Test
  ${data.test}

  ##Questions
  ${data.question}

  Github:[${data.username}](https://github.com/Callumwhite210)
`;
}


module.exports = generateMarkdown;
