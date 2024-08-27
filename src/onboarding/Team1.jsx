import React, { useState } from 'react';
import friend from '../assets/friend.png';
import Circle from '../assets/Circle.png';

const Team = () => {
    const [filter, setFilter] = useState('All');

    const members = [
        { rank: 1, username: '@dianne', status: 'Running' },
        { rank: 2, username: '@marjorie', status: 'Running' },
        { rank: 3, username: '@philip', status: 'Running' },
        { rank: 4, username: '@arthur', status: 'Inactive' },
        { rank: 5, username: '@leslie', status: 'Reported' }
    ];

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    const filteredMembers = filter === 'All' ? members : members.filter(member => member.status === filter);

    const getStatusColor = (status) => {
        switch (status) {
            case 'Running':
                return 'text-green-400';
            case 'Inactive':
                return 'text-yellow-400';
            case 'Reported':
                return 'text-red-400';
            default:
                return 'text-gray-400';
        }
    };

    return (
        <div className="bg-[#090B2F] text-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
            <h1 className="text-2xl font-bold mb-6">Team</h1>

            <div className="bg-gray-700 p-4 rounded-lg mb-6">
                <h2 className="text-xl font-semibold mb-2">Referral Team</h2>
                <p className="text-gray-400">Your team has 20 members, 3 of 20 are receiving rewards</p>
                <div className="flex justify-end">
                    <div className="relative flex items-center">
                        <img src={Circle} alt="Circle" className="w-24 h-24 object-cover" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                            {/* Additional content can be added here if needed */}
                        </div>
                    </div>
                </div>
            </div>

            <h2 className="text-xl font-semibold mb-4">Members</h2>
            <div className="mb-4">
                <select 
                    value={filter} 
                    onChange={handleFilterChange}
                    className="bg-yellow-600 text-white hover:bg-yellow-500 px-4 py-2 rounded-lg mb-6"
                >
                    <option value="All">All</option>
                    <option value="Running">Running</option>
                    <option value="Inactive">Inactive</option>
                    <option value="Reported">Reported</option>
                </select>
            </div>
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
                    {filteredMembers.map((member) => (
                        <tr key={member.rank}>
                            <td className="border-t border-gray-600 px-4 py-2">{member.rank}</td>
                            <td className="border-t border-gray-600 px-4 py-2">{member.username}</td>
                            <td className={`border-t border-gray-600 px-4 py-2 ${getStatusColor(member.status)}`}>{member.status}</td>
                        </tr>
                    ))}
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
