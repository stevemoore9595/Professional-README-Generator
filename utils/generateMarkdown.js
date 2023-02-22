// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if ('MIT' === license) {
    return 'https://img.shields.io/badge/License-MIT-yellow.svg'
  } else if ('Mozilla' === license) {
    return 'https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg'
  } else {
    return 'https://img.shields.io/badge/License-Apache%202.0-blue.svg'
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `# ${data.Title} ![License: ${data.License}](${renderLicenseLink(data.License)})

  ## Description

  ${data.Description}

  ## Table of Contents

  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [License](#License)
  - [Contributing](#Contributing)
  - [Tests](#Tests)
  - [Questions](#Questions)

  ## Installation

  ${data.Installation}

  ## Usage

  ${data.Usage}

  ## License

  ${data.License}

  ## Contributing

  ${data.Contributing}

  ## Tests

  ${data.Tests}

  ## Questions

  ${data.Questions}
  
  `
}

module.exports = generateMarkdown;
