import React from "react"
import Header from "../../components/Header"
import Footer from "../../components/Footer"


const Schedule: React.FC = () => {

  return (
    <>
      <main className="fixed bg-gradient-to-t from-primary-light to-primary-dark">
        <Header />

        <div className="screen flex-col -center">
          <h1> Class Schedules </h1>
        </div>

        <Footer />
      </main>
    </>
  );
};

export default Schedule;

