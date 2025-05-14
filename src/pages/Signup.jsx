import React,{useState} from "react";
import { useContext } from "react";
import { AuthContext } from "../auth/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const Signup = () =>{

    const [name,setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('student');
    const [error, setError] = useState('');
    const [department,setDepartment] = useState("");
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!email || !password || !name || !department) {
        setError('Please fill in all fields');
        return;
      }else{
        navigate('/login');
      }
     

    };
    return(
        <div className="login-container">
            <h2>Assignment Portal Sign up</h2>
            {error && <p className="error">{error}</p>}
         <form onSubmit={handleSubmit}>
            <label>
            Name:
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            </label>
            <label>
            Email:
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            </label>
            <label>
            Password:
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            </label>
            <label>
            Role:
            <select value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
            </select>
            </label>
            <label>
            Department:
            <input
                type="text"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
            />
            </label>
            <button type="submit">Sign up</button>
            <p>If already a user <Link to="/login">Login</Link></p>
      </form>
    </div>
    );
};
export default Signup;