import React, { useState } from "react";
import "./index.css";

export default function App() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: ""
  })

  const [subbmited, setSubbmited] = useState(false);
  const [valid, setValid] = useState(false);

  const handleFirstName = ({ target }) => {
    setValues({ ...values, firstName: target.value })
  }

  const handleLastName = ({ target }) => {
    setValues({ ...values, lastName: target.value })
  }

  const handleEmail = ({ target }) => {
    setValues({ ...values, email: target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (values.firstName && values.lastName && values.email){
      setValid(true);
    }

    setSubbmited(true);
  }

  return (
    <div class="form-container">
      <form class="register-form" onSubmit={handleSubmit}>
        {subbmited && valid ? <div className="success-message">Success! Thanks for register.</div> : null}

        <input
          value={values.firstName}
          onChange={handleFirstName}
          id="first-name"
          class="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
        />
        {subbmited && !values.firstName ? <span>Please enter an first name</span> : null}

        <input
          value={values.lastName}
          onChange={handleLastName}
          id="last-name"
          class="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />
        {subbmited && !values.lastName ? <span>Please enter an last name</span> : null}

        <input
          value={values.email}
          onChange={handleEmail}
          id="email"
          class="form-field"
          type="text"
          placeholder="Email"
          name="email"
        />
        {subbmited && !values.email ? <span>Please enter an email</span> : null}

        <button class="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}