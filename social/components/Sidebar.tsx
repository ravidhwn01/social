import React ,{useState} from 'react'
import { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { GoogleLogout, GoogleLogin } from 'react-google-login'
import { AiFillHome,AiOutlineMenu } from 'react-icons/ai'
import{ImCancelCircle} from 'react-icons/im'



const Sidebar = () => {
  const [sidebar, setSidebar] = useState(true)
const normalLink = 'flex items-center justify-start gap-3 hover:bg-primary p-3 justify-center rounded-md cursor-pointer text-[#f51997] font-semibold xl:justify-start  ';


  return (
    <div >
      <div className="block xl:hidden m-2 ml-4 mt-3
     text-xl "
     onClick={()=>setSidebar((prev)=>!prev)}
     >
     
      {sidebar ? <ImCancelCircle/>:<AiOutlineMenu/>} 
      </div>
      {sidebar && (
        <div className=" bg-gray-100 z-50 shadow-lg
        flex flex-col items-center justify-start "
        >
          <div className="w-full flex justify-center items-center py-4
          xl:w-auto xl:justify-start xl:py-0
          ">
            <Link href="/" >
              <div className={normalLink} >
                <p>
                  <AiFillHome className="text-2xl" />
                </p>
                <span className='text-xl hidden' >
                  for You
                </span>
              </div>
            </Link>
              
             

          </div> 
          </div> )}

    </div>
  )
}

export default Sidebar