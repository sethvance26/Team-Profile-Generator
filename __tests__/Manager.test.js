const Manager = require("../lib/Manager");




test("Can set office number via constructor", () => {
  const testValue = "office";
  const e = new Manager("Foo", 1, "test@test.com", testValue);
  expect(e.office).toBe(testValue);
});
test("getRole() should return \"Intern\"", () => {
  const testValue = "Manager";
  const e = new Manager("Foo", 1, "test@test.com", "office");
  expect(e.getRole()).toBe(testValue);
});

test("Can get office number via getOffice()", () => {
  const testValue = "office";
  const e = new Manager("Foo", 1, "test@test.com", testValue);
  expect(e.getOffice()).toBe(testValue);
});