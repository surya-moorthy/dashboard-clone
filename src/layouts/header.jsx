import { ChevronLeftIcon } from "lucide-react"
import { cn } from "../utils/cn"
import { Search } from "lucide-react"
import { useState } from "react"
import { Sun } from "lucide-react"
import { Moon } from "lucide-react"
import { Bell } from "lucide-react"
import ProfileImg from "../assets/profile-image.png"

export const Header = ({collapsed,setCollapsed}) => {
  const [theme, setTheme] = useState("light");
    return (
        <div className="relative z-10 h-[60px] flex justify-between items-center shadow-md transition-colors dark:bg-slate-900 ">
              <div className="flex items-center gap-x-3">
                   <button className="btn-ghost size-10"
                     onClick={() => setCollapsed(!collapsed)}
                   >
                     <ChevronLeftIcon className={collapsed && "rotate-180"}/>
                   </button>
                   <div className="input">
                        <Search
                           size={20}
                           className="text-slate-300"
                        />
                        <input 
                        type="text"
                        name="search"
                        id="search"
                        placeholder="Search..."
                        className="w-full transparent text-slate-900 placeholder:text-slate-300 outline-0 dark:text-slate-300" 
                        />
                   </div>
              </div>
              <div className="flex items-center gap-x-3">
                <button
                  className="btn-ghost size-10"
                  onClick={()=>setTheme(theme === "light" ? "dark" : "light")}
                >
                    <Sun
                      size={20}
                      className="dark:hidden"
                    />
                    <Moon
                      size={20}
                      className="hidden dark:block"
                    />
                </button>
                <button className="size-10 overflow-hidden rounded-full">
                  <Bell size={20}/>
                </button>
               <button className="size-10 overflow-hidden rounded-full">
               <img
                 src={ProfileImg}
                 alt="profile Image"
                
                 className="size-full object-cover"
                />
               </button>
              </div>
        </div>
    )
}