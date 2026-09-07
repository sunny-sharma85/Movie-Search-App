 import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaUsers,
  FaTrash,
  FaSignOutAlt,
  FaUserShield
} from "react-icons/fa";

import "./Admin.css";
const Admin = () => {
 const isadmin= localStorage.getItem("isadmin")
 const adminemail=localStorage.getItem("adminemail")
    
  const navigate = useNavigate();

  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || []
  );

  const handleDelete = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);

    setUsers(updatedUsers);

    localStorage.setItem(
      "users",
      JSON.stringify(updatedUsers)
    );
  };

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    navigate("/admin-login");
  };

   



  return (
    <main className="admin-page">

      <div className="admin-top">
        <div>
          <h1>
            <FaUserShield /> Admin Dashboard
          </h1>
          <p>Manage Movie Finder users</p>
        </div>

    <button
          className="admin-logout"
          onClick={handleLogout}
        > {isadmin&&<span>Hi{adminemail}</span>   }
          <FaSignOutAlt />
          Logout
        </button>
      </div>
  

      <div className="admin-stats">

        <div className="stat-card">
          <FaUsers />
          <div>
            <h3>Total Users</h3>
            <h2>{users.length}</h2>
          </div>
        </div>

      </div>


      <div className="users-section">

        <h2>Registered Users</h2>

        {users.length === 0 ? (

          <p>No users registered yet.</p>

        ) : (

          <div className="table-wrapper">

            <table>

              <thead>
                <tr>
                  <th>#</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>

                {users.map((user, index) => (

                  <tr key={user.id}>

                    <td>{index + 1}</td>

                    <td>{user.username}</td>

                    <td>{user.email}</td>

                    <td>
                      <button
                        className="delete-btn"
                        onClick={() => handleDelete(user.id)}
                      >
                        <FaTrash />
                      </button>
                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        )}

      </div>

    </main>
  );
};

  


export default Admin
