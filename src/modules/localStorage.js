const initLocalStorage = () => {
  // default project: all
  const projects = [{ projectTitle: 'all', todos: [] }];
  localStorage.setItem('projects', JSON.stringify(projects));
};

const saveTodoToLocalStorage = (
  todoId,
  todoTitle,
  description,
  dueDate,
  inputtedProjectTitle,
  priority,
  checkedattr = ''
) => {
  const todo = {
    todoId,
    todoTitle,
    description,
    dueDate,
    priority,
    checkedattr,
  };
  const storedProjects = JSON.parse(localStorage.getItem('projects'));
  storedProjects.forEach((storedProject) => {
    if (storedProject.projectTitle === inputtedProjectTitle) {
      storedProject.todos.push(todo);
    }
  });
  localStorage.setItem('projects', JSON.stringify(storedProjects));
};

const saveProjectToLocalStorage = (
  projectId,
  projectTitle,
  highPriorityTasksCount,
  selectedProjectBg
) => {
  const project = {
    projectId,
    projectTitle,
    highPriorityTasksCount,
    selectedProjectBg,
    todos: [],
  };
  const storedProjects = JSON.parse(localStorage.getItem('projects'));
  storedProjects.push(project);
  localStorage.setItem('projects', JSON.stringify(storedProjects));
};

const deleteTodoFromLocalStorage = (todoId) => {
  const storedProjects = JSON.parse(localStorage.getItem('projects'));
  storedProjects.forEach((storedProject) => {
    const todos = storedProject.todos;
    todos.forEach((todo) => {
      if (todoId === todo.todoId) {
        const index = todos.indexOf(todoId);
        todos.splice(index);
      }
    });
  });
  localStorage.setItem('projects', JSON.stringify(storedProjects));
};

const deleteProjectFromLocalStorage = (projectId) => {
  const storedProjects = JSON.parse(localStorage.getItem('projects'));
  const filteredProjects = storedProjects.filter(
    (storedProject) => storedProject.projectId !== projectId
  );
  localStorage.setItem('projects', JSON.stringify(filteredProjects));
};

const updateCountInLocalStorage = (projectTitle, operation) => {
  const storedProjects = JSON.parse(localStorage.getItem('projects'));
  storedProjects.forEach((storedProject) => {
    if (storedProject.projectTitle === projectTitle) {
      operation === 'increment'
        ? storedProject.highPriorityTasksCount++
        : storedProject.highPriorityTasksCount--;
    }
  });
  localStorage.setItem('projects', JSON.stringify(storedProjects));
};

const updateCheckedAttrInLocalStorage = (todoId, checkedattr) => {
  const storedProjects = JSON.parse(localStorage.getItem('projects'));
  storedProjects.forEach((storedProject) => {
    const todos = storedProject.todos;
    todos.forEach((todo) => {
      if (todoId === todo.todoId) {
        todo.checkedattr = checkedattr;
      }
    });
  });
  localStorage.setItem('projects', JSON.stringify(storedProjects));
};

const retrieveStoredData = () => {
  const storedData = JSON.parse(localStorage.getItem('projects'));
  return storedData;
};

export {
  initLocalStorage,
  saveTodoToLocalStorage,
  saveProjectToLocalStorage,
  deleteTodoFromLocalStorage,
  deleteProjectFromLocalStorage,
  retrieveStoredData,
  updateCountInLocalStorage,
  updateCheckedAttrInLocalStorage,
};
