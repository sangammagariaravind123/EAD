/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const PasswordStrengthChecker = () => {
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState("");

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    setStrength(getStrength(newPassword));
  };

  const getStrength = (password) => {
    if (password.length < 6) return "Too Short";
    if (password.length < 8) return "Weak";
    if (
      password.match(/[A-Z]/) &&
      password.match(/[0-9]/) &&
      password.length >= 8
    )
      return "Medium";
    if (
      password.match(/[A-Z]/) &&
      password.match(/[a-z]/) &&
      password.match(/[0-9]/) &&
      password.match(/[^A-Za-z0-9]/) &&
      password.length >= 10
    )
      return "Strong";
    return "Weak";
  };

  return (
    <div style={{ margin: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2>Password Strength Checker</h2>
      <input
        type="password"
        value={password}
        onChange={handlePasswordChange}
        placeholder="Enter password"
        style={{
          padding: "10px",
          fontSize: "16px",
          width: "100%",
          marginBottom: "10px",
        }}
      />
      <p>
        Password Strength: <strong>{strength}</strong>
      </p>
    </div>
  );
};

export default PasswordStrengthChecker;
