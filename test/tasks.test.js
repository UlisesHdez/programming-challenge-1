const { expect } = require("chai");
const tasks = require("../modules/tasks.js");

it("DoNotSurpassCapacity", (done) => {
  const result = tasks.getOptimalTasks(
    20,
    [
      { id: "a", consumption: 1 },
      { id: "b", consumption: 20 },
    ],
    [
      { id: "1", consumption: 1 },
      { id: "2", consumption: 20 },
    ]
  );
  expect(result.length).to.equal(1);
  expect(result[0].f.id).to.equal("a");
  expect(result[0].b.id).to.equal("1");
  done();
});

it("AllOptimalConfigurations", (done) => {
  const result = tasks.getOptimalTasks(
    21,
    [
      { id: "a", consumption: 1 },
      { id: "b", consumption: 20 },
    ],
    [
      { id: "1", consumption: 1 },
      { id: "2", consumption: 20 },
    ]
  );
  expect(result.length).to.equal(2);
  expect(result[0].f.id).to.equal("a");
  expect(result[0].b.id).to.equal("2");
  expect(result[1].f.id).to.equal("b");
  expect(result[1].b.id).to.equal("1");
  done();
});

it("WithFloats", (done) => {
  const result = tasks.getOptimalTasks(
    10.5,
    [
      { id: "a", consumption: 0.4 },
      { id: "b", consumption: 1 },
    ],
    [
      { id: "1", consumption: 10.1 },
      { id: "2", consumption: 10 },
    ]
  );
  expect(result.length).to.equal(1);
  expect(result[0].f.id).to.equal("a");
  expect(result[0].b.id).to.equal("1");
  done();
});
