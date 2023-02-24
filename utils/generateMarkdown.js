// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if ('MIT' === license) {
    return 'https://img.shields.io/badge/License-MIT-yellow.svg'
  } else if ('Mozilla' === license) {
    return 'https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg'
  } else {
    return 'https://img.shields.io/badge/License-Apache%202.0-blue.svg'
  }
};

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// Function to generate markdown for README
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

  ## Click the following link to access my GitHub profile: ${data.Questions} https://github.com/stevemoore9595
  
  ## For any additional questions, you may contact me at: ${data.Questions}
  `
}

module.exports = generateMarkdown;
