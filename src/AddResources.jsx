import React, { useState } from 'react';

export default function AddResources({ getresourcesData }) {
  const [userId, setUserId] = useState('');
  const [username, setUsername] = useState('');
  const [pay, setPay] = useState('');
  const [days, setDays] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    let tempObj = {
      userId: userId,
      username: username,
      pay: pay,
      days: days,
    };
    getresourcesData(tempObj);
  }

  return (
    <div>
      <h2>Add Resources</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="salary">User ID:</label>
        <input
          type="text"
          id="salary"
          name="salary"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          required
        />
        <br />

        <label htmlFor="multiplier">User Name:</label>
        <input
          type="text"
          id="multiplier"
          name="multiplier"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <label htmlFor="salary">Enter Pay Per Day:</label>
        <input
          type="number"
          id="salary"
          name="salary"
          value={pay}
          onChange={(e) => setPay(e.target.value)}
          required
        />
        <br />

        <label htmlFor="multiplier">Enter Working Days:</label>
        <input
          type="number"
          id="multiplier"
          name="multiplier"
          value={days}
          onChange={(e) => setDays(e.target.value)}
        />
        <br />
        <button type="submit">Add Resources</button>
      </form>
    </div>
  );
}
