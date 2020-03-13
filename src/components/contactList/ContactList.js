import React from "react";
import ContactListItem from "../contactListItem/ContactListItem";
import PropTypes from "prop-types";

const ContactList = ({ contacts, deleteContact }) => (
  <ul>
    {contacts.map(contact => (
      <ContactListItem
        contact={contact}
        key={contact.id}
        deleteContact={deleteContact}
      />
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      contact: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  deleteContact: PropTypes.func.isRequired
};

export default ContactList;
