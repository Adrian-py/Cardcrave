import { useEffect, useState } from "react";

interface DataInterface {
  res?: "string";
  test?: "string";
}

function App() {
  const [data, setData] = useState<DataInterface>({});

  useEffect(() => {
    const fetchData = async () => {
      return await fetch("http://localhost:5000/api");
    };

    fetchData()
      .then((data) => data.json())
      .then((data) => setData(data));
  }, []);
  return (
    <p className="font-bold">
      {data.res} {data.test}
    </p>
  );
}

export default App;
