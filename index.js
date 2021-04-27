
//Here we're importing inquirer, fs, and jest
const inquirer = require('inquirer');
const fs = require('fs');
const jest = require('jest');
//Importing our classes for each role

const roles = require('../Team-Profile-Generator/lib');

const questions = [
    {
        type: 'list',
        name: 'type',
        message: 'Which role would you like to build?',
        choices: ['Manager', 'Engineer', 'Intern'],
    },
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of this employee?',
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is their employee ID?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is their e-mail address?',
    },

]
    // const fileWrite = () => {
    //     inquirer
    //         .prompt(questions)
    //         .then((data) => {
    //             console.log("data", data)
    //             fs.writeFileSync('newteam.html', objectMap.renderHtml(data.)
    //         }
    // }

    const userPrompt = () => {
        inquirer.prompt(questions)
        fs.writeFile('newTeam.html', data, (error) =>
        error ? console.log('Error!') : console.log('Successful!'));
      }
      
      
      //This function initializes our application and tells the userPrompt function to run first, then takes that data generates a markdown, and writes the README with that information. 
      const init = () => {
      userPrompt()
      };
    
      
      // Function call to initialize app
      init();



