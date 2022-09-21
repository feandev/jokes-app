import React from 'react';
import AppContext from '../../context';
import List from '../../components/List/List';

function TextJokesView() {
  return (
    <AppContext.Consumer>

      {(context) => (
        <List items={context.items.filter((joke) => joke.type === 'text')} />
      )}
    </AppContext.Consumer>
  );
}

export default TextJokesView;
