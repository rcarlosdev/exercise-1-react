import React from "react";
import PropTypes from "prop-types";
import { Contact } from "../../models/contact.class";

function ContactComponent({ contact, toggleConected, deleteContact }) {
    const isConectedIcon = () => {
        if (!contact.conected) {
            return (
                <i
                    className="bi bi-toggle-on"
                    onClick={() => toggleConected(contact)}
                    style={{ color: "green", cursor: "pointer" }}
                ></i>
            );
        }
        return (
            <i
                className="bi bi-toggle-off"
                onClick={() => toggleConected(contact)}
                style={{ color: "gray", cursor: "pointer" }}
            ></i>
        );
    };

    return (
        <div className="col-sm-6 col-lg-4 mb-3">
            <div className="card" style={{ minWidth: "auto" }}>
                <div className="card-body text-start">
                    <h5 className="card-title">
                        {contact.name} {contact.lastName}
                        {contact.conected ? (
                            <i
                                className="bi bi-circle-fill float-end"
                                style={{ fontSize: ".8rem", color: "green" }}
                            ></i>
                        ) : (
                            <i
                                className="bi bi-circle-fill float-end"
                                style={{ fontSize: ".8rem", color: "red" }}
                            ></i>
                        )}
                    </h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                        {contact.email}
                    </h6>
                    <div className="d-flex justify-content-between">
                        {isConectedIcon()}
                        <i
                            className="bi bi-trash task-action"
                            onClick={() => deleteContact(contact)}
                            style={{ color: "tomato", cursor: "pointer" }}
                        ></i>
                    </div>
                </div>
            </div>
        </div>
    );
}

ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact),
    toggleConected: PropTypes.func.isRequired,
    deleteContact: PropTypes.func.isRequired,
};

export default ContactComponent;
