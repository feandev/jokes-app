import React from 'react';
import './App.css';
import AppContext from '../../context';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Form from '../../components/Form/Form'
import EnglishJokes from '../EnglishJokes.js/EnglishJokes';
import PolishJokes from '../PolishJokes/PolishJokes';
import AllJokes from '../AllJokes.js/AllJokes';
import Navigation from '../../components/Navigation/Navigation';

const polishJokes = [

  {
    name: 'Lekcja',
    content: 'Na lekcji programowania obiektowego student łapie koleżankę obok za pierś. Na to ona: "To prywatne!!!", a on odpowiada: "Myślałem że jesteśmy w tej samej klasie smile emoticon'
  },
  {
    name: 'Dziecko',
    content: 'Javoviec jakimś cudem spłodził dziecko. Miał wymyślić imię dla dziecka. Na wszelki wypadek przygotował 2, jakby urodziły się bliźniaki. Na nieszczęście urodziły się trojaczki i dostały imiona: Jaś, Staś, ArrayIndexOutOfBoundsException'
  },

]

const englishJokes = [
  {
    name: 'Reality show',
    content: 'Why was the JavaScript reality show cancelled after only one episode? People thought it seemed scripted'
  },
]


class App extends React.Component {

  state = {
    polish: [...polishJokes],
    english: [...englishJokes],
    all: [...polishJokes, ...englishJokes]
  }

  addJoke = (e, newJoke) => {
    e.preventDefault();
    // english: state[english]
    this.setState(prevState => ({
      [newJoke.lang]: [...prevState[newJoke.lang], newJoke],
      all: [...this.state.all, newJoke]
    }))
  }

  render() {

    const contextData = {
      ...this.state,
      addJoke: this.addJoke
    }

    return (
      <BrowserRouter>
        <AppContext.Provider value={contextData}>
          <Navigation />
          <Routes>
            <Route path='/' element={<AllJokes />} />
            <Route path='/polish' element={<PolishJokes />} />
            <Route path='/english' element={<EnglishJokes />} />
          </Routes>
          <Form />
        </AppContext.Provider>
      </BrowserRouter>

    )
  }
}


export default App;
