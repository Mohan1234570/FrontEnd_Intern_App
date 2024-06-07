import React from 'react';
import { TiSocialFacebook, TiSocialLinkedin } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-gray-800 text-white w-screen h-90 py-12">
      <div className="container mx-auto text-center">
        <p>Contact us at: mk4400320@gmail.com</p>
        <div className="flex justify-center space-x-4 mt-4">
        <TiSocialFacebook> </TiSocialFacebook> <a href="https://www.facebook.com/" className="hover:text-gray-400">Facebook</a>
        <TiSocialLinkedin> </TiSocialLinkedin> <a href="https://www.linkedin.com/" className="hover:text-gray-400">Linkedin</a>   

        <SlSocialInstagram> </SlSocialInstagram>     <a href="https://www.instagram.com/" className="hover:text-gray-400">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


  
  