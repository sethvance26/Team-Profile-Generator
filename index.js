
//Here we're importing inquirer, fs, and jest
const inquirer = require('inquirer');
const fs = require('fs');
const jest = require('jest');

//Importing our classes for each role

const Employee = require('../Team-Profile-Generator/lib/Employee');
const Intern = require('../Team-Profile-Generator/lib/Intern');
const Engineer = require('../Team-Profile-Generator/lib/Engineer');
const Manager = require('../Team-Profile-Generator/lib/Manager');



const teamMembers = [];

const engineerQuestion = [
  {
    type: 'input',
    name: 'engineerGithub',
    message:'What is your github username?',
  }];
  
  const internQuestion = [
  {
    type: 'input',
    name: 'internSchool',
    message: 'Please enter intern school name',
  }];

  const managerQuestion = [
    {
      type: 'input',
      name: 'officeNum',
      message: 'Enter Office Number for Manager',
    }];


const questions = () => {
return inquirer.prompt([
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

])


.then(data => {
    if (data.role === 'Manager') {
      return inquirer.prompt(managerQuestion)
    
.then(data2 => {
  
  const ManagerGuy = new Manager (data.name, data.email, data.id, data2.officeNum,  )
  teamMembers.push(ManagerGuy);

});
    
}})


}; //This is where the questions functions ends.







    
const Markup = (data) => 
  `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css%22%3E">
    <link rel="stylesheet" type="text/css" href="./style.css" />
    <title>Document</title>
  </head>
  <body>

  <div class="employee">
    <section class="card">
      <header>${data.role}</header>
      <h2>${data.name}</h2>
      <h3>${data.id}</h3>
      <img src="./assets/images/camera.jpg" alt="black camera" />
      <p>${data.email}</p>
    </section>

    <section class="card">
    <header>${data.role}</header>
    <h2>${data.name}</h2>
    <h3>${data.id}</h3>
    <img src="./assets/images/camera.jpg" alt="black camera" />
    <p>${data.email}</p>
    </section>

    <section class="card">
    <header>${data.role}</header>
    <h2>${data.name}</h2>
    <h3>${data.id}</h3>
    <img src="./assets/images/camera.jpg" alt="black camera" />
    <p>${data.email}</p>
    </section>

    <section class="card">
    <header>${data.role}</header>
    <h2>${data.name}</h2>
    <h3>${data.id}</h3>
    <img src="./assets/images/camera.jpg" alt="black camera" />
    <p>${data.email}</p>
    </section>
  </div>
</main>

  </body>
  </html>`;


  
 // Function to write README file
const writeToFile = (data) => {
  fs.writeFile('./dist/index.html', Markup(data), (error) =>
  error ? console.log('Error!') : console.log('Success!'));
}


// Function to initialize app
const init = () => {
  questions()
    .then((data) => { 
      console.log(teamMembers)
      writeToFile('./dist/index.html', Markup(data))})  
    .then(() => console.log('Successfully wrote an index.html'))
    .catch((err) => console.error(err));
};

// Function call to initialize app
init();