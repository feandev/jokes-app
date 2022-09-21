import React from 'react';
import AppContext from '../../context';
import List from '../../components/List/List';

function PolishJokesView() {
  return (
    <AppContext.Consumer>

      {(context) => (
        <List items={context.items.filter((joke) => joke.lang === 'polish')} />
      )}
    </AppContext.Consumer>
  );
}

export default PolishJokesView;
