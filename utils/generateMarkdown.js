// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license || license === "none") {
    return '';
  }
  if (license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`

  }
  else if (license === "GNU GPLv3") {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`

  }
  else if (license === "CC0") {
    return `[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)`
  }
  return '';
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license || license === "none") {
    return '';
  }
  if (license === "MIT") {
    return `[MIT License link](https://opensource.org/licenses/MIT)`

  }
  else if (license === "GNU GPLv3") {
    return `[GNU GPLv3 License link](https://www.gnu.org/licenses/gpl-3.0)`

  }
  else if (license === "CC0") {
    return `[Creative Commons License link](http://creativecommons.org/publicdomain/zero/1.0/)`

  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license || license === "none") {
    return '';
  }
  return license

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
# ${data.title}
${renderLicenseBadge(data.license)}
## Description
${data.description}
## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${data.installation}
## Usage
${data.usage}
## License
${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}
## Contributing
${data.contributing}
## Tests
${data.tests}
## Questions
Any questions reachout at ${data.email}
or visis my GitHub [${data.gitHubUsername}](https://github.com/${data.gitHubUsername})
`;
}

module.exports = generateMarkdown;
