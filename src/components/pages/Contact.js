import React from 'react';

export default function Contact() {
  return (
    <div class="card border-light w-50 mx-auto">
      <h2>Contact Me</h2>
      <form>
        <div class="form-group">
          <label for="nameInput">Name:</label>
          <input type="name" class="form-control" id="nameInput"></input>
        </div>
        <div class="form-group">
          <label for="emailInput">Email:</label>
          <input
            type="email"
            class="form-control"
            id="emailInput"
            placeholder="name@example.com"
          ></input>
        </div>
        <div class="form-group">
          <label for="messageTextArea">Message:</label>
          <textarea
            class="form-control"
            id="messageTextArea"
            rows="3"
          ></textarea>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
