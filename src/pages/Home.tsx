import React from "react";
import { useSelector } from "react-redux";
import { selectIsAuth } from "../store/slices/authSlice";
import { Navigate } from "react-router-dom";

const Home: React.FC = () => {
	const isAuth = useSelector(selectIsAuth);
	if (!isAuth) return <Navigate to="/auth/signin" />;
	return <section className="container">Home</section>;
};

export default Home;
