function createCards (employees){
  let cards = []
  employees.map( em => {
    cards.push(em.generateHTML())
  })
  return cards.join('')
}

const generatePage = (employees) => {
  console.log(employees);

  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Team Profile</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
  </head>
  
  <body>
    <header>
      <div class="container flex-row justify-space-between align-center py-3">
        <h1 class="page-title text-secondary bg-dark py-2 px-3">${employees[0].name}'s Team </h1>      
      </div>
    </header>
    <main class="container my-5">
           
    <section class="my-3" id="portfolio">
      
      <div class="flex-row justify-space-between">       
      ${createCards(employees)}
      </div>
    </section>
  
    </main>
    <footer class="container text-center py-3">
      <h3 class="text-dark">&copy; 2021 by Swan</h3>
    </footer>
  </body>
  </html>
  
`;
};

module.exports = generatePage;