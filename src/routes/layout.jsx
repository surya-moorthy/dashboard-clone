import { Outlet } from "react-router-dom"
import { Header } from "../layouts/header"
import { Sidebar } from "../layouts/sidebar"
import { useMediaQuery } from "@uidotdev/usehooks"
import {cn} from "../utils/cn"
import { useState } from "react"
import { useRef } from "react"
import { useEffect } from "react"
export const Layout = () => {
  const isDesktopDevice = useMediaQuery("(min-width: 768px)");
  const [collapsed,setCollapsed] = useState(!isDesktopDevice);

  const sidebarRef = useRef(null);

  useEffect(() => {
    setCollapsed(!isDesktopDevice);
}, [isDesktopDevice]);

  return (
   <div className="min-h-screen bg-slate-100 transition-colors dark:bg-slate-900 text-neutral-100">
         <Sidebar ref={sidebarRef} collapsed={collapsed}/>
         <div className={cn("transition-[margin] duration-300")}>
            <Header/>
            <div className="h-[calc(100vh - 60px)] overflow-y-auto overflow-x-hidden">
                  <Outlet/>
            </div>
         </div> 
   </div>
  )
}