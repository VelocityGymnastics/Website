//import { signIn, signOut, useSession } from "next-auth/react";
//import Link from "next/link";
//import { api } from "~/utils/api";
import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"


const Home: React.FC = () => {

  return (
    <>
      <main className="h-screen flex-col bg-gradient-to-t from-primary-light to-primary-dark">
        <Header current=""/>

        <div className="grow flex-col -center">
          <h1> HOME </h1>
        </div>

        <Footer />
      </main>
    </>
  );
};

export default Home;

