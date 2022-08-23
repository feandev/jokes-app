import React from "react";
import AppContext from "../../context";
import List from "../../components/List/List";

const EnglishJokes = () => (

  <AppContext.Consumer>

    {(context) => (
      <List items={context.english}/>
    )}
  </AppContext.Consumer>

  
)

export default EnglishJokes;