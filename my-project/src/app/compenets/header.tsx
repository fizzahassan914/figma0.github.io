import React from 'react'

const Header = () => {
    return (
        <div>
            <header className="bg-[#eeebeb] text-black py-4">
                <div className="container mx-auto flex justify-between items-center">
                    <div>
                        <span className="font-pecita text-[48px] font-normal leading-[59.23px] tracking-[-0.1em]">
                            Stylish
                        </span>
                        <br />
                        <span>Online store</span>
                    </div>

                    <nav>
                        <ul className="flex space-x-8 text-lg">
                            <li><a href="#" className="hover:underline">Home</a></li>
                            <li><a href="#" className="hover:underline">Men</a></li>
                            <li><a href="#" className="hover:underline">Women</a></li>
                            <li><a href="#" className="hover:underline">Trends</a></li>
                            <li><a href="#" className="hover:underline">Collections</a></li>
                            <li><a href="#" className="hover:underline">Sale</a></li>
                            <li><a href="#" className="hover:underline">Blog</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
           
            <div className="max-w-[1200px] mx-auto p-4">
      <div className="grid grid-cols-2 gap-4">
        {/* Left: Large Image */}
        <div className="relative w-full h-[400px] bg-gray-200">
          <img
            src="/f1.jpg" /* Replace with actual image path */
            alt="Stylish shoes for Women"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-6 left-6 text-black">
            <h2 className="text-2xl font-bold">Stylish shoes for Women</h2>
            <p className="text-sm font-medium">$102.00</p>
          </div>
        </div>


        <div className="flex flex-col gap-4">

          <div className="relative w-full h-[190px] bg-red-500">
            <img
              src="/f2.jpg" 
              alt="Sports Wear"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 text-white">
              <h2 className="text-xl font-bold">Sports Wear</h2>
              <p className="text-sm font-medium">$102.00</p>
            </div>
          </div>

          <div className="relative w-full h-[190px] bg-gray-100">
            <img
              src="/f3.jpg" 
              alt="Fashion Shoes"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 text-black">
              <h2 className="text-xl font-bold">Fashion Shoes</h2>
              <p className="text-sm font-medium">$102.00</p>
            </div>
          </div>
        </div>
      </div>
            
        </div>

        <div className="discount-offer style={ backgroundImage: url('/f4.jpg') }}">
            <div className='offerText flex justify-center items-center'>
                <h2 className='font-bold'>100% OFF Discount Coupons</h2>
                <p>Subscribe us to get 10% OFF on all the purchases</p>
            </div>
        </div>
           <div  className="feature flex justify-center">
                <img src="./S1.png" alt="" className='S1 w-[95%]'/>
           </div>
           <div  className="feature flex justify-center">
                <img src="./S2.png" alt="" className='S2 w-[95%]'/>
           </div>
           <div  className="feature flex justify-center">
                <img src="./S3.png" alt="" className='S3 w-[95%]'/>
           </div>
           <div  className="feature flex justify-center">
                <img src="./S5.png" alt="" className='S5 w-[95%]'/>
           </div>
        </div>
    )
}

export default Header