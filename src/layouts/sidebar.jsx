import { forwardRef } from "react"
import { cn } from "../utils/cn"
import logolight from "../assets/react.svg"
import logodark from "../assets/react.svg"

import PropsTypes from "prop-types"

export const Sidebar = forwardRef(({collapsed},ref) => {
    return (
        <aside ref={ref} 
        className={cn("fixed z-[100] flex h-full w-[240px] flex-col overflow-x-hidden border-r border-slate-200 bg-white px-4 py-6 shadow-md dark:border-slate-700 dark:bg-slate-800 lg:translate-x-0 lg:translate-y-0 lg:shadow-none lg:dark:bg-slate-900 transition-[width,left,background-color,border] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
)}>      
       <div className="flex gap-x-3 p-3">
           <img src={logolight} alt="logoLight" className="dark:hidden" />
           <img src={logodark} alt="logoLight" className="hidden dark:block" />
           {!collapsed && <p className="text-ls font-medium transition-colors text-slate-900 dark:text-slate-50">Dashboard</p>}
       </div>

        </aside> 
    )
})