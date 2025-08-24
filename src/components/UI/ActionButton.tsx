import { SelectedPage } from "@/types";
import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"

interface Props {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
}

const ActionButton = ({children, setSelectedPage}: Props) => {
  return (
    <AnchorLink
      className="rounded-md bg-secondary-500 px-8 py-2 hover:bg-primary-600 text-white"
      onClick={() => setSelectedPage(SelectedPage.Contact)}
      href={`#${SelectedPage.Contact}`}
    >
      {children}
    </AnchorLink>
  )
}

export default ActionButton