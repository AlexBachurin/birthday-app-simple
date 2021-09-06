import React, { useState } from "react";
import data from './data';
import List from './List'


function App() {
  let [peoples, setPeoples] = useState(data);

  const clearBirthdays = () => {
    setPeoples([])
  }
  return (
    <main>
      <section className="container">
        <h3>{peoples.length} birthdays today</h3>
        <List peoples={peoples}></List>
        <button onClick={clearBirthdays}>clear all</button>
      </section>
    </main>
  );
}

export default App;
