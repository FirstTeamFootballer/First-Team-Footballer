import React, { useState } from "react";

function Signup() {
  const [form, setForm] = useState({ name: "", email: "", position: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Welcome, ${form.name}! You’ve signed up as a ${form.position}.`);
    setForm({ name: "", email: "", position: "" });
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #14532d, #065f46)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        padding: "20px",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          backgroundColor: "rgba(0,0,0,0.7)",
          padding: "30px",
          borderRadius: "15px",
          width: "100%",
          maxWidth: "400px",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "10px" }}>
          Player Sign-Up
        </h2>

        <label>
          Full Name
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </label>

        <label>
          Email
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </label>

        <label>
          Preferred Position
          <select
            name="position"
            value={form.position}
            onChange={handleChange}
            required
            style={inputStyle}
          >
            <option value="">Select position</option>
            <option value="Forward">Forward</option>
            <option value="Midfielder">Midfielder</option>
            <option value="Defender">Defender</option>
            <option value="Goalkeeper">Goalkeeper</option>
          </select>
        </label>

        <button
          type="submit"
          style={{
            backgroundColor: "#22c55e",
            border: "none",
            color: "white",
            fontWeight: "bold",
            padding: "12px",
            borderRadius: "10px",
            cursor: "pointer",
            transition: "0.3s",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#16a34a")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#22c55e")}
        >
          Submit
        </button>

        <a
          href="/"
          style={{
            textAlign: "center",
            color: "#93c5fd",
            textDecoration: "none",
            marginTop: "10px",
          }}
        >
          ← Back to Home
        </a>
      </form>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px",
  borderRadius: "8px",
  border: "none",
  marginTop: "5px",
};

export default Signup;








