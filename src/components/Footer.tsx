import React from 'react';
import GoBack from "./goBack";
//import { useSession } from "next-auth/react"

interface FooterProps {
  goBack: boolean;
}

const Footer = (props: FooterProps) => {
  //const { data: sessionData } = useSession();

  return (
    <div>
      {props.goBack &&
        <div className="abs-bl w-[25vw] h-[25vw] overflow-hidden flex -center bg-secondary-dark rounded-tr-2xl border-r-4 border-t-2 border-white">
          <GoBack />
        </div>
      }
    </div>
  );
};
export default Footer;

