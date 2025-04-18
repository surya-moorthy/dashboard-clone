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
  const [collapsed,setCollapsed] = useState(false);

  const sidebarRef = useRef(null);

  useEffect(() => {
    setCollapsed(!isDesktopDevice);
}, [isDesktopDevice]);

  return (
   <div className="min-h-screen bg-slate-100 transition-colors dark:bg-slate-950 text-neutral-100">
         <div className={cn("pointer-events-none fixed inset-0 -z-10 bg-black opacity-0 transition-opacity",!collapsed && "max-md:pointer-events-auto max-md:opacity-30 max-md:z-50"
        
         )}/>
         <Sidebar ref={sidebarRef} collapsed={collapsed}/>
         <div className={cn("transition-[margin] duration-500", !collapsed ? "md:ml-[70px]" : "ml-[240px]")}>
            <Header  setCollapsed={setCollapsed} collapsed={collapsed}/>
            <div className="h-[calc(100vh - 60px)] overflow-y-auto overflow-x-hidden">
                  <Outlet/>
            </div>
         </div> 
   </div>
  )
}

Sidebar.displayName = "Sidebar"
