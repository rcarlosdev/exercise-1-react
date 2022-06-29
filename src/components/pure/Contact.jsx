import React from "react";
import PropTypes from "prop-types";
import { Contact } from "../../models/contact.class";

function ContactComponent({ contact }) {
    return (
        <div>
            <h2>{contact.name}</h2>
            <p>{contact.email}</p>
            <p>{contact.phone}</p>
            <p>
                {contact.conected
                    ? "Contacto En Línea"
                    : "Contacto No Disponible"}
            </p>
        </div>
    );
}

ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact),
};

export default ContactComponent;
