import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import { SelectedPage } from './types'
import Home from './components/Home'
import Benefits from './components/Benefits'
import Courses from './components/Courses'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home)
      }
      if(window.scrollY !== 0)
        setIsTopOfPage(false);
    }
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, []);
  

  return (
    <div className='app font-display bg-gray-20'>
      <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        isTopOfPage={isTopOfPage}
      />
      <Home setSelectedPage={setSelectedPage}/>
      <Benefits setSelectedPage={setSelectedPage}/>
      <Courses setSelectedPage={setSelectedPage}/>
      <ContactUs setSelectedPage={setSelectedPage}/>
      <Footer setSelectedPage={setSelectedPage}/>
    </div>
  )
}

export default App
