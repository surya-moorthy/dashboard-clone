export const Card = (props) => {
     return (
        <div className="card">
                  <div className="card-header">
                        <div className="w-fit rounded-lg bg-blue-500/2 p-2 text-blue-500 transition-colors dark:bg-blue-300 dark:text-blue-600">
                              {props.icon}
                        </div>
                        <p className="card-title">{props.cardTitle}</p>
                  </div>
                  <div className="card-body bg-slate-100 transition-colors dark:bg-slate-950">
                        <p className="text-3xl font-bold text-slate-900 transition-colors dark:text-slate-50">{props.cardBody}</p>
                         <span className="flex w-fit items-center gap-x-2 rounded-full border border-blue-500 px-2 py-1 font-medium text-blue-500 dark:text-blue-600 dark:border-blue-600">
                            {props.cardBodySpan}
                         </span>
                  </div>
        </div>
     )
}