import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import CreateTaskInput from './CreateTaskInput';
import Task from './Task';
import * as tasksAction from '../task.actions';
import { sortedTasksListSelector } from '../task.selectors';

const TasksList = ({
  tasks,
  getTaskList,
  updateTask,
  deleteTask,
  createTask,
}) => {
  useEffect(() => {
    getTaskList();
  }, []);

  return (
    <main className="todo-list">
      <CreateTaskInput onCreate={createTask} />
      <ul className="list">
        {tasks.map(task => (
          <Task
            key={task.id}
            {...task}
            onChange={updateTask}
            onDelete={deleteTask}
          />
        ))}
      </ul>
    </main>
  );
};

const mapState = state => ({
    tasks: sortedTasksListSelector(state),
  });

const mapDispatch = {
  getTaskList: tasksAction.getTaskList,
  updateTask: tasksAction.updateTask,
  deleteTask: tasksAction.deleteTask,
  createTask: tasksAction.createTask,
};

export default connect(mapState, mapDispatch)(TasksList);
