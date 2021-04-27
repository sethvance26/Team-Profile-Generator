
//Here we're importing inquirer and fs
const inquirer = require('inquirer');
const fs = require('fs');

//Importing our classes for each role

const Manager = require('./lib/Manager.js');
const Employee = require('./lib/Employee.js');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');

