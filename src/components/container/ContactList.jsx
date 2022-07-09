import React, { useState } from "react";
import { Contact } from "../../models/contact.class";
import ContactComponent from "../pure/Contact";
import FormContact from "../pure/forms/FormContact";

const ContactList = () => {
    const defaultContact1 = new Contact(
        "Fede",
        "Godoy",
        "fede@mail.com",
        false
    );
    const defaultContact2 = new Contact(
        "Juan",
        "Perez",
        "juanp@mail.com",
        true
    );
    const defaultContact3 = new Contact(
        "Pedro",
        "Gonzales",
        "pedrog@mail.com",
        true
    );

    const [contacts, setContacts] = useState([
        defaultContact1,
        defaultContact2,
        defaultContact3,
    ]);

    const addContact = (contact) => {
        setContacts([...contacts, contact]);
    };

    const toggleConected = (contact) => {
        const newContacts = [...contacts];
        const index = newContacts.indexOf(contact);
        newContacts[index].conected = !newContacts[index].conected;
        setContacts(newContacts);
    };

    const removeContact = (contact) => {
        const newContacts = [...contacts];
        const index = newContacts.indexOf(contact);
        newContacts.splice(index, 1);
        setContacts(newContacts);
    };

    return (
        <div className="container flex-column">
            <h1>Contacts</h1>
            <div className="row">
                {contacts.map((contact, index) => (
                    <ContactComponent
                        key={index}
                        contact={contact}
                        toggleConected={toggleConected}
                        deleteContact={removeContact}
                    />
                ))}
            </div>
            <div className="">
                <FormContact add={addContact} />
            </div>
        </div>
    );
};

export default ContactList;
