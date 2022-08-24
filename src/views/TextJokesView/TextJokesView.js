import React from "react";
import AppContext from "../../context";
import List from "../../components/List/List";

const TextJokesView = () => (

  <AppContext.Consumer>

    {(context) => (
      <List items={context.items.filter(joke => { return joke.type === 'text'})}/>
    )}
  </AppContext.Consumer>
)

export default TextJokesView;