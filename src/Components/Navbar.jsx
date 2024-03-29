import React, { useState } from 'react';
import logo from "../assets/img/vault-logo.png";
import key_hole from "../assets/img/key-hole-logo.png";
import { TERipple } from "tw-elements-react";
import { MetaMaskAvatar } from 'react-metamask-avatar';
import { BsPersonCircle } from "react-icons/bs";

const Navbar = ({ account }) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  return (
    <div className="bg-customCactus-400 text-white h-16 w-screen flex items-center justify-between px-4">
      <div className="flex justify-evenly items-center">
        <div className='relative'>
          <img src={logo} alt="" className="h-20 block w-full animate-spin-slow" />
          <img src={key_hole} alt="" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 size-16" />
        </div>
        <span className="justify-self-start text-2xl font-bold">VAULT</span>
      </div>
      <div
        className='flex flex-col items-center justify-center relative'
      >
        <div
        onMouseEnter={() => setIsPopoverOpen(true)}
        onMouseLeave={() => setIsPopoverOpen(false)}>
        <TERipple>
          { account ? <MetaMaskAvatar address={account} size={32} /> : <BsPersonCircle size={24} /> }
        </TERipple>
        </div>

        <span className='text-xs font-bold bg-gray-600 bg-opacity-50 rounded-xl p-1  h-6 '>
          {account ? `${account.slice(0, 5)}...${account.slice(-5)}`.toUpperCase() : "Not connected"}
        </span>

        {isPopoverOpen && (
          <div className="absolute z-10 -bottom-11 -left-20 transform -translate-x-1/2 text-sm text-white transition-opacity duration-300 bg-[#111111]  border border-customCactus-300 rounded-lg shadow-lg w-84 p-2">
            <div className="flex p-3">
              <div>
                <p className=" mb-1 text-base font-semibold leading-none text-customCactus-200">
                  <span className='text-xs font-light'>
                    {account ? `${account}`.toUpperCase() : "Not connected"}
                  </span>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
