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
};
