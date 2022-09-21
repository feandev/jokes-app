import React from "react";
import AppContext from "../../context";
import List from "../../components/List/List";

function AllJokesView() {
  return <AppContext.Consumer>

    {(context) => (
      <List items={context.items}/>
    )}
  </AppContext.Consumer>
}

export default AllJokesView;