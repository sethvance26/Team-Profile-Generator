//Here we're importing inquirer, fs, and jest
const inquirer = require("inquirer");
const fs = require("fs");
const jest = require("jest");
const util = require("util");
//Importing our classes for each role

const Employee = require("../Team-Profile-Generator/lib/Employee");
const Intern = require("../Team-Profile-Generator/lib/Intern");
const Engineer = require("../Team-Profile-Generator/lib/Engineer");
const Manager = require("../Team-Profile-Generator/lib/Manager");

//This is where we have a new object with our team members stored.
const teamMembers = [];

const writeFileAsync = util.promisify(fs.writeFile);

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
    name: "school",
    message: "Please enter intern school name",
  },
];

const managerQuestion = [
  {
    type: "input",
    name: "office",
    message: "Enter Office Number for Manager",
  },
];



const additionalMem = () => {
  inquirer.prompt([
    {
      type:'confirm',
      name: 'addMore',
      message: 'Would you like to add another employee?',
    },
  ])
  .then((userInput) => {
    if (userInput.addMore === true) {
      console.log("prompting for another employee");
      questions();
  }
  else {
    const htmlCard = generateHTMLCard(teamMembers);
    const htmlPage = generateHTMLPage(htmlCard);
    writeFileAsync('./dist/index.html', htmlPage);
}
  });
};


//Below this we have our base prompt questions. These are asked first.
//The specific questions above are placed due to scope. 
const questions = () => {
  inquirer
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
        inquirer
          .prompt(managerQuestion)

          .then((data2) => {
            const ManagerGuy = new Manager(
              data.name,
              data.id,
              data.email,
              data2.office
            );
            teamMembers.push(ManagerGuy);
            additionalMem();
          });
      }
//If role is = Intern, then prompt for Intern questions.
     else if (data.role === "Intern") {
         inquirer
          .prompt(internQuestion)

          .then((data2) => {
            const InternGuy = new Intern(
              data.name,
              data.id,
              data.email,
              data2.school
            );
            teamMembers.push(InternGuy);
            additionalMem();
          });
      }
//If role is = Engineer, then prompt for Engineer questions. 
      else if (data.role === "Engineer") {
         inquirer
          .prompt(engineerQuestion)

          .then((data2) => {
            const EngineerGuy = new Engineer(
              data.name,
              data.id,
              data.email,
              
              data2.github
            );
            teamMembers.push(EngineerGuy);
            additionalMem();
          });
      }
      else {
        const employee = new Employee(
          data.name,
          data.id,
          data.email,
          data.role,
          );
          teamMembers.push(employee);
      }
    });
  };
    
 //This is where the questions functions ends.

//Here we create a newTeamObject with teamMembers passed in as data. 
let generateHTMLCard = (newTeamObj) => {
  console.log("team object", newTeamObj);
 
  let newCard = "";


//This loops through each new team member in our new object
for(let i = 0; i < newTeamObj.length; i++){
  let finalPrompt = newTeamObj[i].office || newTeamObj[i].github || newTeamObj[i].school;
  let keys = Object.keys(newTeamObj[i]);
  let lastKey = keys[3];
  let finalOption = lastKey + ":" + finalPrompt

  if (lastKey === undefined){
      finalOption = "";

  } else if (lastKey === "github"){
      finalOption = `GitHub : <a value="Open Window"
      onclick="window.open('https://www.github.com/${newTeamObj[i].github}')"> ${newTeamObj[i].github}</a>`
      console.log(finalOption)
  } else{
      console.log(finalOption)
  }

//This is setting the new card to an empty string so that we can input data.
 

 let { name, id, email, } = newTeamObj[i]
 console.log(name, id, email, finalOption);
newCard+=`  
<div class="card" style="width: 18rem;">
<div class="container">
  <div style="background-color:rgb(66, 57, 240); color: white;">
     <h4 class="display-6">${name}</h4>
     <h4>${newTeamObj[i].constructor.name}</h4>
   </div> 
    <ul class="list-group">
      <li class="list-group-item">ID: ${id}</li>
      <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
      <li class="list-group-item">${finalOption} </li>
    </ul>
</div>
</div>`;
}
return newCard;
};

const generateHTMLPage = (htmlCard) =>
  `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" type="text/css" href="./style.css" />
    <title>Document</title>
  </head>
  <body>

${htmlCard}


  </body>
  </html>`;

  const writeToFile = (data) => {
    fs.writeFile("./dist/index.html", data, (error) =>
      error ? console.log("Error!") : console.log("Success!")
    );
  };



// Function to initialize app
const init = () => {
  questions();
 
};

// Function call to initialize app
init();

