import { useState } from "react"
import Sidebar from "./components/Sidebar/Sidebar";
import Tablet from "./components/Sidebar/Tablet";
import { MyContext } from "./utilities/context";
import Home from "./components/Home";
import Dest from "./components/Dest";
import Crew from "./components/Crew"
import Tech from "./components/Tech"

const App = () => {

  const [isMenu, setIsMenu] = useState(false);
  const [tab, setTab] = useState("home");

  return (
    <body className={`${tab=="home" && "bg-cover h-screen bg-home_phone md:bg-home_tab md:h-fit lg:bg-home_pc lg:h-screen"} ${tab=="dest" && "bg-dest_phone bg-opacity-50 bg-cover bg-no-repeat h-fit md:bg-dest_tab"} ${tab=="crew" && "bg-crew_phone bg-no-repeat bg-cover h-screen bg-opacity-25 md:bg-crew_tab md:h-fit"} ${tab=="tech" && "bg-tech_phone bg-cover h-screen md:bg-tech_tablet md:h-fit lg:h-fit "}`}>
      <MyContext.Provider value={{ tab,setTab }}>
        <div className="flex justify-between items-center bg-opacity-0 mx-4 pt-4 md:mx-0 md:pt-0 md:items-start lg:pt-10 lg:ml-10  ">
          <img src="/assets/shared/logo.svg" alt="logo" className="w-10 md:w-12 md:h-12 md:ml-7 md:mt-5 lg:w-12 lg:h-12"/>
          <img src="/assets/shared/icon-hamburger.svg" alt="menu" className={`h-5 mr-2 md:hidden ${isMenu ? "hidden" : ""}`} onClick={() => setIsMenu(!isMenu)} />
          <Tablet />
          {isMenu && (
            <Sidebar check={isMenu} close={setIsMenu} />
          )}
        </div>
        {tab=="home" && <Home />}
        {tab=="dest" && <Dest />}
        {tab=="crew" && <Crew />}
        {tab=="tech" && <Tech />}
      </MyContext.Provider>
    </body>
  )
}

export default App
