const Engineer = require('../lib/Engineer');

test( 'test engineer getName()', () => {
    const engineer = new Engineer( 'swan', 2, 'test@test.com', 'swanpham');
    expect(engineer.getName()).toEqual( 'swan')
})

test( 'test engineer getId()', () => {
    const engineer = new Engineer( 'swan', 2, 'test@test.com', 'swanpham');
    expect(engineer.getId()).toEqual(2)
})

test( 'test engineer getEmail()', () => {
    const engineer = new Engineer( 'swan', 2, 'test@test.com', 'swanpham');
    expect(engineer.getEmail()).toEqual( 'test@test.com')
})

test( 'test engineer getRole()', () => {
    const engineer = new Engineer( 'swan', 2, 'test@test.com', 'swanpham');

    expect(engineer.getRole()).toEqual( 'Engineer')
})

test( 'test engineer getGithub()', () => {
    const engineer = new Engineer( 'swan', 2, 'test@test.com', 'swanpham');

    expect(engineer.getGithub()).toEqual( 'swanpham')
})

