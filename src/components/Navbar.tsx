import { useState } from "react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid"
import Logo from "@/assets/logo.png";
import Link from "./Link";
import { SelectedPage } from "@/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "./UI/ActionButton";

interface Props {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  isTopOfPage: boolean;
}

const Navbar = ({selectedPage, setSelectedPage, isTopOfPage}: Props) => {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px");
  const navbarBg = isTopOfPage ? "" : "bg-primary-200 drop-shadow";

  return (
    <nav>
      <div
        className={`${navbarBg} flex items-center justify-between fixed
          top-0 z-30 w-full py-6`}
        >
          <div className="flex items-center justify-between mx-auto w-5/6">
            <div className="flex items-center justify-between gap-16 w-full">
              {/* LEFT SIDE */}
              <img alt="logo" src={Logo} height={100} width={120}/>
              {/* RIGHT SIDE */}
              {isAboveMediumScreens ? 
                (<div className="flex items-center justify-between w-full">
                  <div className="flex items-center justify-between gap-8">
                    <Link 
                      title="صفحه اصلی"
                      page="Home"
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                    <Link 
                      title="چرا ایزی یوگا؟"
                      page="Benefits"
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                    <Link 
                      title="کلاس‌ها"
                      page="Courses"
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                    <Link 
                      title="تماس با ما"
                      page="Contact"
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                  </div>
                  <div className="flex items-center justify-between gap-8">
                    <ActionButton setSelectedPage={setSelectedPage}>همین حالا عضو شوید!</ActionButton>
                  </div>
                </div>) : (
                  <button className="rounded-full bg-secondary-500 p-2"
                    onClick={() => setIsMenuToggled(!isMenuToggled)}
                  >
                    <Bars3Icon className="h-6 w-6 text-white"/>
                  </button>
                )}
            </div>
          </div>
      </div>

      {/* MOBILE MENU MODEL */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed left-0 bottom-0 z-40 h-full w-[300px] bg-primary-200 drop-shadow-xl">
          {/* CLOSE ICON */}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-400 hover:cursor-pointer"/>
            </button>
          </div>

          {/* MENU ITEMS */}
          <div className="mr-[33%] flex flex-col gap-10 text-2xl">
            <Link 
              title="صفحه اصلی"
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link 
              title="چرا ایزی یوگا؟"
              page="Benefits"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link 
              title="کلاس‌ها"
              page="Courses"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link 
              title="تماس با ما"
              page="Contact"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar