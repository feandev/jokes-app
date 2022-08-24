import React from "react";
import AppContext from "../../context";
import List from "../../components/List/List";

const PolishJokesView = () => (

  <AppContext.Consumer>

    {(context) => (
      <List items={context.items.filter(joke => { return joke.lang === 'polish'})}/>
    )}
  </AppContext.Consumer>

  
)

export default PolishJokesView;