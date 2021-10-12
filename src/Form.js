import React from "react";

function Form(props) {
    const { member, change, formValues } = props;
    return (
        <div>
            <h2>I am the form!</h2>
            <form>
                <label>Name
                    <input
                        type="tex"
                        name="memberName"
                        value={formValues.memberName}
                        onChange={change}
                    />
                </label>
                <label>email
                    <input
                        type="email"
                        name="email"
                        value={formValues.email}
                        onChange={change}
                    />
                </label>
                <label>
                    <select value={formValues.role} name="role" onChange={change}>
                        <option value=''>--Select a role--</option>
                        <option value='Student'>Student</option>
                        <option value='Security Engineer'>Security Engineer</option>
                        <option value='Frontend Engineer'>Frontend Engineer</option>
                        <option value='Backend Engineer'>Backend Engineer</option>
                        <option value='Full-Stack Engineer'>Full-Stack Engineer</option>
                        <option value='Unemployed'>Unemployed</option>
                    </select>
                </label>
                <button>submit</button>
            </form>
            
        </div>
    )
}

export default Form;