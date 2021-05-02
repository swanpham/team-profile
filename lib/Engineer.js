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

    generateHTML = function() {
        return `
        <div class="col-12 mb-2 bg-dark text-light p-3">
          <h3 class="portfolio-item-title text-light">${this.name}</h3>
          <h5 class="portfolio-languages"></h5>
            Engineer           
          </h5>
          <p>Id number: ${this.id} </p>
          <a href="https://github.com/${this.github}" class="btn"><i class="fab fa-github mr-2"></i>GitHub</a>
          <a href="mailto://${this.email}" class='btn'><i class="far fa-envelope"></i> email</a>           
        </div>
        `
    }
}

module.exports = Engineer;