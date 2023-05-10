import React from "react";
import { useState } from "react";

const Validation = () => {
    const intialValues = { username: '', email: '', password: '' };
    // const [formValues, setFormValues] = useState(intialValues);
    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormValues({ ...formValues, name: value });
    //     console.log(formValues);
    // }

    return (
        <>
            <form>
                <h1>login page</h1>
                <div>
                    <label>User Name</label>
                    <input type='text' name="username" placeholder="username"  ></input><br /><br />
                </div>
                <div>
                    <label>Email</label><span> </span>
                    <input type='email' name="email" placeholder="email" ></input><br /><br />
                </div>
                <div>
                    <label>Password</label>
                    <input type='password' name="password" placeholder="password" ></input><br /><br />
                </div>
                <button>login</button>
                <button>login</button>
                <button>login</button>

            </form>
        </>
    )
}
export default Validation;