import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Template from "./components/Template";
import TodoList from "./components/TodoList";
import { MdAddCircle } from "react-icons/md";
import TodoInsert from "./components/TodoInsert";
import Time from "./components/info.js";
import axios from "axios";
import WeatherTest from "./components/Weather";
import TestW from "./components/Weather";

let nextId = 4;

const App = () => {
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [insertToggle, setInsertToggle] = useState(false);
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "할일 1",
      checked: true,
    },
    {
      id: 2,
      text: "할일 2",
      checked: false,
    },
    {
      id: 3,
      text: "할일 3",
      checked: true,
    },
  ]);

  const onInsertToggle = () => {
    if (selectedTodo) {
      setSelectedTodo(null);
    }
    setInsertToggle(prev => !prev);
  };
  // 이전값의 반대값으로 변환 하는 함수

  const onInsertTodo = text => {
    if (text === "") {
      return alert("할 일을 입력해주세요.");
    } else {
      const todo = {
        id: nextId,
        text,
        checked: false,
      };
      setTodos(todos => todos.concat(todo));
      nextId++;
      // push 를 안하는 이유는 push 함수를 사용하면 해당 배열 자체가 변경되고
      // concat 함수를 사용하면 새 배열이 리턴이 되고 기존 배열은 변경이 되지 않기 때문에 concat 를 사용했음
      // 상태 불변성을 지키기 위해서
    }
  };

  const onCheckToggle = id => {
    setTodos(todos =>
      todos.map(todo =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  const onChangeSelectedTodo = todo => {
    setSelectedTodo(todo);
  };

  const onRemove = id => {
    onInsertToggle();
    setTodos(todos => todos.filter(todo => todo.id !== id));
    // 해당 id 가 같지 않은것만 유지 하고 같으면 버린다는 의미로 filter 사용
  };

  const onUpdate = (id, text) => {
    onInsertToggle();
    setTodos(todos =>
      todos.map(todo => (todo.id === id ? { ...todo, text } : todo))
    );
  };

  return (
    <div className="wrapper">
      <div className="bg"></div>
      <div className="container">
        <div className="Todo-box">
          <Template todoLength={todos.length}>
            <TodoList
              todos={todos}
              onCheckToggle={onCheckToggle}
              onInsertToggle={onInsertToggle}
              onChangeSelectedTodo={onChangeSelectedTodo}
            />
            <div className="add-todo-button" onClick={onInsertToggle}>
              <MdAddCircle />
            </div>
            {insertToggle && (
              <TodoInsert
                selectedTodo={selectedTodo}
                onInsertToggle={onInsertToggle}
                onInsertTodo={onInsertTodo}
                onRemove={onRemove}
                onUpdate={onUpdate}
              />
            )}
            {/* insertToggle 이 트루 일때만 보이게 */}
          </Template>
        </div>
        <div className="add-info-box">
          <div className="clock">
            <Time />
          </div>
          <div className="weather">
            <TestW></TestW>
          </div>
          <div className="info-text">
            오늘하루도
            <br />
            화이팅입니다 :)
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
