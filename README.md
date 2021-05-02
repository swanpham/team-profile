# Team Profile Generator

## As A Manager

  * I want to to generate a webpage that displays my team's basic info
  * So that I have quick access to my Employees's emails and GitHub profiles
  
## Sample HTML file generated 

![Alt text](/src/images/website.JPG?raw=true "Optional Title")

## Installation

  * Clone the repository to your local machine
  * Navigate to the designated folder in bash
  * Execute npm install to install dependencies
    * Inquirer npm package will be installed along with its own dependencies
  * To install dev dependencies, execite npm install --dev
    * Jest npm package will be installed along with its own dependencies
    
## Usage

* GIVEN a command-line application that accepts user input

* WHEN I am prompted for my team members and their information, 
  THEN an HTML file is generated that displays a nicely formatted team roster based on user input
  
* WHEN I am prompted for my team members and their information, 
  THEN an HTML file is generated that displays a nicely formatted team roster based on user input
  
* WHEN I click on an email address in the HTML,
  THEN my default email program opens and populates the TO field of the email with the address
  
* WHEN I click on the GitHub username, 
  THEN that GitHub profile opens in a new tab
  
* WHEN I start the application, 
  THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
  
* WHEN I enter the team manager’s name, employee ID, email address, and office number, 
  THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
  
* WHEN I select the engineer option, 
  THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
  
* WHEN I select the intern option, 
  THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
  
* WHEN I decide to finish building my team, 
  THEN I exit the application, and the HTML is generated

## Walkthrough video 

[![Alt text](/src/images/video1.JPG?raw=true "Optional Title")](https://drive.google.com/file/d/1QgilZu3Q8FKSDIzLJDAo9ib7F4nzoMBr/view?usp=sharing)

https://drive.google.com/file/d/1q66UZrD1MjCbw15WcaWpLzbmsHb_sRyH/view?usp=sharing

## Contribution

 * This project is not open for contribution
## Tests

* Ensure npm install --dev has been run after cloning the repo
* Tests are run using the Jest npm package
* run npm test to test all suites, or to test individually:
  * npm test Employee
  * npm test Manager
  * npm test Engineer
  * npm test Inter
  
## Built With

- CSS
- Javascript

