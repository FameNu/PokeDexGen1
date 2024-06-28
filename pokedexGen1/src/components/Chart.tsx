import { useState } from "react"

function Chart({ width, color }: { width: number; color: string }) {
  const [maxWidth] = useState(350)

  const chart = {
    width: `${(width * 100) / maxWidth}%`,
    backgroundColor: color
  }

  return (
    <div className=" text-left max-w-[450px] p-1 border-2 rounded-lg bg-slate-100 animate-chart-box">
      <span className="block h-6 text-transparent border rounded" style={chart}>
        .
      </span>
    </div>
  )
}

export default Chart
