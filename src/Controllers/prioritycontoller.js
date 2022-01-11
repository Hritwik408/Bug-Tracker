const colors = ["white", "blue", "black"];

export default (priority) => {
  const level = ["High", "Medium", "Low"];
  return {
    level: level[priority - 1],
    color: colors[priority - 1]
  };
};
