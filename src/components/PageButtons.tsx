import React from 'react';
import Link from 'next/link';

interface Props {
  style?: string;
  pagePath?: string;
  label?: string;
}

const PageButtons: React.FC<Props> = (props) => {
  const style = "page-button " + props?.style;
  const divRef = React.useRef(null)
  const linkRef = React.useRef<HTMLAnchorElement>(null)
  
  const handleClick = () => {
    props.select(props.label)
    setTimeout(() => {
      linkRef?.current?.click();
    }, 200);
  };

  return (
    <div 
      ref={divRef} 
      className={style} 
      onClick={handleClick}
    >
      <Link ref={linkRef} href={props?.pagePath} className="w-full text-center">
        {props?.label}
      </Link>
    </div>
  );
};

export default PageButtons;

