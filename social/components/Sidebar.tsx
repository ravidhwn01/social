import React ,{useState} from 'react'
import { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { GoogleLogout, GoogleLogin } from 'react-google-login'
import { AiFillHome,AiOutlineMenu } from 'react-icons/ai'
import{ImCancelCircle} from 'react-icons/im'



const Sidebar = () => {
  const [sidebar, setSidebar] = useState(true)


  return (
    <div >
      <div className="block xl:hidden m-2 ml-4 mt-3
     text-xl "
     onClick={()=>setSidebar((prev)=>!prev)}
     >
     
      {sidebar ? <ImCancelCircle/>:<AiOutlineMenu/>} 


      </div>

    </div>
  )
}

export default Sidebar