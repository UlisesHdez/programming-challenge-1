module.exports = {
  parseTasks: (line) => {
    return line
      .replace(/ /g, "")
      .match(/\((.*?)\)/g)
      .map((r) => r.replace(/\(|\)/g, ""))
      .map((t) => {
        const taskData = t.split(",");
        return { id: taskData[0], consumption: Number(taskData[1]) };
      });
  },
  resultToString: (result) => {
    return result
      .map((r) => `(${r.f.id}, ${r.b.id})`)
      .join(", ")
      .concat("\r\n");
  },
};
