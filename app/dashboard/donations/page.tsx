"use client";

import React, { useState } from "react";
import Link from "next/link";

const Donations: React.FC = () => {
  const [campaigns, setCampaigns] = useState([
    // Example campaigns data
    { id: 1, name: "Save the Earth", status: "Active", raised: "$5,000", goal: "$10,000" },
  ]);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    {/*<div className="min-h-screen bg-gray-900 text-gray-100">*/}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
          <div>
            <h2 className="text-3xl font-bold">My Donations</h2>
            <p className="text-gray-400">Overview</p>
          </div>
        </header>

        {campaigns.length === 0 ? (
          <div className="flex flex-col justify-center items-center h-[50vh]">
            <h3 className="text-2xl font-semibold">No donations yet</h3>
            <p className="text-gray-400 mt-2">Create your first donation page to make an impact!</p>
            <Link href="/dashboard/create_donation">
              <button className="mt-6 px-6 py-2 bg-purple-700 text-white rounded-lg hover:bg-purple-800">
                Setup Donation
              </button>
            </Link>
          </div>
        ) : (
          <div className="overflow-hidden border border-gray-800 rounded-lg bg-gray-800 shadow">
            <table className="min-w-full divide-y divide-gray-700">
              <thead className="bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Raised</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Goal</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {campaigns.map((campaign) => (
                  <tr key={campaign.id} className="hover:bg-gray-700">
                    <td className="px-6 py-4 whitespace-nowrap">{campaign.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{campaign.status}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{campaign.raised}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{campaign.goal}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Link href={`/dashboard/campaign/${campaign.id}`}>
                        <button className="text-purple-500 hover:underline">View</button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
    {/*</div>*/}
    </div>
  );
};

export default Donations;
