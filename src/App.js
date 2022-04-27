import { useEffect, useState } from "react";
import "./App.css";
import Card from "./Components/Card";
import Navbar from "./Components/Navbar";

function App() {
  const [data, setData] = useState(Array(30).fill(0));
  const [load, setLoad] = useState(true);

  const fetchData = async () => {
    const jsonUserData = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );
    const userData = await jsonUserData.json();

    const jsontodosData = await fetch(
      "https://jsonplaceholder.typicode.com/todos"
    );
    const todosData = await jsontodosData.json();

    const arr = [];

    for (let i = 0; i < todosData.length; i++) {
      const user = userData.filter((obj) => todosData[i].userId === obj.id);

      const newObj = {
        id: todosData[i].id,
        name: user[0].name,
        email: user[0].email,
        title: todosData[i].title,
        completed: todosData[i].completed,
      };

      arr.push(newObj);
    }

    setTimeout(() => {
      setData(arr);
      setLoad(false);
    }, 3000);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="nav-raj"></div>
      <div className="container-raj">
        <Navbar />
        <div className="card-holder-raj">
          {data.map((obj) => (
            <Card
              key={obj?.id}
              name={obj?.name}
              email={obj?.email}
              title={obj?.title}
              status={obj?.completed}
              load={load}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
