import React from "react";
import Paper from "../common/Paper";
import Counter from "../Counter";
import s from "./App.module.css";

const App = () => {
  return (
    <main className={s.main}>
      <Paper title="Counter">
        <Counter initialValue={0} increment={10} decrement={5} />
        {/* <Counter number={0} increment={10} decrement={ 10}/> */}
      </Paper>
    </main>
  );
};

export default App;
