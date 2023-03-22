import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import data from "./mock-data.json";
import ReadOnlyRow from "./components/ReadOnlyRow";
import EditableRow from "./components/EditableRow";

const App = () => {
   
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    No: "",
    Tender_ID: "",
    Department: "",
    Name_of_the_Work: "",
    Doc_Price: "",
    Pay_Order: "",
    Liquid_Assets: "",
    Location: "",
    Estimated_Cost: "",
    Last_Selling: "",
     
  });

  const [editFormData, setEditFormData] = useState({
    No: "",
    Tender_ID: "",
    Department: "",
    Name_of_the_Work: "",
    Doc_Price: "",
    Pay_Order: "",
    Liquid_Assets: "",
    Location: "",
    Estimated_Cost: "",
    Last_Selling: "",
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      No: addFormData.No,
      Tender_ID: addFormData.Tender_ID,
      Department: addFormData.Department,
      Name_of_the_Work: addFormData.Name_of_the_Work,
      Doc_Price: addFormData.Doc_Price,
      Pay_Order: addFormData.Pay_Order,
      Liquid_Assets:addFormData.Liquid_Assets,
      Location: addFormData.Location,
      Estimated_Cost:addFormData.Estimated_Cost,
      Last_Selling: addFormData.Last_Selling,
       
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      No:editFormData.No,
      Tender_ID: editFormData.Tender_ID,
      Department:editFormData.Department,
      Name_of_the_Work: editFormData.Name_of_the_Work,
      Doc_Price: editFormData.Doc_Price,
      Pay_Order: editFormData.Pay_Order,
      Liquid_Assets: editFormData.Liquid_Assets,
      Location: editFormData.Location,
      Estimated_Cost: editFormData.Estimated_Cost,
      Last_Selling: editFormData.Last_Selling,
      
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      No:contact.No,
      Tender_ID: contact.Tender_ID,
      Department:contact.Department,
      Name_of_the_Work: contact.Name_of_the_Work,
      Doc_Price: contact.Doc_Price,
      Pay_Order: contact.Pay_Order,
      Liquid_Assets: contact.Liquid_Assets,
      Location: contact.Location,
      Estimated_Cost: contact.Estimated_Cost,
      Last_Selling: contact.Last_Selling,
       
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };
   
  return (
    <div className="app-container">
        
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead className="">
            <tr>
              <th className="No">No.</th>
              
              <th className="Tender_ID">Tender ID</th>
              <th className="Department">Department</th>
              <th className="Name_of_the_Work">Name of the Work</th>
              <th className="Doc_Price">Doc. Price</th>
               
              <th className="Pay_Order">Pay Order</th>
              <th className="Liquid_Assets">Liquid Assets</th>
              <th className="Location">Location</th>
              <th className="Estimated_Cost">Estimated Cost</th>
              <th className="Last_Selling">Last Selling Date</th>
              <th className="Edit">Edit</th>
               
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <Fragment>
                {editContactId === contact.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>

      <h2>Add a Contact</h2>
      <form onSubmit={handleAddFormSubmit}>
      
        <input
          type="text"
          name="No"
          required="required"
          placeholder="Serial No..."
          
          onChange={handleAddFormChange}
        />
        
        <input
          type="number"
          name="Tender_ID"
          required="required"
          placeholder="Tender ID..."
          onChange={handleAddFormChange}
        />
        
        <input 
          type="text"
          name="Department"
          required="required"
          placeholder="Department Name..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="Name_of_the_Work"
          required="required"
          placeholder="Work Name..."
          onChange={handleAddFormChange}
        />
        
       <input
          type="number"
          name="Doc_Price"
          required="required"
          placeholder="Document Price..."
          onChange={handleAddFormChange}
        />
         
         <input
          type="number"
          name="Pay_Order"
          required="required"
          placeholder="Pay Order ..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="Liquid_Assets"
          required="required"
          placeholder="Liquid Assets..."
          onChange={handleAddFormChange}
        />
         <input
          type="text"
          name="Location"
          required="required"
          placeholder="Locations..."
          onChange={handleAddFormChange}
        />
         <input
          type="text"
          name="Estimated_Cost"
          required="required"
          placeholder="Estimated Cost..."
          onChange={handleAddFormChange}
        />
 
<input
          type="datetime"
          name="Last_Selling"
          required="required"
          placeholder="Last Selling Date..."
          onChange={handleAddFormChange}
        />
      
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default App;
