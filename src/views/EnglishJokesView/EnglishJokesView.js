import React from "react";
import AppContext from "../../context";
import List from "../../components/List/List";

const EnglishJokesView = () => (

  <AppContext.Consumer>

    {(context) => (
      <List items={context.items.filter(joke => { return joke.lang === 'english'})}/>
    )}
  </AppContext.Consumer>

  
)

export default EnglishJokesView;