const Manager = require('../lib/Manager');

test( 'test manager getName()', () => {
    const manager = new Manager( 'swan', 2, 'test@test.com', 9);
    expect(manager.getName()).toEqual( 'swan')
})

test( 'test manager getId()', () => {
    const manager = new Manager( 'swan', 2, 'test@test.com', 9);
    expect(manager.getId()).toEqual(2)
})

test( 'test manager getEmail()', () => {
    const manager = new Manager( 'swan', 2, 'test@test.com', 9);
    expect(manager.getEmail()).toEqual( 'test@test.com')
})

test( 'test manager getRole()', () => {
    const manager = new Manager( 'swan', 2, 'test@test.com', 9);

    expect(manager.getRole()).toEqual( 'Manager')
})

test( 'test manager getOffice()', () => {
    const manager = new Manager( 'swan', 2, 'test@test.com', 9);

    expect(manager.getOffice()).toEqual( 9)
})
