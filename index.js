
//Here we're importing inquirer, fs, and jest
const inquirer = require('inquirer');
const fs = require('fs');
const jest = require('jest');
//Importing our classes for each role

const Manager = require('./lib/Manager.js');
const Employee = require('./lib/Employee.js');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');

