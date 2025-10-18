import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";

const Dashboard = () => {
  const navigate = useNavigate();
  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login", { replace: true });
    }
    setCheckingAuth(false);
  }, [navigate]);
  if (checkingAuth) {
    return <Loading />;
  }
  return (
    <div className="min-h-screen flex items-center justify-center flex-col bg-gradient-to-b from-blue-300 via-blue-100 to-white-50">
      <h2 className="text-4xl text-center font-bold drop-shadow-lg">
        Welcome to Dashboard
      </h2>
      
      <Link to={"/"}>
        <button className="bg-primary text-white px-10 py-2 rounded hover:bg-red-600 cursor-pointer my-10">
          Return to shop
        </button>
      </Link>
    </div>
  );
};

export default Dashboard;
