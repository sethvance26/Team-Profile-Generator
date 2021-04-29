const Intern = require('../lib/Intern.js');

test('Can set school name via constructor', () => {
    const testValue = "SchoolName";
    const e = new Intern("Foo", 1, "test testing", testValue);
    expect (e.school).toBe(testValue);
});  

test("getRole() should return \"Intern\"", () => {
    const testValue = "Intern";
    const e = new Intern("Foo", 1, "test testing", "SchoolName");
    expect(e.getRole()).toBe(testValue);
  });

  test("Can get School name via getSchool()", () => {
    const testValue = "SchoolName";
    const e = new Intern("Foo", 1, "test testing", testValue);
    expect(e.getSchool()).toBe(testValue);
  });