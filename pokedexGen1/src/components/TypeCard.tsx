// eslint-disable-next-line @typescript-eslint/no-explicit-any
function TypeCard({ type }: { type: { type: string; color: string } | any }) {
  const fontColor = (bgColor: string) => {
    const r = parseInt(bgColor.slice(1, 3), 16)
    const g = parseInt(bgColor.slice(3, 5), 16)
    const b = parseInt(bgColor.slice(5, 7), 16)
    const yiq = (r * 299 + g * 587 + b * 114) / 1000
    return yiq >= 128 ? 'black' : 'white'
  }

  const styleCard = {
    backgroundColor: type.color,
    color: fontColor(type.color)
  }

  return (
    <div className="p-1 border border-black rounded-lg w-[65px] text-center" style={styleCard}>
      <span>{type.type}</span>
    </div>
  )
}

export default TypeCard
