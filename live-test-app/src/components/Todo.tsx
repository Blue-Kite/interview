import { useState } from "react";

export const Count = () => {
  const [toDo, setTodo] = useState<{ text: string; isCompleted: boolean }[]>(
    []
  );
  const [text, setText] = useState("");

  const addTodo = () => {
    if (text) {
      setTodo((prev) => [...prev, { text: text, isCompleted: false }]);
      setText("");
    }
  };

  const changeIsCompleted = (index: number) => {
    const newTodo = [...toDo];
    newTodo[index].isCompleted = !newTodo[index].isCompleted;
    setTodo(newTodo);
  };

  const removeTodo = (index: number) => {
    const newTodo = [...toDo];
    newTodo.splice(index, 1);
    setTodo(newTodo);
  };

  return (
    <div>
      <p>{`todo: ${toDo.length}`}</p>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="ADD TODO"
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {toDo &&
          toDo.map((t, index) => (
            <li key={index}>
              {t.text}{" "}
              <button onClick={() => changeIsCompleted(index)}>
                change isCompleted
              </button>
              <button onClick={() => removeTodo(index)}>remove</button>
            </li>
          ))}
      </ul>
    </div>
  );
};
