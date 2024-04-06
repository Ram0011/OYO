import Image from "next/image"


const Block = ({ title, para, image }) => {
    return (
        <div className='border-r border-gray-300 w-60 h-full flex items-center px-3 cursor-pointer hover:bg-slate-300 rounded-md'>
            <Image src={image} alt="demo" width={200} height={200} className="w-10 h-10 rounded-full mr-2" />
            <div>
                <h3 className=" font-semibold">{title}</h3>
                <p className="text-gray-400 text-sm line-clamp-1">{para}</p>
            </div>
        </div>
    )
}

export default Block