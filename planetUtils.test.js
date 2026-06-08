const formatPlanetName = require("./planetUtils");

test("removes extra spaces from planet names", () => {
  expect(formatPlanetName(" Mars ")).toBe("Mars");
});

test("keeps valid planet names unchanged", () => {
  expect(formatPlanetName("Earth")).toBe("Earth");
});