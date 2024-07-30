import React from 'react';
import friend from '../assets/friend.png';
import hinhtron from '../assets/hinhtron.png';

const Team = () => {
    return (
        <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
            <h1 className="text-2xl font-bold mb-6">Team</h1>

            <div className="bg-gray-700 p-4 rounded-lg mb-6">
                <h2 className="text-xl font-semibold mb-2">Referral Team</h2>
                <p className="text-gray-400">Your team has 20 members, 3 of 20 are receiving rewards</p>
                <div className="flex justify-end">
                    <div className="relative flex items-center">
                        <img src={hinhtron} alt="hinhtron" className="w-24 h-24 object-cover" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                            <span className="text-gray-400">Running</span>
                            <span className="text-4xl font-bold">3</span>
                        </div>
                    </div>
                </div>
            </div>

            <h2 className="text-xl font-semibold mb-4">Members</h2>
            <button className="bg-yellow-600 text-white hover:bg-yellow-500 px-4 py-2 rounded-lg mb-6">All ▼</button>
            <p className="text-gray-400 mb-4">Invite new Pioneers to your team. Boost your reward rate for every active member. Ping daily to remind to receive rewards.</p>

            <table className="min-w-full bg-gray-700 rounded-lg mb-6">
                <thead>
                    <tr>
                        <th className="px-4 py-2 text-left">Rank</th>
                        <th className="px-4 py-2 text-left">Username</th>
                        <th className="px-4 py-2 text-left">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border-t border-gray-600 px-4 py-2">1</td>
                        <td className="border-t border-gray-600 px-4 py-2">@dianne</td>
                        <td className="border-t border-gray-600 px-4 py-2 text-green-400">Running</td>
                    </tr>
                    <tr>
                        <td className="border-t border-gray-600 px-4 py-2">2</td>
                        <td className="border-t border-gray-600 px-4 py-2">@marjorie</td>
                        <td className="border-t border-gray-600 px-4 py-2 text-green-400">Running</td>
                    </tr>
                    <tr>
                        <td className="border-t border-gray-600 px-4 py-2">3</td>
                        <td className="border-t border-gray-600 px-4 py-2">@philip</td>
                        <td className="border-t border-gray-600 px-4 py-2 text-green-400">Running</td>
                    </tr>
                    <tr>
                        <td className="border-t border-gray-600 px-4 py-2">4</td>
                        <td className="border-t border-gray-600 px-4 py-2">@arthur</td>
                        <td className="border-t border-gray-600 px-4 py-2 text-red-400">Inactive</td>
                    </tr>
                    <tr>
                        <td className="border-t border-gray-600 px-4 py-2">5</td>
                        <td className="border-t border-gray-600 px-4 py-2">@leslie</td>
                        <td className="border-t border-gray-600 px-4 py-2 text-red-400">Reported</td>
                    </tr>
                </tbody>
            </table>

            <button className="bg-red-600 text-white hover:bg-red-500 px-4 py-2 rounded-lg mb-6">Ping Friend Inactive</button>

            <h2 className="text-xl font-semibold mb-4">Invite your friends to join Superlott</h2>

            <div className="mb-4">
                <label className="block text-gray-400 mb-2">Invite ID</label>
                <input type="text" value="henryszb" className="bg-gray-900 border border-gray-600 rounded-lg p-2 w-full" readOnly />
            </div>

            <div className="mb-4">
                <label className="block text-gray-400 mb-2">Invite Link</label>
                <input type="text" value="https://superlott.io/invite?ref=henryszb" className="bg-gray-900 border border-gray-600 rounded-lg p-2 w-full" readOnly />
            </div>

            <button className="bg-blue-600 text-white hover:bg-blue-500 px-4 py-2 rounded-lg">Invite Friend</button>
        </div>
    );
}

export default Team;
