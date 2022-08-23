import React from "react";
import AppContext from "../../context";
import List from "../../components/List/List";

const AllJokes = () => (

  <AppContext.Consumer>

    {(context) => (
      <List items={context.all}/>
    )}
  </AppContext.Consumer>

  
)

export default AllJokes;