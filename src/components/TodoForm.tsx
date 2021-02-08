import React, { useRef } from "react";

interface TodoFormProps {
  onAdd(title: string): void;
}

const TodoForm: React.FC<TodoFormProps> = (props) => {
  // const [title, setTitle] = useState<string>("");

  const ref = useRef<HTMLInputElement>(null);

  // {
  //   /* const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setTitle(event.target.value);
  // }; */
  // }

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      props.onAdd(ref.current!.value);
      ref.current!.value = "";
    }
  };

  return (
    <div className="input-field mt2" placeholder="Введите название дела">
      <input
        // value={title}
        onKeyPress={keyPressHandler}
        // onChange={changeHandler}
        ref={ref}
        placeholder="Введите название дела"
        type="text"
        id="title"
      />
      <label htmlFor="title" className="active">
        Введите название дела
      </label>
    </div>
  );
};

export default TodoForm;
