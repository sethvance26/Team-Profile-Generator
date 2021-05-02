//Here we're importing inquirer, fs, and jest
const inquirer = require("inquirer");
const fs = require("fs");
const jest = require("jest");

//Importing our classes for each role

const Employee = require("../Team-Profile-Generator/lib/Employee");
const Intern = require("../Team-Profile-Generator/lib/Intern");
const Engineer = require("../Team-Profile-Generator/lib/Engineer");
const Manager = require("../Team-Profile-Generator/lib/Manager");

//This is where we have a new object with our team members stored.
const teamMembers = [];


//These are the questions for the specfic role once it's chosen.
const engineerQuestion = [
  {
    type: "input",
    name: "github",
    message: "What is your github username?",
  },
];

const internQuestion = [
  {
    type: "input",
    name: "internSchool",
    message: "Please enter intern school name",
  },
];

const managerQuestion = [
  {
    type: "input",
    name: "officeNum",
    message: "Enter Office Number for Manager",
  },
];
//Below this we have our base prompt questions. These are asked first.
//The specific questions above are placed due to scope. 
const questions = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "Which role would you like to build?",
        choices: ["Manager", "Engineer", "Intern"],
      },
      {
        type: "input",
        name: "name",
        message: "What is the name of this employee?",
      },
      {
        type: "input",
        name: "id",
        message: "What is their employee ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is their e-mail address?",
      },
    ])
//These below are creating new instantances of constructor classes. 
    .then((data) => {
      if (data.role === "Manager") {
        return inquirer
          .prompt(managerQuestion)

          .then((data2) => {
            const ManagerGuy = new Manager(
              data.name,
              data.email,
              data.id,
              data2.officeNum
            );
            teamMembers.push(ManagerGuy);
          });
      }
//If role is = Intern, then prompt for Intern questions.
      if (data.role === "Intern") {
        return inquirer
          .prompt(internQuestion)

          .then((data2) => {
            const InternGuy = new Intern(
              data.name,
              data.email,
              data.id,
              data2.internSchool
            );
            teamMembers.push(InternGuy);
          });
      }
//If role is = Engineer, then prompt for Engineer questions. 
      if (data.role === "Engineer") {
        return inquirer
          .prompt(engineerQuestion)

          .then((data2) => {
            const EngineerGuy = new Engineer(
              data.name,
              data.email,
              data.id,
              data2.github
            );
            teamMembers.push(EngineerGuy);
          });
      }
          });
      }
    
 //This is where the questions functions ends.

//Here we create a newTeamObject with teamMembers passed in as data. 

let newTeamObj = (teamMembers)
//This loops through each new team member in our new object
for(let i = 0; i < newTeamObj.length; i++){
  let finalPrompt = newTeamObj[i].officeNum || newTeamObj[i].github || newTeamObj[i].internSchool;
  let keys = Object.keys(newTeamObj[i]);
  let lastKey = keys[3];
  let finalOption = lastKey + ":" + finalPrompt

  if (lastKey === undefined){
      finalOption = "";

  } else if (lastKey === 'github'){
      finalOption = (`GitHub : <a href = 'https://www.github.com/${newTeamObj[i].github}'> ${newTeamObj[i].github}</a>`)
      console.log(finalOption)
  }
  else{
      console.log(finalOption)
  }

//This is setting the new card to an empty string so that we can input data.
 let newCard = ""

 let {name, id, email, role} = newTeamObj[i]
newCard+=`  
<div class="employee">
<section class="card">
  <header>${role}</header>
  <h2>${name}</h2>
  <h3>${id}</h3>
  <img src="./assets/images/camera.jpg" alt="black camera" />
  <p>${email}</p>
</section>
</div>`



const Markup = (newCard) =>
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
<main>
${newCard}
</main>

  </body>
  </html>`

// Function to write README file
const writeToFile = (data) => {
  fs.writeFile("./dist/index.html", Markup(data), (error) =>
    error ? console.log("Error!") : console.log("Success!")
  );


const additionalMem = () => {
  inquirer.prompt([
    {
      type:'confirm',
      name: 'addMore',
      message: 'Would you like to add another employee?',
    }
  ])
  if (response.addMore === true){
    questions(teamMembers);
  } else {
    console.log('team', teamMembers)
    let newCard = (teamMembers)
  }
}

// Function to initialize app
const init = () => {
  questions()
    .then((data) => {
      console.log(teamMembers);
      additionalMem()
      writeToFile("./dist/index.html", Markup(data));
    })
    .then(() => console.log("Successfully wrote an index.html"))
    .catch((err) => console.error(err));
};

// Function call to initialize app
init();
}}
