
import Navbar from './Navbar'

export default function Hero() {
  return (
    <div id='home' className='bg-[#55392f] font-playfair min-h-screen bg-cover bg-center bg-no-repeat' style={{backgroundImage: "url(/image.png)"}}>
        
        <div className=' bg-black/40'>
        <Navbar/>
      <div className='mx-6 flex min-h-screen items-center max-w-6xl'>
        <div className=''>
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#B8753C]">
              Crafted with passion
            </p>
             <h1 className="font-playfair text-5xl font-semibold text-[#e08712] md:text-7xl">
              Welcome to Coffelix
            </h1>
            <p className='text-[#E8D3B5] mt-4'>
                  The most awaited arrival- Coffelix coming to your town. Discover rich aromas, bold flavors, and the perfect cup of coffee.
            </p>
            <button className='bg-[#e08712] px-6 py-2 text-[#24140E] font-medium rounded-full mt-4'>Explore Coffelix</button>
        </div>

      </div>
     
      </div>
    </div>
  )
}
