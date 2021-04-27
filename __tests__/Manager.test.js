const Manager = require('../lib/Manager.js');

test('Can set office number via constructor', () => {
    const testValue = "OfficeNumber";
    const e = new Manager("Foo", 1, "4313", testValue);
    expect (e.officeNumber).toBe(testValue);
});  

test("getRole() should return \"Manager\"", () => {
    const testValue = "Manager";
    const e = new Manager("Foo", 1, "4313", "OfficeNumber");
    expect(e.getRole()).toBe(testValue);
  });

  test("Can get office number via getOffice()", () => {
    const testValue = "OfficeNumber";
    const e = new Engineer("Foo", 1, "4313", testValue);
    expect(e.getOffice()).toBe(testValue);
  });