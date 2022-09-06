import React from "react";
import AppContext from "../../context";
import Button from "../Button/Button";
import Input from "./Input/Input";
import Radio from "./Radio/Radio";
import styles from "./Form.module.scss";

const jokeLanguage = {
  english: "english",
  polish: "polish",
};

const jokeType = {
  image: "image",
  text: "text",
};

class Form extends React.Component {
  state = {
    type: jokeType.text,
    content: "",
    lang: jokeLanguage.polish,
  };

  handleJokeLangaugeSelect = (lang) => {
    this.setState({
      lang: lang,
    });
  };

  handleJokeTypeSelect = (type) => {
    this.setState({
      type: type,
    });
  };

  handleInputChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    const lang = this.state.lang;
    const type = this.state.type;

    return (
      <AppContext.Consumer>
        {(context) => (
          <>
            <form
              onSubmit={(e) => context.addJoke(e, this.state)}
              autoComplete="off"
              className={styles.form}
            >
              <div onClick={(e) => context.closeForm()} className={styles.exit}></div>
              <h2 className={styles.title}>Add your joke</h2>
              <div className={styles.row}>
              <p className={styles.txt}>Language:</p>
                <Radio
                  label={jokeLanguage.polish}
                  checked={lang === jokeLanguage.polish}
                  changeLangFunc={() =>
                    this.handleJokeLangaugeSelect(jokeLanguage.polish)
                  }
                />
                <Radio
                  label={jokeLanguage.english}
                  checked={lang === jokeLanguage.english}
                  changeLangFunc={() =>
                    this.handleJokeLangaugeSelect(jokeLanguage.english)
                  }
                />
              </div>
              
              <div className={styles.row}>
              <p className={styles.txt}>Type:</p>
                <Radio
                  label={jokeType.text}
                  checked={type === jokeType.text}
                  changeLangFunc={() =>
                    this.handleJokeTypeSelect(jokeType.text)
                  }
                />
                <Radio
                  label={jokeType.image}
                  checked={type === jokeType.image}
                  changeLangFunc={() =>
                    this.handleJokeTypeSelect(jokeType.image)
                  }
                />
              </div>
              <Input
                HTMLTag={type === jokeType.text ? "textarea" : "input"}
                placeholder={
                  type === jokeType.text
                    ? "Enter joke text..."
                    : "Paste img URL..."
                }
                onChange={this.handleInputChange}
                name="content"
              />
              <Button description="Add" />
            </form>
          </>
        )}
      </AppContext.Consumer>
    );
  }
}

export default Form;
