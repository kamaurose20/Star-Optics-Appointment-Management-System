import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const AppointmentForm = ({ addAppointment }) => {
    const [name, setName] = useState("");
    const [date, setDate] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && date) {
            addAppointment({ name, date });
            setName("");
            setDate("");
        } else {
            alert("Please fill in both fields.");
        }
    };

    return (
<div className="container mt-5">
       <form onSubmit={handleSubmit}>
         <div className="mb-3">
             <label htmlFor="fullName" className="form-label">Full Name</label>
 <input
     type="text"
     id="fullName" 
     className="form-control"
     placeholder="Enter your full name"
     value={name}
     onChange={(e) => setName(e.target.value)}
/>
</div>
    <div className="mb-3">
        <label htmlFor="appointmentDate" className="form-label">Appointment Date</label>
            <input
              type="date"
              id="appointmentDate"
              className="form-control"
              value={date}
              onChange={(e) => setDate(e.target.value)}
                    />
                </div>
                <div className="d-flex justify-content-end">
                    <button
                        type="submit"
                        className="btn btn-primary"
                    >
                        Add Appointment
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AppointmentForm;
