import React from "react";

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
      <button type="submit"></button>
    </form>
  </>
)

export default Form;