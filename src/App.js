import React, { Component } from 'react';
// import PaintingList from './components/PaintingList';
// import Section from './components/Section';
// import Alert from './components/Alert/Alert';
import Container from './components/Container/Container';
// import Box from './components/Box/Box';
// import paintings from './paintings.json';
import ColorPicker from './components/ColorPicker/ColorPicker';
// import Counter from './components/Counter/Counter';
// import Dropdown from './components/Dropdown/Dropdown';
import TodoList from './components/TodoList';
import Form from './components/Form/Form';

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

class App extends Component {
  state = {
    todos: [
      { id: 'id-1', text: 'Learn basic of React', completed: true },
      { id: 'id-2', text: 'Learn react-router', completed: false },
      { id: 'id-3', text: 'Survive on Redux', completed: false },
    ],
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  toggleCompleted = todoId => {
    console.log(todoId);

    this.setState(prevState => ({
      todos: prevState.todos.map(todo => {
        if (todo.id === todoId) {
          console.log('Find todo what we need!');
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    }));
  };

  formSubmitHandler = data => {
    console.log(data);
  };

  render() {
    const { todos } = this.state;
    const totalTodoCount = todos.length;
    const completedTodosCount = todos.reduce(
      (acc, todo) => (todo.completed ? acc + 1 : acc),
      0,
    );
    const unCompletedTodosCount = todos.reduce(
      (acc, todo) => (!todo.completed ? acc + 1 : acc),
      0,
    );
    return (
      <Container>
        {/* <Box type="small" classNames="big red" styles={{ color: '#fff' }} />
      <Box type="medium" />
      <Box type="large" />
      <Alert text="We lost data Master!" type="success" />
      <Alert text="We lost data Master!" type="warning" />
      <Alert text="We lost data Master!" type="error" />
      <Section title="Top of week">
        <PaintingList items={paintings} />
      </Section>
      <Section title="Best" /> */}
        <h1>State of component</h1>

        {/* <Counter initialValue={10} /> */}
        {/* <Dropdown /> */}
        <ColorPicker options={colorPickerOptions} />
        <Form onSubmit={this.formSubmitHandler} />
        <div>
          <p>Sum of todos: {totalTodoCount}</p>
          <p>Sum of completed todos:{completedTodosCount}</p>
          <p>Sum of uncompleted todos:{unCompletedTodosCount}</p>
        </div>
        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
      </Container>
    );
  }
}
export default App;
