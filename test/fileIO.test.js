const { expect, assert } = require("chai");
const fs = require("fs");
const fileIO = require("../modules/fileIOHelper.js");

it("ErrorReadInputFile", (done) => {
  const inputStream = fileIO.getReadStream("nofile");
  inputStream.on("error", (err) => {
    done();
  });
});

it("ReadInputFile", (done) => {
  const inputStream = fileIO.getReadStream("./test/input.test");
  inputStream.on("data", (data) => {
    expect(data.toString()).to.equal(
      `This is an input test file.\r\nThis is the second line of the input test file.`
    );
    done();
  });
});

it("ReadInputFileByLine", (done) => {
  const inputStream = fileIO.getByLineReader("./test/input.test");
  let line = 0;
  inputStream.on("line", (data) => {
    line++;
    if (line === 1) {
      expect(data).to.equal(`This is an input test file.`);
    } else {
      expect(data).to.equal(`This is the second line of the input test file.`);
      done();
    }
  });
});

it("ErrorWriteStreamToFile", (done) => {
  const outputStream = fileIO.getWriteStream("/this/path/does.not.exist");
  const data = "This is an output stream file test";
  outputStream.on("error", (err) => {
    expect(err).not.be.empty;
    done();
  });
  outputStream.write(data);
});

it("WriteStreamToFile", (done) => {
  const filepath = "./test/output.test";
  if (fs.existsSync(filepath)) {
    fs.unlinkSync(filepath);
  }
  const outputStream = fileIO.getWriteStream(filepath);
  const data = "This is an output stream file test";
  outputStream.on("error", (err) => {
    assert.fail();
  });
  outputStream.write(data);
  outputStream.close();
  done();
});
