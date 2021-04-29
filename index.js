
//Here we're importing inquirer, fs, and jest
const inquirer = require('inquirer');
const fs = require('fs');
const jest = require('jest');

//Importing our classes for each role

const Employee = require('../Team-Profile-Generator/lib/Employee');
const Intern = require('../Team-Profile-Generator/lib/Intern');
const Engineer = require('../Team-Profile-Generator/lib/Engineer');
const Manager = require('../Team-Profile-Generator/lib/Manager');

const questions = [
    {
        type: 'list',
        name: 'role',
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

];

const Markup = (data) =>
  `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css%22%3E
    <title>Document</title>
  </head>
  <body>
      <header style="background-color:red; color: white; text-align: center; font-size: large;">My Team</header>

  <div class="card" style="width: 18rem;">
    <div class="container">
      <div style="background-color:rgb(66, 57, 240); color: white;">
          <h4 class="display-6">${data.name}</h4>
          <h4>${data.role}.</h4>
      </div> 
      <ul class="list-group">
        <li class="list-group-item">ID: ${data.id}</li>
        <li class="list-group-item">Email: ${data.email}</li>

      </ul>
    </div>
  </div>

  </body>
  </html>`



const userPrompt = () => {
    return inquirer.prompt(questions)
  }
  
  
  
  
  //This function writes a new README.md file and displays "Sucessful!" if it worked correctly, and "Error" if there was an issue. 
  const writeHtml = (data) => {
    fs.writeFile('teamPage.html', data, (error) =>
    error ? console.log('Error!') : console.log('Successful!'));
  }
  
  
  
  
  
  
  //This function initializes our application and tells the userPrompt function to run first, then takes that data generates a markdown, and writes the README with that information. 
  const init = () => {
  userPrompt()
    .then((data) => {
     writeHtml(data)
      Markup(data)
    
    });
  }
  
  
  
  
  // Function call to initialize app
  init();








///////////////////////////////////////////////////////////////////////////////

    // const userPrompt = () => {
    //     return inquirer.prompt(questions)
    //   }
    
    
      
    //   //This function initializes our application and tells the userPrompt function to run first, then takes that data generates a markdown, and writes the README with that information. 
    //   const init = () => {
    //   userPrompt()
    //   .then((fs.writeFile('newTeam.html', data, (error) =>
    //   error ? console.log('Error!') : console.log('Successful!'))));
    //   };
    
      
    //   // Function call to initialize app
    //   init();

