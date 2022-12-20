import React ,{useState} from 'react'
import { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { GoogleLogout, GoogleLogin } from 'react-google-login'
import { AiFillHome,AiOutlineMenu } from 'react-icons/ai'
import{ImCancelCircle} from 'react-icons/im'
import Discover from './Discover'
import SuggestedAccounts from './SuggestedAccounts'
import Footer from './Footer'



const Sidebar = () => {
  const [sidebar, setSidebar] = useState(true)
const normalLink = 'flex items-center justify-start gap-3 hover:bg-primary p-3 justify-center rounded-md cursor-pointer text-[#f51997] font-semibold xl:justify-start  ';
const userProfile = false;

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
                <p className="text-2xl">
                  <AiFillHome  />
                </p>
                <span className='text-xl hidden xl:block' >
                  for You
                </span>
              </div>
            </Link>
              
             

          </div> 
          {
            !userProfile && (
              <div className='px-2 py-4 hidden xl:block' >
                <p className='text-gray-400 ' >
                login to like and comment on videos
                </p>
                <div className="pr-4">
                  <GoogleLogin
                  clientId=''
                  render={renderProps => (
                    <button onClick={renderProps.onClick} className = 'text-lg cursor-pointer bg-white text-[#F51997] border-[#F51997] border-[1px] px-6 py-3 rounded-md w-full mt-3 outline-none hover:bg-[#F51997]  hover:text-white' disabled={renderProps.disabled}>Login</button>
                  )}
                  onSuccess={()=>{
                    console.log('success')
                  }
                  }
                  onFailure={()=>{
                    console.log('failed')
                  }}
                  cookiePolicy='single_host_origin'
                  />
                </div>
              </div>
            )}
            <Discover/>
            <SuggestedAccounts/>
            <Footer/>
          </div> )}

    </div>
  )
}

export default Sidebar