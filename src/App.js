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

  return (
    <div className="App">
     <h1>MEMBERS</h1>
     {members.map((member, idx) => (
       <div key={idx}>
         {member.memberName} is a {member.role} and his/her email is {member.email}
        </div>
     ))}
     <Form member={members} change={change} formValues={formValues} />
    </div>
  );
}

export default App;
