const Employee = require ('./Employee');

class Manager extends Employee {
    constructor (name, id, email, office){
        super (name, id, email)
        this.office = office;        
    }

    getRole = function(){
        return this.role = 'Manager';        
    }

    getOffice = function() {
        return this.office;
    }
}

module.exports = Manager;