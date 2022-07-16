import React from "react";
import styles from "./index.module.scss";

interface InputPlusProps {
  onAdd: (title: string) => void;
}

export const InputPlus: React.FC<InputPlusProps> = ({ onAdd }) => {
  const [inputValue, setInputValue] = React.useState("");

  const addTask = React.useCallback(() => {
    onAdd(inputValue);
    setInputValue("");
  }, [inputValue]);

  return (
    <div className={styles.inputPlus}>
      <input
        type="text"
        className={styles.inputPlusTitle}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            addTask();
          }
        }}
        placeholder="Text your task"
      />
      <button
        aria-label="Add"
        className={styles.inputPlusButton}
        onClick={addTask}
      />
    </div>
  );
};
