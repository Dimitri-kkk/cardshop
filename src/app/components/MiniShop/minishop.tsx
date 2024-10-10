import Image from 'next/image'
import Link from 'next/link'

const Minishop = () => {
    return (
        <div className="flex w-full">
      <div className="relative w-1/2">
        <Image
          src="/images/bycicle.jpg" 
          alt="First Image"
          width={500}
          height={300}
          className="object-cover w-full h-full"
        />
        <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/50 border-2 text-white py-2 px-4 rounded-lg transition-colors duration-300 ease-in-out hover:bg-orange-500">
            Shop Now
        </button>
      </div>

      <div className="relative w-1/2">
        <Image
          src="/images/ignite.jpg"  
          alt="Second Image"
          width={500}
          height={300}
          className="object-cover w-full h-full"
        />
        <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/50 border-2 text-white py-2 px-4 rounded-lg transition-colors duration-300 ease-in-out hover:bg-orange-500">
            Shop Now
        </button>
      </div>
    </div>
    )
}

export default Minishop;