import React from "react";
import AppContext from "../../context";
import Button from "./Button/Button";


class Form extends React.Component {

  state = {
    name: '',
    content: ''
  }

  handleInputNameChange = e => this.setState({name: e.target.value})

  handleInputContentChange = e => this.setState({content: e.target.value})

  render() {

    return (

      <AppContext.Consumer>

        {(context) => (
          <>
            <form
              onSubmit={(e) => context.addJoke(e, this.state)}
              autoComplete='off'
            >
              <input
                type='text'
                onChange={this.handleInputNameChange}
                name='name'>

              </input>
              <input
                type='text'
                onChange={this.handleInputContentChange}
                name="content">

              </input>
              <Button />
            </form>
          </>
        )}
      </AppContext.Consumer>
    )
  }
}







export default Form;