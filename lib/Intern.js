const Employee = require ('./Employee');

class Intern extends Employee {
    constructor (name, id, email, school){
        super (name, id, email)
        this.school = school;        
    }

    getRole = function(){
        return this.role = 'Intern';        
    }

    getSchool = function() {
        return this.school;
    }
}

module.exports = Intern;