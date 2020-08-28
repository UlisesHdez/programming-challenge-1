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

it("ResultToString", (done) => {
  result = [
    { f: { id: "a", consumption: 1 }, b: { id: "1", consumption: 1 } },
    { f: { id: "b", consumption: 1 }, b: { id: "2", consumption: 1 } },
    { f: { id: "c", consumption: 1 }, b: { id: "3", consumption: 1 } },
  ];
  const outputStr = parser.resultToString(result);
  expect(outputStr).to.equal("(a, 1), (b, 2), (c, 3)\r\n");
  done();
});
