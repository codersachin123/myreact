import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MovieTicket.css';

const MovieTicket = () => {
  const [ticketNo, setTicketNo] = useState('');
  const [candidateName, setCandidateName] = useState('');
  const [updateTicketNo, setUpdateTicketNo] = useState('');
  const [message, setMessage] = useState('');
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    fetchTickets();
  }, []);

  const fetchTickets = async () => {
    try {
      const response = await axios.get('http://localhost:3000/select');
      if (Array.isArray(response.data)) {
        setTickets(response.data);
      } else {
        setMessage('Error: Unexpected response format');
      }
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };

  const handleInsertSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('http://localhost:3000/insert', {
        params: {
          ticket_no: ticketNo,
          candidate_name: candidateName
        }
      });
      setMessage(`Success: ${response.data.message}`);
      fetchTickets();
    } catch (error) {
      setMessage(`Error: ${error.response ? error.response.data.message : error.message}`);
    }
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    const confirmed = window.confirm('Are you sure you want to delete this ticket?');
    if (confirmed) {
      try {
        const response = await axios.get('http://localhost:3000/update', {
          params: {
            ticket_no: updateTicketNo
          }
        });
        setMessage(`Success: ${response.data.message}`);
        fetchTickets();
      } catch (error) {
        setMessage(`Error: ${error.response ? error.response.data.message : error.message}`);
      }
    } else {
      setMessage('Deletion canceled.');
    }
  };

  return (
    <div className="container">
      <div className="text-center mb-4 bounce-in">
        <h1>Movie Ticket Booking</h1>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="card p-4 mb-4">
            <div className="card-header">
              <h2 className="card-title mb-3">Book a Ticket</h2>
            </div>
            <div className="card-body">
              <form onSubmit={handleInsertSubmit}>
                <div className="form-group">
                  <label>Ticket No:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={ticketNo}
                    onChange={(e) => setTicketNo(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Candidate Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={candidateName}
                    onChange={(e) => setCandidateName(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-custom btn-block">Book Ticket</button>
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card p-4 mb-4">
            <div className="card-header">
              <h2 className="card-title mb-3">Update a Booked Ticket</h2>
            </div>
            <div className="card-body">
              <form onSubmit={handleUpdateSubmit}>
                <div className="form-group">
                  <label>Ticket No:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={updateTicketNo}
                    onChange={(e) => setUpdateTicketNo(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-custom btn-block">DELETE Booked Ticket</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {message && <div className="alert alert-info">{message}</div>}
      <div className="card p-4 mt-4">
        <div className="card-header">
          <h2 className="card-title mb-3">All Tickets</h2>
        </div>
        <div className="card-body">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Ticket No</th>
                <th>Candidate Name</th>
                <th>Booking Status</th>
              </tr>
            </thead>
            <tbody>
              {tickets.map((ticket) => (
                <tr key={ticket.ticket_no}>
                  <td>{ticket.ticket_no}</td>
                  <td>{ticket.candidate_name}</td>
                  <td>{ticket.booking_status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MovieTicket;











