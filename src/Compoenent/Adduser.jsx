import axios from 'axios';
import React, { useState } from 'react'

function Adduser() {

    const [user, setUser] = useState
        ({
            name: '',
            email: '',

        });
    const { name, email } = user;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [e.target.name]: e.target.value });
    };
    // const onsubmit=(e)=>{
       
    //     console.log(e);
        

    // }
    const onsubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('https://jsonplaceholder.typicode.com/users',user);
          console.log(response.data); // Log the newly created user data
        } catch (error) {
          console.error('Error creating user:', error);
        }
      };
      

    return (
        <div>
            <form onSubmit={(e)=>onsubmit(e)}>
            <div class="form-group">
                <label >Email address</label>
                <input type="email" className="form-control" name="name" value={name} onChange={handleChange} />

            </div>
            <div class="form-group">
                <label >Password</label>
                <input type="password" className="form-control" name="email" value={email} onChange={handleChange} />
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
            <div>
                <h3>User Information:</h3>
                <p>Name: {user.name}</p>
                <p>Email: {user.email}</p>
                {/* Display other attributes */}
            </div>
        </div>
    )
}

export default Adduser
