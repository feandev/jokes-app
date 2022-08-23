import React from "react";
import AppContext from "../../context";
import Button from "./Button/Button";
import Input from "./Input/Input";
import Radio from "./Radio/Radio";

const langs = {
  english: 'english',
  polish: 'polish'
}

const radioBtnlabels = {
  english: 'ENG',
  polish: 'PL',
}

class Form extends React.Component {

  state = {
    name: '',
    content: '',
    lang: langs.polish,
  }

  handleLanguageSelect = (lang) => {
    this.setState({
      lang: lang,
    })


  }


  // handleInputNameChange = e => this.setState({name: e.target.value})
  // handleInputContentChange = e => this.setState({content: e.target.value})
  handleInputChange = e => this.setState({ [e.target.name]: e.target.value })

  render() {

    return (

      <AppContext.Consumer>

        {(context) => (
          <>
            <form
              onSubmit={(e) => context.addJoke(e, this.state)}
              autoComplete='off'
            >
              <Radio
                label={radioBtnlabels.polish}
                checked = {this.state.lang === langs.polish}
                changeLangFunc={() => this.handleLanguageSelect(langs.polish)} />
              <Radio
                label={radioBtnlabels.english}
                checked = {this.state.lang === langs.english}
                changeLangFunc={() => this.handleLanguageSelect(langs.english)} />


              <Input
                HTMLTag='input'
                onChange={this.handleInputChange}
                name='name'
                
              />
              <Input
                HTMLTag='textarea'
                onChange={this.handleInputChange}
                name='content'
                 />
              <Button />
            </form>
          </>
        )}
      </AppContext.Consumer>
    )
  }
}

export default Form;

// render different inputs for english and polish