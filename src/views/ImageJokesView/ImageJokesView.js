import React from "react";
import AppContext from "../../context";
import List from "../../components/List/List";

const ImageJokesView = () => (

  <AppContext.Consumer>

    {(context) => (
      <List items={context.items.filter(joke => { return joke.type === 'image'})}/>
    )}
  </AppContext.Consumer>
)

export default ImageJokesView;