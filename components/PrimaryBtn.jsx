const PrimaryBtn = ({projectLink}) => {
  return (
    <>
      <a href={`${projectLink}`} target="_blank" className="relative px-6 py-3 font-bold text-gray-100 text-md group" rel="noreferrer">
        <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-[#2799d3] group-hover:translate-x-0 group-hover:translate-y-0"></span>
        <span className="absolute inset-0 w-full h-full border-4 border-[#0671a7]"></span>
        <span className="relative">View Project</span>
      </a>
    </>
  )
}

export default PrimaryBtn