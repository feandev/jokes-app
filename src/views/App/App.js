import React from 'react';
import './App.css';
import AppContext from '../../context';
import Form from '../../components/Form/Form'
import List from '../../components/List/List'

const jokes = [

  {
    name: 'Lekcja',
    content: 'Na lekcji programowania obiektowego student łapie koleżankę obok za pierś. Na to ona: "To prywatne!!!", a on odpowiada: "Myślałem że jesteśmy w tej samej klasie smile emoticon'
  },
  {
    name: 'Dziecko',
    content: 'Javoviec jakimś cudem spłodził dziecko. Miał wymyślić imię dla dziecka. Na wszelki wypadek przygotował 2, jakby urodziły się bliźniaki. Na nieszczęście urodziły się trojaczki i dostały imiona: Jaś, Staś, ArrayIndexOutOfBoundsException'
  },
  {
    name: 'Reality show',
    content: 'Why was the JavaScript reality show cancelled after only one episode? People thought it seemed scripted'
  },
]

class App extends React.Component {

  state = {
    items: [...jokes]
  }

  addJoke = (e, newJoke) => {
    e.preventDefault();

    this.setState(prevState => ({
      items: [...prevState.items, newJoke]
    }))
  }

  render() {

    const contextData = {
      ...this.state,
      addJoke: this.addJoke
  }

    return (
      <AppContext.Provider value={contextData}>
        <List items = {this.state.items}/>
        <Form />
        </AppContext.Provider>
    )
  }
}


export default App;
