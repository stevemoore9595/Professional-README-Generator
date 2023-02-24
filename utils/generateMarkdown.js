// Function that returns the license link an and badge
function renderLicenseLink(license) {
  if ('MIT' === license) {
    return 'https://img.shields.io/badge/License-MIT-yellow.svg'
  } else if ('Mozilla' === license) {
    return 'https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg'
  } else {
    return 'https://img.shields.io/badge/License-Apache%202.0-blue.svg'
  }
};

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

  - Questions may be submitted here: ${data.Questions}

  - Click the following link to access my GitHub profile: ${data.Username}, https://github.com/stevemoore9595
  
  - For any additional questions, you may contact me at: ${data.Email}
  `
}

module.exports = generateMarkdown;
