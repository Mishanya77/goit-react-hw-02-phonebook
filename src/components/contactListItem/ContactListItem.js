import React from "react";
import PropTypes from "prop-types";

const ContactListItem = ({ contact: { id, name, number }, deleteContact }) => {
  return (
    <li>
      <span>{name} </span>
      <span> {number}</span>
      <button type="button" id={id} onClick={deleteContact}>
        Delete
      </button>
    </li>
  );
};

export default ContactListItem;
