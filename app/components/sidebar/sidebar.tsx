import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Sidebar = () => {
  return (
        <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content p-10">
                <label htmlFor="my-drawer" className="btn btn-square btn-ghost drawer-button">
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-10 w-10 stroke-current"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path> 
                     </svg>
                </label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                    <Image
                        src={'/logo.png'}
                        alt={'yaru logo'}
                         width={70}
                        height={100}/>
               {/* <li><Link>My Projects</Link></li> */}
                </ul>
            </div>
        </div>
  )
}

export default Sidebar