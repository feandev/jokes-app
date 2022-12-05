import React from 'react';
import AppContext from '../../context';
import Button from '../Button/Button';
import Input from './Input/Input';
import Radio from './Radio/Radio';
import FormError from './FormError/FormError';
import styles from './Form.module.scss';

const jokeLanguage = {
  english: 'english',
  polish: 'polish',
};

const jokeType = {
  image: 'image',
  text: 'text',
};

class Form extends React.Component {
  state = {
    lang: jokeLanguage.polish,
    type: jokeType.text,
    content: '',
    url: '',
    source: '',
    jokeTextValid: false,
    jokeURLValid: false,
    formValid: false,
    formError: '',
  };

  // joke language and type selection

  handleJokeLangaugeSelect = (lang) => {
    this.setState({ lang, formError: '' });
  };

  handleJokeTypeSelect = (type) => {
    this.setState({ type, formError: '', jokeTextValid: false, jokeURLValid: false });
  };

  handleInputChange = (e) => {
    const { value } = e.target;
    const { type } = this.state;

    type === jokeType.text
      ? this.setState({ content: value }, () => this.validateJokeText(value))
      : this.setState({ url: value }, () => this.validateImageURL(value));
  };

  // img url validation

  validateImageURL = (value) => {
    let { jokeURLValid } = this.state;
    let { formError } = this.state;

    const regex = new RegExp('(http(s?):)|([/|.|w|s])*.(?:jpg|gif|png)');
    jokeURLValid = regex.test(value);
    formError = jokeURLValid ? '' : 'Please add valid image URL';

    this.setState(
      {
        formError,
        jokeURLValid,
      },
      this.validateForm,
    );
  };

  // joke text validation

  validateJokeText = (value) => {
    let { jokeTextValid } = this.state;
    let { formError } = this.state;

    jokeTextValid = value.length > 1;
    formError = jokeTextValid ? '' : 'Please add joke contents';

    this.setState(
      {
        formError,
        jokeTextValid,
      },
      this.validateForm,
    );
  };

  // final form validation

  validateForm = () =>
    this.setState((prevState) => ({
      formValid: prevState.jokeURLValid || prevState.jokeTextValid,
    }));

  render() {
    const { lang } = this.state;
    const { type } = this.state;
    const { formValid } = this.state;
    const { formError } = this.state;

    return (
      <AppContext.Consumer>
        {(context) => (
          <form
            onSubmit={(e) => context.addJoke(e, this.state)}
            autoComplete="off"
            className={styles.form}
          >
            <div
              onClick={() => context.closeForm()}
              role="button"
              tabIndex={0}
              aria-label="exit"
              className={styles.exit}
            />
            <h2 className={styles.title}>Add your joke</h2>
            <div className={styles.row}>
              <p className={styles.txt}>Language:</p>
              <Radio
                label={jokeLanguage.polish}
                checked={lang === jokeLanguage.polish}
                changeLangFunc={() => this.handleJokeLangaugeSelect(jokeLanguage.polish)}
              />
              <Radio
                label={jokeLanguage.english}
                checked={lang === jokeLanguage.english}
                changeLangFunc={() => this.handleJokeLangaugeSelect(jokeLanguage.english)}
              />
            </div>
            <div className={styles.row}>
              <p className={styles.txt}>Type:</p>
              <Radio
                label={jokeType.text}
                checked={type === jokeType.text}
                changeLangFunc={() => this.handleJokeTypeSelect(jokeType.text)}
              />
              <Radio
                label={jokeType.image}
                checked={type === jokeType.image}
                changeLangFunc={() => this.handleJokeTypeSelect(jokeType.image)}
              />
            </div>
            <Input
              HTMLTag={type === jokeType.text ? 'textarea' : 'input'}
              placeholder={type === jokeType.text ? 'Enter joke text...' : 'Paste img URL...'}
              onChange={this.handleInputChange}
              name="content"
            />
            <FormError formError={formError} />
            <Button formValid={formValid} description="Add" />
          </form>
        )}
      </AppContext.Consumer>
    );
  }
}

export default Form;
