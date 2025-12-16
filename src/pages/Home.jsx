import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import api from "../api/axios";

const Home = () => {
  const { user, setUser, loading } = useAuth();

  const logout = async () => {
    await api.post("/auth/logout");
    setUser(null);
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="min-h-screen flex flex-col justify-center items-center"> 
      <h1 className="text-red-400 text-5xl mb-10 ">Welcome to MERN Auth App</h1>

      {user ? (
        <>
          <p>Hello, {user.name}</p>
          <Link to="/profile">Go to Profile</Link>
          <br />
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <div className="text-xl">
          <Link to="/login" className="px-2 border rounded-md mr-2">Login</Link>
          
          <Link to="/register" className="px-2 border rounded-md ">Register</Link>
        </div>
      )}
    </div>
  );
};

export default Home;
