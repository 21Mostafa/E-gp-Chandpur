import React from "react";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.No}</td>
      <td>{contact.Tender_ID}</td>
      <td>{contact.Department}</td>
      <td>{contact.Name_of_the_Work}</td>
      <td>{contact.Doc_Price}</td>
      <td>{contact.Pay_Order}</td>
      <td>{contact.Liquid_Assets}</td>
      <td>{contact.Location}</td>
      <td>{contact.Estimated_Cost}</td>
      <td>{contact.Last_Selling}</td>
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
        >
          Edit
        </button>
        <button type="button" onClick={() => handleDeleteClick(contact.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
