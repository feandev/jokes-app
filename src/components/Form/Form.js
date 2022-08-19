import React from "react";
import Button from "./Button/Button";


const Form = ({ submitFunction }) => (

  <>
    <form 
      onSubmit={submitFunction}
      autoComplete = 'off'
      >
      <input
        type='text'
        name='name'>

      </input>
      <input
        type='text'
        name="content">

      </input>
      <Button />
    </form>
  </>
)

export default Form;