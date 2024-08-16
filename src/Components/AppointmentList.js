import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const AppointmentList = ({
    appointments = [], // Default to an empty array if not provided
    deleteAppointment,
    editAppointment,
    clearAppointments,
}) => {
    const [editedIndex, setEditedIndex] = useState(null);
    const [editedName, setEditedName] = useState("");
    const [editedDate, setEditedDate] = useState("");

    const handleEdit = (index) => {
        setEditedIndex(index);
        setEditedName(appointments[index].name);
        setEditedDate(appointments[index].date);
    };

    const handleSaveEdit = (index) => {
        editAppointment(index, editedName, editedDate);
        setEditedIndex(null);
        setEditedName("");
        setEditedDate("");
    };

    const handleCancelEdit = () => {
        setEditedIndex(null);
        setEditedName("");
        setEditedDate("");
    };

    return (
        <div className="container mt-4">
            <h1 className="mb-4">Appointment List</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {appointments.map((appointment, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>
                                {editedIndex === index ? (
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={editedName}
                                        onChange={(e) =>
                                            setEditedName(e.target.value)
                                        }
                                    />
                                ) : (
                                    appointment.name
                                )}
                            </td>
                            <td>
                                {editedIndex === index ? (
                                    <input
                                        type="date"
                                        className="form-control"
                                        value={editedDate}
                                        onChange={(e) =>
                                            setEditedDate(e.target.value)
                                        }
                                    />
                                ) : (
                                    appointment.date
                                )}
                            </td>
                            <td>
                                {editedIndex === index ? (
                                    <>
                                        <button
                                            className="btn btn-success btn-sm me-2"
                                            onClick={() =>
                                                handleSaveEdit(index)
                                            }
                                        >
                                            Save
                                        </button>
                                        <button
                                            className="btn btn-secondary btn-sm"
                                            onClick={handleCancelEdit}
                                        >
                                            Cancel
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <button
                                            className="btn btn-primary btn-sm me-2"
                                            onClick={() => handleEdit(index)}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className="btn btn-danger btn-sm"
                                            onClick={() =>
                                                deleteAppointment(index)
                                            }
                                        >
                                            Delete
                                        </button>
                                    </>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button
                className="btn btn-warning mt-3"
                onClick={clearAppointments}
            >
                Clear All Appointments
            </button>
        </div>
    );
};

export default AppointmentList;
