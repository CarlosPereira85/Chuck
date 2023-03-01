import React from 'react';
import './App.css';
import Button from './components/Button';
import DropDown from './components/DropDown';
import Header from './components/Header';
import Joke from './components/Joke';


const App = () => {
  return (
    <main>
    <Header />
    <Joke/>
    <section>
    <DropDown />
    <Button />
    </section>
    </main>
  );
}

export default App;

