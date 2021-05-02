const Intern = require('../lib/Intern');

test( 'test intern getName()', () => {
    const intern = new Intern( 'swan', 2, 'test@test.com', 'testschool');
    expect(intern.getName()).toEqual( 'swan')
})

test( 'test intern getId()', () => {
    const intern = new Intern( 'swan', 2, 'test@test.com', 'testschool');
    expect(intern.getId()).toEqual(2)
})

test( 'test intern getEmail()', () => {
    const intern = new Intern( 'swan', 2, 'test@test.com', 'testschool');
    expect(intern.getEmail()).toEqual( 'test@test.com')
})

test( 'test intern getRole()', () => {
    const intern = new Intern( 'swan', 2, 'test@test.com', 'testschool');

    expect(intern.getRole()).toEqual( 'Intern')
})

test( 'test intern getSchool()', () => {
    const intern = new Intern( 'swan', 2, 'test@test.com', 'testschool');

    expect(intern.getSchool()).toEqual( 'testschool')
})
