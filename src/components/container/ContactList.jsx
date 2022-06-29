import React from "react";
import { Contact } from "../../models/contact.class";
import ContactComponent from "../pure/Contact";

const ContactList = () => {
    const defaultContacts = new Contact(
        "name 1",
        "lastname 1",
        "mail1@mail.com",
        false
    );

    return (
        <div>
            <ContactComponent
                contact={defaultContacts}
            />
        </div>
    );
};

export default ContactList;
