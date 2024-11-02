import React from "react";
import "./App.css";
import Layout from "./components/Layout";
import Signin from "./components/Signin";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./config/firebase";

export default function App() {
  const [user] = useAuthState(auth);
  return <div>{user ? <Layout /> : <Signin />}</div>;
}
