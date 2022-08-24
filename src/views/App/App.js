import React from 'react';
import './App.css';
import AppContext from '../../context';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { jokes } from '../../data/data';
import Navigation from '../../components/Navigation/Navigation';
import Form from '../../components/Form/Form'
import EnglishJokesView from '../EnglishJokesView/EnglishJokesView';
import PolishJokesView from '../PolishJokesView/PolishJokesView';
import TextJokesView from '../TextJokesView/TextJokesView';
import ImageJokesView from '../ImageJokesView/ImageJokesView';
import AllJokesView from '../AllJokesView/AllJokesView';

class App extends React.Component {

  state = {
    items: [...jokes]
  }

  addJoke = (e, newJoke) => {
    e.preventDefault();
    this.setState(prevState => ({items: [...prevState.items, newJoke],}))
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
            <Route path='/' element={<AllJokesView />} />
            <Route path='/polish' element={<PolishJokesView />} />
            <Route path='/english' element={<EnglishJokesView />} />
            <Route path='/images' element={<ImageJokesView />} />
            <Route path='/text' element={<TextJokesView />} />
          </Routes>
          <Form />
        </AppContext.Provider>
      </BrowserRouter>
    )
  }
}

export default App;
