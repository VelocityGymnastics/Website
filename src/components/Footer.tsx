import React from 'react';
//import { useSession } from "next-auth/react"

interface FooterProps {
  goBack: boolean;
}

const Footer = () => {//props: FooterProps) => {
  //const { data: sessionData } = useSession();

  return (
    <div>
      <div className="footer">
       <h3 className="footer-text">Velocity Gymnastics</h3>
       <h3 className="footer-text">Est. 2023</h3>
      </div>
    </div>
  );
};
export default Footer;

