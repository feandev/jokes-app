import React from 'react';
import AppContext from '../../context';
import List from '../../components/List/List';

function ImageJokesView() {
  return (
    <AppContext.Consumer>

      {(context) => (
        <List items={context.items.filter((joke) => joke.type === 'image')} />
      )}
    </AppContext.Consumer>
  );
}

export default ImageJokesView;
