import React from 'react';
import bchImage from '../assets/bch.png';
import buyImage from '../assets/buy.png';
import plusImage from '../assets/plus.png'; // Make sure the correct image path is used
import { PiHandDeposit, PiHandWithdraw } from "react-icons/pi";
import { MdHistory } from "react-icons/md";
import { FaHome, FaWallet, FaChessKing } from "react-icons/fa";
import { SiFuturelearn } from "react-icons/si";
import { CgProfile } from "react-icons/cg";

const Dashboard = () => {
  return (
    
    <div className="bg-[#0E1224] min-h-screen p-4">
      <div className="bg-[#0E1224] min-h-screen p-4 overflow-y-auto">
<div className="text-white">
        <div className="text-center mb-4">
          <h2 className="text-2xl font-semibold">Total SPL</h2>
          <div className="text-3xl font-bold mb-4">16,128.80</div>
          <div className="flex justify-center space-x-4 mb-4">
            <PiHandDeposit className="text-yellow-400 text-3xl" />
            <PiHandWithdraw className="text-yellow-400 text-3xl" />
            <MdHistory className="text-yellow-400 text-3xl" />
          </div>
        </div>

        <div className="mb-4">
          <h2 className="text-lg font-semibold">Balance</h2>
          <div className="bg-[#1A1D2E] p-4 rounded-lg mb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="bg-[#f0b429] p-2 rounded-full mr-2">
                  <img src={bchImage} alt="bch" />
                </div>
                <div>Owner</div>
              </div>
              <div>0 SPL</div>
            </div>
          </div>
          <div className="bg-[#1A1D2E] p-4 rounded-lg mb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="bg-[#f0b429] p-2 rounded-full mr-2">
                  <img src={buyImage} alt="buy" />
                </div>
                <div>Reward</div>
              </div>
              <div>0 SPL</div>
            </div>
          </div>
          <div className="bg-[#1A1D2E] p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="mr-2">
                  {/* No image for Verified */}
                </div>
                <div>Verified</div>
              </div>
              <div>0 SPL</div>
            </div>
            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center">
                <div className="mr-2">
                  {/* Icon for Unverified */}
                </div>
                <div>Unverified</div>
              </div>
              <div>0 SPL</div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold">Your Assets</h2>
          <div className="text-yellow-400 text-sm mb-2">Token unlock rules</div>
          <div className="bg-[#1A1D2E] p-4 rounded-lg mb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="bg-white p-2 rounded-full mr-2">
                  <img src={plusImage} alt="plus" />
                </div>
                <div>
                  <div>SPL</div>
                  <div className="text-sm text-gray-400">Superlott</div>
                </div>
              </div>
              <div>16,128.05</div>
            </div>
          </div>
          <div className="bg-[#1A1D2E] p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="bg-green-500 p-2 rounded-full mr-2">
                  {/* Icon for USDT */}
                </div>
                <div>
                  <div>USDT</div>
                  <div className="text-sm text-gray-400">Tether</div>
                </div>
              </div>
              <div>112,51</div>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-[#0E1224] p-2">
        <div className="flex justify-between text-white">
          <div className="flex flex-col items-center">
            <FaHome className="text-white text-2xl" />
            <div>Home</div>
          </div>
          <div className="flex flex-col items-center">
            <FaWallet className="text-white text-2xl" />
            <div>Wallet</div>
          </div>
          <div className="flex flex-col items-center">
            <FaChessKing className="text-white text-2xl" />
            <div>Rate</div>
          </div>
          <div className="flex flex-col items-center">
            <SiFuturelearn className="text-white text-2xl" />
            <div>Earn</div>
          </div>
          <div className="flex flex-col items-center">
            <CgProfile className="text-white text-2xl" />
            <div>Profile</div>
          </div>
        </div>
      </div>
    </div>
      </div>
      
  );
};

export default Dashboard;
