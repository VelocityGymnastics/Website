import React from 'react';
//import { useSession } from "next-auth/react"

interface FooterProps {
  goBack: boolean;
}

const Footer = () => {//props: FooterProps) => {
  //const { data: sessionData } = useSession();

  return (
    <div>
      <div className="abs-bl w-[25vw] h-[25vw] overflow-hidden flex -center bg-secondary-dark rounded-tr-2xl border-r-4 border-t-2 border-white">
      </div>
    </div>
  );
};
export default Footer;

