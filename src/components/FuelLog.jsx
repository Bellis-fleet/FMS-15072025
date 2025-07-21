import React, { useState } from 'react';

const FuelLog = () => {
  const [logs, setLogs] = useState([]);
  const [form, setForm] = useState({
    date: '',
    vehicle: '',
    liters: '',
    cost: '',
    odometer: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newLog = { ...form, id: Date.now() };
    setLogs([...logs, newLog]);
    setForm({ date: '', vehicle: '', liters: '', cost: '', odometer: '' });
  };

  const handleDelete = (id) => {
    setLogs(logs.filter(log => log.id !== id));
  };

  return (
    <div style={{ padding: '1rem', maxWidth: '600px', margin: 'auto' }}>
      <h2>Fuel Log</h2>

      {/* Form */}
      <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '0.5rem', marginBottom: '1rem' }}>
        <input type="date" name="date" value={form.date} onChange={handleChange} required />
        <input type="text" name="vehicle" placeholder="Vehicle ID" value={form.vehicle} onChange={handleChange} required />
        <input type="number" name="liters" placeholder="Liters" value={form.liters} onChange={handleChange} required />
        <input type="number" name="cost" placeholder="Cost" value={form.cost} onChange={handleChange} required />
        <input type="number" name="odometer" placeholder="Odometer" value={form.odometer} onChange={handleChange} required />
        <button type="submit">Add Log</button>
      </form>

      {/* List */}
      {logs.length === 0 ? (
        <p>No logs yet.</p>
      ) : (
        <table border="1" cellPadding="5" style={{ width: '100%' }}>
          <thead>
            <tr>
              <th>Date</th>
              <th>Vehicle</th>
              <th>Liters</th>
              <th>Cost</th>
              <th>Odometer</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {logs.map(log => (
              <tr key={log.id}>
                <td>{log.date}</td>
                <td>{log.vehicle}</td>
                <td>{log.liters}</td>
                <td>{log.cost}</td>
                <td>{log.odometer}</td>
                <td>
                  <button onClick={() => handleDelete(log.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default FuelLog;
