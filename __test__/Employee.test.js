const Employee = require('../lib/Employee');

test( 'test employee getName()', () => {
    const employee = new Employee( 'swan', 2, 'test@test.com');
    expect(employee.getName()).toEqual( 'swan')
})

test( 'test employee getId()', () => {
    const employee = new Employee( 'swan', 2, 'test@test.com');
    expect(employee.getId()).toEqual(2)
})

test( 'test employee getEmail()', () => {
    const employee = new Employee( 'swan', 2, 'test@test.com');
    expect(employee.getEmail()).toEqual( 'test@test.com')
})

test( 'test employee getRole()', () => {
    const employee = new Employee( 'swan', 2, 'test@test.com');
    expect(employee.getRole()).toEqual( 'Employee')
})

