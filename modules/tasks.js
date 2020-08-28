module.exports = {
  getOptimalTasks: (capacity, fg, bg) => {
    var optimal = 0;
    var result = [];

    var bg = bg.filter((f) => f.consumption <= capacity);
    var fg = fg.filter((f) => f.consumption <= capacity);

    fg.forEach((f) =>
      bg.forEach((b) => {
        const sum = b.consumption + f.consumption;
        if (sum > capacity) return;
        else if (sum > optimal) result = [{ f, b }];
        else if (sum === optimal) result.push({ f, b });
        optimal = Math.max(sum, optimal);
      })
    );
    return result;
  },
};
