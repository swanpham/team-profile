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
    generateHTML = function() {
        return `
        <div class="col-12 mb-2 bg-dark text-light p-3">
          <h3 class="portfolio-item-title text-light">${this.name}</h3>
          <h5 class="portfolio-languages"></h5>
            Intern      
          </h5>
          <p>Id number: ${this.id} </p>
          <p>School name: ${this.school}</p>
          <a href="mailto://${this.email}" class='btn'><i class="far fa-envelope"></i> email</a>           
        </div>
        `
    }
}

module.exports = Intern;