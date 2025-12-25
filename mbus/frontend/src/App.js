import { useEffect, useState } from "react";

function App() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    fetch("/api/hello")
      .then((res) => res.text())
      .then((data) => setMsg(data));
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-slate-800">
      <h1 className="text-4xl text-green-400 font-bold">{msg}</h1>
    </div>
  );
}

export default App;
