// src/Appointments.js
import React, { useState } from 'react';
import AppointmentForm from './Components/AppointmentForm';
import AppointmentList from './Components/AppointmentList';

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);

  const addAppointment = (appointment) => {
    setAppointments([...appointments, appointment]);
  };

  const deleteAppointment = (index) => {
    const updatedAppointments = appointments.filter((_, i) => i !== index);
    setAppointments(updatedAppointments);
  };

  const editAppointment = (index, editedName, editedDate) => {
    const updatedAppointments = [...appointments];
    updatedAppointments[index] = {
      name: editedName,
      date: editedDate,
    };
    setAppointments(updatedAppointments);
  };

  const clearAppointments = () => {
    setAppointments([]);
  };

  return (
    <div className="container mt-5">
      <h1>Appointments Management</h1>
      <AppointmentForm addAppointment={addAppointment} />
      <AppointmentList
        appointments={appointments}
        deleteAppointment={deleteAppointment}
        clearAppointments={clearAppointments}
        editAppointment={editAppointment}
      />
    </div>
  );
};

export default Appointments;
