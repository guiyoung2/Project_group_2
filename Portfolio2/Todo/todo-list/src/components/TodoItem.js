import React from "react";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import "./TodoItem.css";

const TodoItem = ({
  todo,
  onCheckToggle,
  onInsertToggle,
  onChangeSelectedTodo,
}) => {
  const { id, text, checked } = todo;
  return (
    <div className="TodoItem">
      <div className={`content ${checked ? "checked" : ""}`}>
        {checked ? (
          <MdCheckBox
            onClick={() => {
              onCheckToggle(id);
            }}
          />
        ) : (
          <MdCheckBoxOutlineBlank
            onClick={() => {
              onCheckToggle(id);
            }}
          />
        )}
        <div
          className="text"
          onClick={() => {
            onChangeSelectedTodo(todo);
            onInsertToggle();
          }}
        >
          {text}
        </div>
      </div>
      {/* 체크에 따라 클래스 다르게 하려고 */}
    </div>
  );
};

export default TodoItem;
