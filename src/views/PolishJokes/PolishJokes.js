import React from "react";
import AppContext from "../../context";
import List from "../../components/List/List";

const PolishJokes = () => (

  <AppContext.Consumer>

    {(context) => (
      <List items={context.polish}/>
    )}
  </AppContext.Consumer>

  
)

export default PolishJokes;