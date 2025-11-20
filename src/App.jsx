import { useRef, useState } from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inputRef.current.value) {
      setError("this filed can not be empty!");
      inputRef.current.focus();
    } else {
      setError("");
      console.log("data was send");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Username</label>
      <input type="text" ref={inputRef} />
      <input type="submit" value={"Send"} />
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}

export default App;
