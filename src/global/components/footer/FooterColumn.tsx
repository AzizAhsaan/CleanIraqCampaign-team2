 import Link from "next/link";

type FooterColumnProps = {
  item: {
    title: string;
    links: {link:string,text:string,onClick:Function |undefined}[];
  },
};

export const FooterColumn: React.FC<FooterColumnProps> = ({ item }) => {
  return (
  <>
    <h5 className="font-semibold text-lg mb-3">{item.title}</h5>
    {item.links.map(item=>(
      item.onClick=== undefined ?
    <Link href={item.link} key={item.link} className='block  font-light hover:text-light hover:underline'>{item.text}</Link> 
    :<p onClick={() => item.onClick?.()} key={item.link} className='block  font-light hover:text-light hover:underline'>{item.text}</p> 
    ))}
    </> );
};