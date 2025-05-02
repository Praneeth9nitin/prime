import { useNavigate } from "react-router-dom";

interface DropdownProps {
    nav:{
        title: string;
        description?: string;
        link?: string;
        img?: string;
    }[]
}

export function Dropdown({ nav, className, innerClassname }: {nav: DropdownProps['nav'], className?: string, innerClassname?: string}) {
  const navigate = useNavigate();

  return (
    <div  className={`flex flex-col items-center justify-center rounded-xl w-40 bg-linear-to-bl from-card to-white ${className} ` } >
      {nav.map((item, index) => (
        <div onClick={()=>navigate(`${item.link}`)} className={`w-full rounded-lg cursor-pointer ${innerClassname}`} key={index} >{item.title}</div>
      ))}
    </div>
  )
}

export function Dropdown1({ nav, className, innerClassname }: {nav: DropdownProps['nav'], className?: string, innerClassname?: string}) {

  return (
    <div  className={`flex flex-col items-center justify-center rounded-xl w-40 ${className} ` } >
      {nav.map((item, index) => (
        <a href={item.link} className={`w-full rounded-lg cursor-pointer flex items-center gap-2 ${innerClassname}`} key={index} ><img className="w-3" src={item.img} alt="" />{item.title}</a>
      ))}
    </div>
  )
}

