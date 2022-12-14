import { isThisWeek, isToday, parseISO } from 'date-fns';
import { retrieveStoredData } from './localStorage';

// removes the default project(project having title="All")
const getUserCreatedProjects = () => {
  const storedData = retrieveStoredData();
  // using slice as it will always be the first project in the array!
  return storedData.slice(1);
};

// default project: all
const getDefaultProjectTodos = () => {
  const storedProjects = retrieveStoredData();
  return storedProjects
    .filter((storedProject) => storedProject.projectTitle === 'all')
    .map((storedProject) => {
      return storedProject.todos.map((todo) => todo);
    })
    .flat();
};

const getTodayTodos = () => {
  const storedProjects = retrieveStoredData();
  return storedProjects
    .map((storedProject) => {
      return storedProject.todos.map((todo) => todo);
    })
    .flat()
    .filter((todo) => isToday(parseISO(todo.dueDate)));
};

const getWeekTodos = () => {
  const storedProjects = retrieveStoredData();
  return storedProjects
    .map((storedProject) => {
      return storedProject.todos.map((todo) => todo);
    })
    .flat()
    .filter((todo) => isThisWeek(parseISO(todo.dueDate)));
};

const getProjectOptions = () => {
  const storedProjects = getUserCreatedProjects();
  return storedProjects.map((storedProject) => storedProject.projectTitle);
};

const getProjectTodos = (projectId) => {
  const storedProjects = getUserCreatedProjects();
  // finds the project object and returns it's todos array
  return storedProjects.find(
    (storedProject) => storedProject.projectId === projectId
  ).todos;
};

const getProjectId = (todoId) => {
  const storedProjects = getUserCreatedProjects();
  storedProjects.forEach((storedProject) => {
    storedProject.todos.forEach((todo) => {
      if (todo.todoId === todoId) {
        return storedProject.projectId;
      }
    });
  });
};

export {
  getDefaultProjectTodos,
  getUserCreatedProjects,
  getProjectId,
  getProjectOptions,
  getProjectTodos,
  getTodayTodos,
  getWeekTodos,
};
