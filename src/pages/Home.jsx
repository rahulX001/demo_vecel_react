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
    <div>
      <h1>Welcome to MERN Auth App</h1>

      {user ? (
        <>
          <p>Hello, {user.name}</p>
          <Link to="/profile">Go to Profile</Link>
          <br />
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <br />
          <Link to="/register">Register</Link>
        </>
      )}
    </div>
  );
};

export default Home;
