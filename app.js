"use strict";

const fileIO = require("./modules/fileIOHelper.js");
const constants = require("./constants.js");
const parser = require("./modules/parser.js");

var inputLine = 1;
var capacity = 0;
var foregroundTasks = [];
var backgroundTasks = [];

const main = () => {
  const lineReader = fileIO.getByLineReader(constants.inputFile);
  const stf = fileIO.getWriteStream(constants.outputFile);

  lineReader.on("close", () => {
    stf.close();
  });

  lineReader.on("line", (line) => {
    switch (inputLine) {
      case 1:
        capacity = Number(line);
        break;
      case 2:
        foregroundTasks = parser.parseTasks(line);
        break;
      case 3:
        backgroundTasks = parser.parseTasks(line);
        inputLine = 0;
        console.log(capacity, foregroundTasks, backgroundTasks);
        break;
      default:
    }
    inputLine++;
  });
};

main();
