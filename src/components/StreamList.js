import React, { useState } from "react";

function StreamList() {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(input);

    setInput(""); // Clear the input field after submission
  };

  return (
    <div>
      <h1>StreamList Page</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a movie title"
        />

        <button type="submit">Add to List</button>
      </form>
    </div>
  );
}

export default StreamList;
