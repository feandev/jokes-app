import React from "react";
import AppContext from "../../context";
import Button from "./Button/Button";
import Input from "./Input/Input";
import Radio from "./Radio/Radio";

const jokeLanguage = {
  english: 'english',
  polish: 'polish'
}

const jokeType = {
  image: 'image',
  text: 'text'
}

class Form extends React.Component {

  state = {
    type: '',
    content: '',
    lang: jokeLanguage.polish,
  }

  handleJokeLangaugeSelect = (lang) => {
    this.setState({
      lang: lang,
    })
  }

  handleJokeTypeSelect = (type) => {
    this.setState({
      type: type
    })
  }

  handleInputChange = e => this.setState({ [e.target.name]: e.target.value })

  render() {

    const lang = this.state.lang;
    const type = this.state.type;

    return (

      <AppContext.Consumer>

        {(context) => (
          <>
            <form
              onSubmit={(e) => context.addJoke(e, this.state)}
              autoComplete='off'
            >
              <p>Select joke language</p>
              <Radio
                label = 'PL'
                checked = {lang === jokeLanguage.polish}
                changeLangFunc={() => this.handleJokeLangaugeSelect(jokeLanguage.polish)} />
              <Radio
                label = 'ENG'
                checked = {lang === jokeLanguage.english}
                changeLangFunc={() => this.handleJokeLangaugeSelect(jokeLanguage.english)} />

              <p>Select joke type</p>
              <Radio
                label = 'Text'
                checked = {type === jokeType.text}
                changeLangFunc={() => this.handleJokeTypeSelect(jokeType.text)} />
              <Radio
                label = 'Mem'
                checked = {type === jokeType.image}
                changeLangFunc={() => this.handleJokeTypeSelect(jokeType.image)} />  

              <Input
                HTMLTag={type === jokeType.text ? 'textarea' : 'input'}
                placeholder={type === jokeType.text ? 'Enter text...' : 'Enter URL...'}
                onChange={this.handleInputChange}
                name='content'
                 />
              <Button description={lang === 'english' ? 'Add new joke ' : 'Dodaj nowy żart'}/>
            </form>
          </>
        )}
      </AppContext.Consumer>
    )
  }
}

export default Form;

// render different inputs for english and polish