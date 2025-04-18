import { TrendingUp } from "lucide-react"
import { Package } from "lucide-react"
import { Card } from "./card"
import { DollarSign } from "lucide-react"
import { Users } from "lucide-react"
import { CreditCard } from "lucide-react"
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { overviewData, recentSalesData, topProducts } from "../../constants"
import { useTheme } from "../../hooks/theme"
import { Footer } from "../../layouts/footer"
import { Star } from "lucide-react"
import { PencilLine } from "lucide-react"
import { Trash } from "lucide-react"

export const Dashboardpage = () => {
    const { theme } = useTheme();
    return (
       <div className="flex flex-col gap-y-4 p-4">
              <h1 className="title">
                   Dashboard                
              </h1>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <Card
                   icon={<Package size={26}/>}
                   cardTitle="Total Products"
                   cardBody="25,134"
                   cardBodySpan={<TrendingUp size={18}>35%</TrendingUp>}/>
              <Card
                   icon={<DollarSign size={26}/>}
                   cardTitle="Total Paid Orders"
                   cardBody="$16000"
                   cardBodySpan={<TrendingUp size={18}>35%</TrendingUp>}/>
              <Card
                   icon={<Users size={26}/>}
                   cardTitle="Total Customers"
                   cardBody="15000k"
                   cardBodySpan={<TrendingUp size={18}>35%</TrendingUp>}/>
              <Card
                   icon={<CreditCard size={26}/>}
                   cardTitle="Sales"
                   cardBody="12,340"
                   cardBodySpan={<TrendingUp size={18}>35%</TrendingUp>}/>
              </div>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-7">
                    <div className="card col-span-1 md:col-span-2 lg:col-span-4">
                        <div className="card-header">
                             <p className="card-title">Overview</p>
                        </div>
                        <div className="card-body p-0">
                           <ResponsiveContainer
                                width={"100%"}
                                height={100}
                           >
                            <AreaChart
                              data={overviewData}
                              margin={{
                                top:0,
                                right:0,
                                left:0,
                                bottom:0,
                              }}
                            >
                                <defs>
                                    <linearGradient
                                       id="colorTotal"
                                       x1={"0"}
                                       y1={"0"}
                                       x2={"0"}
                                       y2={"5"}
                                    >
                                       <stop
                                            offset="5%"
                                            stopColor="#2563eb"
                                            stopOpacity={0.8}
                                       />
                                       <stop
                                            offset="95%"
                                            stopColor="#2563eb"
                                            stopOpacity={0}
                                       />
                                    </linearGradient>
                                </defs>
                                <Tooltip
                                    cursor={false}
                                    formatter={(value)=>`$${value}`}
                                />
                                <XAxis
                                    dataKey={"name"}
                                    strokeWidth={0}
                                    stroke={theme === "light" ? "#475569" : "#94a3b8"}
                                />
                                <YAxis
                                    dataKey={"total"}
                                    strokeWidth={0}
                                    
                                    stroke={theme === "light" ? "#475569" : "#94a3b8"}
                                    tickFormatter={(value)=>`$${value}`}
                                    tickMargin={6}
                                />
                                <Area
                                     type="monotone"
                                     dataKey="total"
                                     stroke="#2563eb"
                                     fillOpacity={1}
                                     fill="url(#colorTotal)"
                                />
                            </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                    <div className="card col-span-1 md:col-span-2 lg:col-span-3">
                    <div className="card-header">
                        <p className="card-title">Recent Sales</p>
                    </div>
                    <div className="card-body h-[300px] overflow-auto p-0">
                        {recentSalesData.map((sale) => (
                            <div
                            key={sale.id}
                            className="flex items-center justify-between gap-x-4 py-2 pr-2"
                        >
                            <div className="flex items-center gap-x-4">
                                <img
                                    src={sale.image}
                                    alt={sale.name}
                                    className="size-10 flex-shrink-0 rounded-full object-cover"
                                />
                                <div className="flex flex-col gap-y-2">
                                    <p className="font-medium text-slate-900 dark:text-slate-50">{sale.name}</p>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">{sale.email}</p>
                                </div>
                            </div>
                            <p className="font-medium text-slate-900 dark:text-slate-50">${sale.total}</p>
                        </div>
                        ))}
                    </div>
                </div>
              </div>
             
              <div className="card">
                <div className="card-header">
                    <p className="card-title">Top Orders</p>
                </div>
                <div className="card-body p-0">
                    <div className="relative h-[500px] w-full flex-shrink-0 overflow-auto rounded-none [scrollbar-width:_thin]">
                        <table className="table">
                            <thead className="table-header">
                                <tr className="table-row">
                                    <th className="table-head">#</th>
                                    <th className="table-head">Product</th>
                                    <th className="table-head">Price</th>
                                    <th className="table-head">Status</th>
                                    <th className="table-head">Rating</th>
                                    <th className="table-head">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="table-body">
                                {topProducts.map((product) => (
                                    <tr
                                        key={product.number}
                                        className="table-row"
                                    >
                                        <td className="table-cell">{product.number}</td>
                                        <td className="table-cell">
                                            <div className="flex w-max gap-x-4">
                                                <img
                                                    src={product.image}
                                                    alt={product.name}
                                                    className="size-14 rounded-lg object-cover"
                                                />
                                                <div className="flex flex-col">
                                                    <p>{product.name}</p>
                                                    <p className="font-normal text-slate-600 dark:text-slate-400">{product.description}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="table-cell">${product.price}</td>
                                        <td className="table-cell">{product.status}</td>
                                        <td className="table-cell">
                                            <div className="flex items-center gap-x-2">
                                                <Star
                                                    size={18}
                                                    className="fill-yellow-600 stroke-yellow-600"
                                                />
                                                {product.rating}
                                            </div>
                                        </td>
                                        <td className="table-cell">
                                            <div className="flex items-center gap-x-4">
                                                <button className="text-blue-500 dark:text-blue-600">
                                                    <PencilLine size={20} />
                                                </button>
                                                <button className="text-red-500">
                                                    <Trash size={20} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Footer/>
       </div>
    )
}