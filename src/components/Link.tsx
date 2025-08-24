import type { SelectedPage } from "@/types";
import AnchorLink from "react-anchor-link-smooth-scroll"

interface Props {
  title: string;
  page: string;
  selectedPage?: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
}

const Link = ({
  title,
  page,
  selectedPage,
  setSelectedPage
}: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;

  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? "text-primary-600" : ""}
        transition duration-500 hover:text-primary-300`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {title}
    </AnchorLink>
  )
}

export default Link