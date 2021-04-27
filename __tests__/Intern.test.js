const Intern = require('../lib/Engineer.js');

test('Can set school name via constructor', () => {
    const testValue = "SchoolName";
    const e = new Intern("Foo", 1, "test testing", testValue);
    expect (e.school).toBe(testValue);
});