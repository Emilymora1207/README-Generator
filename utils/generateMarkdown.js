// returns a license badge based on which license is passed in. If there is no license, returns an empty string
function renderLicenseBadge(license) {
  if(license !== 'none'){
    return `![license](https://img.shields.io/badge/license-${license}-green)`
  } else {
    return ``
  }
}

// returns the license link. If there is no license, returns an empty string
function renderLicenseLink(license) {
  if (license !== 'none'){
    return '[License](#license)'
  } else {
    return ''
  }
}

// TODO: Create a function that 
// returns the license section of README. If there is no license, returns an empty string
function renderLicenseSection(license) {
  if (license !== 'none'){
    return `## License`
  } else {
    return ''
  }
}

//generates markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description

${data.description}

## Table of contents

[Installation](#installation)  
[Usage](#usage)
${renderLicenseLink(data.license)}
[Contributors](#contributors)
[Tests](#tests)
[Questions](#questions)

## Installation

${data.installation}

## Usage 

${data.usage}

${renderLicenseSection(data.license)} 

 ${renderLicenseBadge(data.license)} 

## Contributors

${data.contributing}

## Tests

${data.tests}

## Questions

[My Github username is ${data.gitHubUsername}](https://github.com/${data.gitHubUsername})

I can be reached by email at ${data.email}.

  `;
}

module.exports = generateMarkdown;
