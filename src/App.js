import React from 'react';
import './App.css';
import TheHeader from "./TheHeader";
import Holiday from "./Holiday";
import Weather from "./Weather";
import Time from "./Time";
import Searchbar from "./Searchbar";
import Currency from "./Currency";
import TheFooter from "./TheFooter";


function App() {
  return (
    <div className="App">
      <TheHeader />
      <Holiday />
      <Weather />
      <Time />
      <Searchbar />
      <Currency />
      <TheFooter />
    </div>
  );
}

export default App;
