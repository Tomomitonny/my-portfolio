// src/component/Contact.js
import React from 'react';
import "../index.css"

const Contact = () => {
  return (
    <div id="contact" className="pt-40 pb-auto min-h-[calc(100vh-340px)] max-w-5xl mx-auto z-50">
      <div className="max-w-screen-lg mx-auto mb-10 text-sm mx-10">
        <h2 className="inline sm:block sm:justify-center">Contact</h2>

        <div class="inline-flex sm:ml-auto sm:mt-0 mt-4 mb-6 justify-center sm:justify-start">
          <a class="text-gray-500">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
          <a class="ml-3 text-gray-500">
            <svg fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24" >
              <path d="M18.2439 2.25H21.5519L14.3249 10.51L22.8269 21.75H16.1699L10.9559 14.933L4.98991 21.75H1.67991L9.40991 12.915L1.25391 2.25H8.07991L12.7929 8.481L18.2439 2.25ZM17.0829 19.77H18.9159L7.08391 4.126H5.11691L17.0829 19.77Z"/>
            </svg>
          </a>
          <a class="ml-3 text-gray-500">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
          
        </div>

        <form action="#" method="post" className=''>
          <dl className="flex flex-wrap mb-5">
            <div className="w-full sm:w-1/6 mb-3 sm:mb-0">
              <dt><label htmlFor="name" className="block">NAME</label></dt>
            </div>
            <div className="w-full sm:w-5/6 mb-3">
              <dd><input type="text" id="name" name="your-name" className="w-full border border-gray-300 p-2 bg-white" /></dd>
            </div>
            <div className="w-full sm:w-1/6 mb-3 sm:mb-0">
              <dt><label htmlFor="email" className="block">E-mail</label></dt>
            </div>
            <div className="w-full sm:w-5/6 mb-3">
              <dd><input type="text" name="your-email" id="email" className="w-full border border-gray-300 p-2 bg-white" /></dd>
            </div>
            <div className="w-full sm:w-1/6 mb-3 sm:mb-0">
              <dt><label htmlFor="message" className="block">MESSAGE</label></dt>
            </div>
            <div className="w-full sm:w-5/6 mb-3">
              <dd><textarea name="your-message" id="message" className="w-full border border-gray-300 p-2 bg-white h-40"></textarea></dd>
            </div>
          </dl>
          <div className="text-center">
            <div className="inline-block">
              <input type="submit" value="送信" className="w-52 bg-[#B5A4EE] text-white font-light text-lg py-4 border border-[#B5A4EE] hover:bg-white hover:text-[#B5A4EE] transition-colors duration-300" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
