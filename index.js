const generatePage = require('./src/page-template.js');

const {writeFile, copyFile} = require ('./src/generatefile.js');

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
    let employee 
    switch(data.role) {
        case 'Manager':
            employee = new Manager (data.name, data.id, data.email, data.office)
            break;
        case 'Engineer':
            employee = new Engineer(data.name, data.id, data.email, data.github)
            break;
        case 'Intern':
            employee = new Intern(data.name, data.id, data.email, data.school)
            break;
    }

    employees.push(employee)
    if (data.confirmNews === true) {
        console.log ('---------------');
        return questions (['Engineer','Intern']);
    }else {
        const page = generatePage (employees);
        writeFile (page)
        .then (file => {
            console.log(file);
            return copyFile();
        })
        .then(copy => {
            console.log(copy);
        })
        .catch(error => {
            console.log(error);
        })        
    }
})
}
questions(['Manager']);



