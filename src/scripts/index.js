import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import root from 'lodash._root';
import TodoApp from 'containers/TodoApp';
import './index.css';

render(
  <TodoApp />,
  root.document.getElementById('todo-app')
);
