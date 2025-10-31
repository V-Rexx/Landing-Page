import React from 'react'

function Footer() {
  return (
    <footer className='w-full bg-[rgb(28,28,63)] text-white py-10 px-6'>
        <div className='max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10'>

            {/* Left Part */}
            <div className='md:w-1/2'>
                <h2 className='text-2xl font-bold mb-3'>NIT SILCHAR HACKATHON 2025</h2>
                <p className='text-sm text-gray-100'>
                    Organizing hackathon 2025
                </p>
            </div>

            {/* Right part */}
            <div className='md:w-1/2 flex flex-col md:flex-row gap-x-30 justify-end gap-10'>
                <div>
                    <h3 className='text-lg font-semibold mb-3'>Quick Links</h3>
                    <ul className='space-y-2 text-gray-100 text-center'>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className='text-lg font-semibold mb-3'>Connect With Us</h3>
                    <ul className='flex flex-col space-y-2 text-gray-100 text-center'>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">LinkedIn</a></li>
                    </ul>
                </div>


            </div>

            <div className="border-t border-white/20 mt-10 pt-5 text-center text-sm text-gray-200">
                <p>© {new Date().getFullYear()} NIT Silchar Hackathon </p>
            </div>

        </div>

    </footer>
  )
}

export default Footer