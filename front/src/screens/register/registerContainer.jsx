import React, { useState } from "react";

import Register from "./register";

export default () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dni, setDni] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  function usernameChange(evt) {
    const value = evt.target.value;
    this.setState({ username: value });
  }
  function firstNameChange(evt) {
    const value = evt.target.value;
    this.setState({ name: value });
  }
  function lastNameChange(evt) {
    const value = evt.target.value;
    this.setState({ name: value });
  }
  function dniChange(evt) {
    const value = evt.target.value;
    this.setState({ name: value });
  }
  function passwordChange(evt) {
    const value = evt.target.value;
    this.setState({ password: value });
  }

  function handleSubmit() {
    this.props.registrandome(this.state);
  }

  return (
    <Register
    usernameChange={usernameChange}
    firstNameChange={firstNameChange}
    lastNameChange={lastNameChange}
    dniChange={dniChange}
    passwordChange={passwordChange}
    handleSubmit={handleSubmit}
    />
  );
};
