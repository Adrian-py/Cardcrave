import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      return await fetch("http://localhost:5000/api");
    };

    fetchData()
      .then((data) => data.json())
      .then((data) => console.log(data));
  }, []);
  return <p className="font-bold">Testing</p>;
}

export default App;
