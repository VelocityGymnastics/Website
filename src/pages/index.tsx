//import { signIn, signOut, useSession } from "next-auth/react";
//import Link from "next/link";
//import { api } from "~/utils/api";
import { type NextPage } from "next"
import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"


const Home: React.FC = () => {

  return (
    <>
      <main className="fixed bg-gradient-to-t from-primary-light to-primary-dark">
        <Header />

        <div className="screen flex-col -center">
          <h1> HOME </h1>
        </div>

        <Footer />
      </main>
    </>
  );
};

export default Home;

