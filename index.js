const fs = require('fs');

const generatePage = require('./src/page-template.js');

const pageHTML = generatePage('Swan.Team');


const inquirer = require('inquirer');

const Manager = require('./lib/Manager');

const Engineer = require('./lib/Engineer');

const Intern = require('./lib/Intern');

let employees = [];

function questions(roles) {
    inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'Enter employee role',
            default: roles[0],
            choices: roles        
        },
        {
            type:'text',
            name:'name',
            message:'enter name'
        },

        {
            type:'text',
            name:'id',
            message:'enter id'
        },

        {
            type:'text',
            name:'email',
            message:'enter email'
        },

        {
            type:'text',
            name:'office',
            message:'enter office numbers',
            when: ({role}) => {
                if (role === 'Manager') {
                    return true;
                }else{
                    return false;
                }
            },
        },

        {
            type:'text',
            name:'github',
            message:'enter github username',
            when: ({role}) => {
                if (role === 'Engineer') {
                    return true;
                }else{
                    return false;
                }
            },
        },

        {
            type:'text',
            name:'school',
            message:'enter school name',
            when: ({role}) => {
                if (role === 'Intern') {
                    return true;
                }else{
                    return false;
                }
            },
        }, 

        {
            type:'confirm',
            name:'confirmNews',
            message:'Do you want to add more Employee?',
            default: false
        }

        
]).then (data => {
    employees.push(data)
    if (data.confirmNews === true) {
        console.log ('---------------');
        return questions (['Engineer','Intern']);
    }else {
        console.log (employees);
    }
})
}
questions(['Manager']);



