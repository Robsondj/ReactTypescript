import React, { useState } from 'react';
import List from './components/List';
import style from "./App.module.scss";
import Form from './components/Form';
import { ITask } from './types/task';
import Timer from './components/Timer';

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [selected, setSelected] = useState<ITask>();

  function choseTask (selectedTask: ITask) {
    setSelected(selectedTask);
    setTasks( oldTasks => oldTasks.map(task => ({
      ...task,
      selected: task.id === selectedTask.id ? true : false
    })));
  }

  const finishTask = () => {
    if(selected) {
      setSelected(undefined);
      setTasks( oldTasks => oldTasks.map(task => {
        if(task.id === selected.id) {
          return {
            ...task,
            selected: false,
            completed: true
          }
        }
        return task;
      }));
    }
  }

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <List choseTask={choseTask} tasks={tasks} />
      <Timer selected={selected} finishTask={finishTask} />
    </div>
  );
}

export default App;
