import React, { useEffect, useState } from "react";
import Section from "./components/Section/Section";
import TaskList from "./components/TaskList/TaskList";

const App = () => {
  const [data, setData] = useState();
  const [error, setError] = useState();

  const getData = async () => {
    try {
      const res = await fetch(process.env.REACT_APP_BACKEND_URL);
      const data = await res.json();
      if (!data.err) {
        return setData(data);
      }

      console.log(data.err);
      setError(data.err);
    } catch (err) {
      return setError(err.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const getContent = () => {
    if (error) {
      return <div>{error}</div>;
    }

    if (!data) {
      return <div>Loading...</div>;
    }

    if (data.length === 0) {
      return <div>No Tasks found</div>;
    }

    return <TaskList tasks={data} />;
  };

  return (
    <Section>
      <h1>Tasks</h1>
      {getContent()}
    </Section>
  );
};

export default App;
