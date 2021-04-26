const Employee = require ('./Employee');

class Engineer extends Employee {
    constructor (name, id, email, github){
        super (name, id, email)
        this.github = github;        
    }

    getRole = function(){
        return this.role = 'Engineer';        
    }

    getGithub = function() {
        return this.github 
    }
}

module.exports = Engineer;