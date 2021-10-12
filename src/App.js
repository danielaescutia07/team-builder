import './App.css';
import React, { useState } from 'react';
import Form from './Form';

const memberList = [
  { memberName: 'Gabriela', email: 'gabby@gabby.com', role: 'Student' },
  { memberName: 'Francisco', email: 'francisco@francisco.com', role: 'Security Engineer' }
]

const initialFormValues = { memberName: "", email: "", role: "" }

function App() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [members, setMembers] = useState(memberList);

  const change = (evt) => {
    const { name, value } = evt.target;
    setFormValues({ ...formValues, [name]: value});
  }

  const submit = (evt) => {
    evt.preventDefault();
    const newMember = {
      memberName: formValues.memberName.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }
    setMembers(members.concat(newMember));
    setFormValues(initialFormValues);
  }

  return (
    <div className="App">
     <h1>MEMBERS</h1>
     {members.map((member, idx) => (
       <div key={idx}>
         {member.memberName} is a {member.role} and his/her email is {member.email}
        </div>
     ))}
     <Form change={change} formValues={formValues} submit={submit}/>
    </div>
  );
}

export default App;
