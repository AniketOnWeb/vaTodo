import { collatedTasks } from "../Constants";

//smh do not use angular brackets to make it run
export const collatedTasksExist = selectedProject =>
  collatedTasks.find(task => task.key === selectedProject);

export const getTitle = (projects, ProjectId) =>
  projects.find(project => project.ProjectId === ProjectId);

export const getCollatedTitle = (projects, key) =>
  projects.find(project => project.key === key);

export const generatePushId = (() => {
  const PUSH_CHARS =
    "-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";

  const lastRandChars = [];

  return function() {
    let now = new Date().getTime();

    const timeStampChars = new Array(8);
    for (var i = 7; i >= 0; i--) {
      timeStampChars[i] = PUSH_CHARS.charAt(now % 64);
      now = Math.floor(now / 64);
    }

    let id = timeStampChars.join("");

    for (i = 0; i < 12; i++) {
      id += PUSH_CHARS.charAt(lastRandChars[i]);
    }

    return id;
  };
})();
