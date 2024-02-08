import React from "react";
import styled from "styled-components";
import useToggle from "../hooks/use-toggle";

function Form() {
  const [username, setUsername] = React.useState("");
  const [isFocus, toggleFocus] = useToggle(false);

  return (
    <form>
      <section>
        <label
          htmlFor="fido-username"
          className="inline-block w-full font-medium transition-all duration-200 ease-in-out group-focus-within:text-blue-400 text-[2cqw] text-slate-200"
        >
          username
        </label>
        <span className="inline-block h-4 w-1 select-noneb min-h-4 max-h-4 min-w-1 max-w-1" />
        <input
          type="text"
          id="fido-username"
          autoComplete={"email"}
          name="username"
          aria-label="username"
          aria-labelledby="username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          minLength={1}
          maxLength={20}
          required
          className="black relative h-10 w-full rounded-md bg-white px-4 font-bold outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-yellow-400 focus:drop-shadow-lg text-cyan-950"
        />
      </section>
      <span className="inline-block h-16 w-1 select-noneb min-h-16 max-h-16 min-w-1 max-w-1" />
      <button
        type="submit"
        className="bg-slate-50 text-black pt-4 pb-4 pl-8 pr-8 font-bold rounded-md "
      >
        Google
      </button>
    </form>
  );
}

export default Form;
