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
    generateHTML = function() {
        return `
        <div class="col-12 mb-2 bg-dark text-light p-3">
          <h3 class="portfolio-item-title text-light">${this.name}</h3>
          <h5 class="portfolio-languages"></h5>
            Manager    
          </h5>
          <p>Id number: ${this.id} </p>
          <p>Office number: ${this.office} </p>
          <a href="mailto://${this.email}" class='btn'><i class="far fa-envelope"></i> email</a>           
        </div>
        `
    }
}

module.exports = Manager;