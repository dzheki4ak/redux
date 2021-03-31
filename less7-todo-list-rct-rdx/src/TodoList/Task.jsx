import React from 'react';

const Task = () => {
  return (
    <>
      <li className="list-item">
        <input type="checkbox" className="list-item__checkbox" />
        Learn React
        <button className="list-item__delete-btn"></button>
      </li>
      <li className="list-item list-item_done">
        <input type="checkbox" className="list-item__checkbox" />
        Lear HTML / CSS
        <button className="list-item__delete-btn"></button>
      </li>
      <li className="list-item list-item_done">
        <input type="checkbox" className="list-item__checkbox" />
        Learn JavaScript
        <button className="list-item__delete-btn"></button>
      </li>
      <li className="list-item list-item_done">
        <input type="checkbox" className="list-item__checkbox" />
        Learn Dev Tools
        <button className="list-item__delete-btn"></button>
      </li>
    </>
  );
};

export default Task;
