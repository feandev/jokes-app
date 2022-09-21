import React from 'react';
import AppContext from '../../context';
import List from '../../components/List/List';

function EnglishJokesView() {
  return (
    <AppContext.Consumer>

      {(context) => (
        <List items={context.items.filter((joke) => joke.lang === 'english')} />
      )}
    </AppContext.Consumer>
  );
}

export default EnglishJokesView;
