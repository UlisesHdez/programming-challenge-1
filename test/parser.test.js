const { expect, assert } = require("chai");
const parser = require("../modules/parser.js");

it("ParseTasks", (done) => {
  const line = "(a, 6), (2, 2), (1234-1234-1224, 4)";
  const result = parser.parseTasks(line);
  expect(result.length).to.equal(3);
  expect(result[0].id).to.equal("a");
  expect(result[0].consumption).to.equal(6);
  expect(result.map((r) => r.id).join(",")).to.equal("a,2,1234-1234-1224");
  done();
});
