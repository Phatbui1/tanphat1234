import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowRoundBack } from "react-icons/io";
import friend from '../../assets/friend.png';
import hinhtron from '../../assets/hinhtron.png';

const Team = () => {
    const navigate = useNavigate();

    const handlePingFriendInactive = () => {
        navigate('/team1');
    };

    const handleBackClick = () => {
        navigate(-1); // Navigate back one page
    };

    return (
        <div className="bg-[#090B2F] text-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
            <div className="relative mb-6">
                <IoIosArrowRoundBack
                    size={40}
                    className="text-white absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer"
                    onClick={handleBackClick}
                />
                <h1 className="text-2xl font-bold text-center">Team</h1>
            </div>

            <div className="bg-gray-700 p-4 rounded-lg mb-6">
                <h2 className="text-xl font-semibold mb-2">Referral Team</h2>
                <p className="text-gray-400">Your team has 0 members, 0 of 0 are receiving rewards</p>
                <div className="flex justify-end">
                    <div className="relative flex items-center">
                        <img src={hinhtron} alt="Team Status" className="w-24 h-24 object-cover" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                            <span className="text-gray-400">Running</span>
                            <span className="text-4xl font-bold">0</span>
                        </div>
                    </div>
                </div>
            </div>

            <h2 className="text-xl font-semibold mb-4">Members</h2>
            <button className="bg-yellow-600 text-white hover:bg-yellow-500 px-4 py-2 rounded-lg mb-6">All ▼</button>
            <p className="text-gray-400 mb-4">Invite new Pioneers to your team. Boost your reward rate for every active member. Ping daily to remind them to receive rewards.</p>

            <div className="flex items-center justify-center mb-4">
                <img src={friend} alt="Invite Friend" className="w-32 h-32 object-cover" />
            </div>
            <p className="text-gray-400 mb-6">No one has joined your team yet! Receive more SPL by inviting friends to join you.</p>

            <button
                onClick={handlePingFriendInactive}
                className="bg-red-600 text-white hover:bg-red-500 px-4 py-2 rounded-lg mb-6"
            >
                Ping Friend Inactive
            </button>

            <h2 className="text-xl font-semibold mb-4">Invite your friends to join Superlott</h2>

            <div className="mb-4">
                <label className="block text-gray-400 mb-2">Invite ID</label>
                <input
                    type="text"
                    value="henryszb"
                    className="bg-gray-900 border border-gray-600 rounded-lg p-2 w-full"
                    readOnly
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-400 mb-2">Invite Link</label>
                <input
                    type="text"
                    value="https://superlott.io/invite?ref=henryszb"
                    className="bg-gray-900 border border-gray-600 rounded-lg p-2 w-full"
                    readOnly
                />
            </div>

            <button className="bg-blue-600 text-white hover:bg-blue-500 px-4 py-2 rounded-lg">Invite Friend</button>
        </div>
    );
}

export default Team;
