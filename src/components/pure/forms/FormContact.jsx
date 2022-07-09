import React, { useRef } from "react";
import PropTypes from "prop-types";

function FormContact({ add }) {
    const nameRef = useRef("");
    const lastNemeRef = useRef("");
    const emailRef = useRef("");

    const addContact = (e) => {
        e.preventDefault();
        const contact = {
            name: nameRef.current.value,
            lastName: lastNemeRef.current.value,
            email: emailRef.current.value,
            conected: true,
        };
        add(contact);
        nameRef.current.value = "";
        lastNemeRef.current.value = "";
        emailRef.current.value = "";
    };

    return (
        <form
            onSubmit={addContact}
            className="d-flex justify-content-center align-items-center"
        >
            <div className="form-outline flex-fill">
                <input
                    ref={nameRef}
                    type="text"
                    placeholder="Name"
                    className="form-control form-control-sm mt-1"
                    required
                    autoFocus
                />
                <input
                    ref={lastNemeRef}
                    type="text"
                    placeholder="Last Name"
                    className="form-control form-control-sm mt-1"
                    required
                />
                <input
                    ref={emailRef}
                    type="email"
                    placeholder="Email"
                    className="form-control form-control-sm mt-1"
                    required
                />
                <button type="submit" className="btn btn-primary btn-sm my-3">
                    Add Contact
                </button>
            </div>
        </form>
    );
}

FormContact.propTypes = {
    add: PropTypes.func.isRequired,
};

export default FormContact;
