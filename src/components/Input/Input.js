import React from "react";

const Input = ({ onInputSubmit }) => {
  const [value, setValue] = React.useState("");

  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onInputSubmit(value);
            setValue("");
          }
        }}
        placeholder="Type here"
        class="input input-bordered input-sm w-full max-w-xs"
      />
    </>
  );
};

export default Input;
