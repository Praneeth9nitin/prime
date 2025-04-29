
interface DropdownProps {
    nav:{
        title: string;
        description: string;
    }[]
}

function Dropdown({ nav, className, innerClassname }: {nav: DropdownProps['nav'], className?: string, innerClassname?: string}) {
  return (
    <div className={`flex flex-col items-center justify-center rounded-xl border-2 w-40 ${className} ` } >
      {nav.map((item, index) => (
        <div className={`w-full rounded-lg cursor-pointer ${innerClassname}`} key={index} >{item.title}</div>
      ))}
    </div>
  )
}

export default Dropdown
