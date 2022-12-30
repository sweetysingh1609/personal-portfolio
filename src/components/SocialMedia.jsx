import React from 'react'
import {BsTwitter, BsInstagram, BsLinkedin,BsYoutube} from 'react-icons/bs'
import {FaFacebook, FaGithub, FaHackerrank} from 'react-icons/fa'
import { SiLeetcode } from "react-icons/si";

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <div>
        <a href='https://github.com/sweetysingh1609' target="_blank"> <FaGithub/></a>
      </div>
      <div>
        <a href='https://www.linkedin.com/in/sweety-singh-53b74b19b/' target="_blank"><BsLinkedin/></a>
      </div>
      {/* <div>
        <FaHackerrank/>
      </div>
      <div>
        <SiLeetcode/>
      </div> */}

      {/* <div>
        <BsYoutube/>
      </div> */}

      <div>
        <BsInstagram/>
      </div>
      
      {/* <div>
        <BsTwitter/>
      </div> */}
      {/* <div>
        <FaFacebook/>
      </div> */}
      
    </div>
  )
}

export default SocialMedia
