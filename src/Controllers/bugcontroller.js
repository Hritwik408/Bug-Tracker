import bugmodel from "../Models/bugmodel";

export function retrieveBugs() {
  let data = [];

  data.push(
    new bugmodel({
      _id: 1234567,
      name: "unknown1",
      deatils: "unknown1 information",
      steps: "click and it will do some action",
      version: "v17.17",
      assigned: "hrtiwik verma",
      creator: "hrits project",
      priority: 1,
      time: "9:11"
    })
  );
  data.push(
    new bugmodel({
      _id: 1234567,
      name: "unknown2",
      deatils: "unknown1 information",
      steps: "click and it will do some action",
      version: "v17.17",
      assigned: "hrtiwik verma",
      creator: "hrits project",
      priority: 2,
      time: "9:12"
    })
  );

  let sorted = data.sort((a, b) => {
    return a.priority - b.priority;
  });
  return sorted;
}
