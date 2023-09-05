import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

type SocialLinksProps = {
  content: {
    icon: IconDefinition;
    link: string;
  }[],
};

export const SocialLinks: React.FC<SocialLinksProps> = ({ content }) => {
  return (
   <div className='flex gap-2 justify-center'> {content.map(item=>(<Link href={item.link} key={item.link}> <FontAwesomeIcon icon={item.icon} size="lg" className="text-gray4 hover:text-light" /></Link>))}</div>
  );
};