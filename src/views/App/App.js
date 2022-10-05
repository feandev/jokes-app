import React from 'react';
import '../../index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppContext from '../../context';
import jokes from '../../data/data';
import Navigation from '../../components/Navigation/Navigation';
import FormBox from '../../components/FormBox/FormBox';
import EnglishJokesView from '../EnglishJokesView/EnglishJokesView';
import PolishJokesView from '../PolishJokesView/PolishJokesView';
import TextJokesView from '../TextJokesView/TextJokesView';
import ImageJokesView from '../ImageJokesView/ImageJokesView';
import AllJokesView from '../AllJokesView/AllJokesView';

class App extends React.Component {
  state = {
    items: [...jokes],
    formOpen: false,
  };

  addJoke = (e, newJoke) => {
    e.preventDefault();
    this.setState((prevState) => ({ items: [newJoke, ...prevState.items] }));
    this.closeForm();
  };

  openForm = () => { this.setState({ formOpen: true }); };

  closeForm = () => { this.setState({ formOpen: false }); };

  render() {
    const contextData = {
      ...this.state,
      addJoke: this.addJoke,
      openForm: this.openForm,
      closeForm: this.closeForm,
    };

    const { formOpen } = this.state;

    return (
      <BrowserRouter>
        <AppContext.Provider value={contextData}>
          <Navigation />
          <Routes>
            <Route path="/" element={<AllJokesView />} />
            <Route path="/polish" element={<PolishJokesView />} />
            <Route path="/english" element={<EnglishJokesView />} />
            <Route path="/images" element={<ImageJokesView />} />
            <Route path="/text" element={<TextJokesView />} />
          </Routes>
          {formOpen && <FormBox />}
        </AppContext.Provider>
      </BrowserRouter>
    );
  }
}

export default App;
