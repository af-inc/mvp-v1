'use client';

import React, { useState} from "react";
import Link from "next/link";
import TipTap from "@/components/TipTap";

interface FormData {
  campaignName: string;
  description: string;
  budget: number;
  image?: File;  
}

const CreateCampaigns: React.FC = () => {
  const [formData, setFormData] = useState({
    campaignName: "",
    description: "",
    budget: 0,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'budget' ? Number(value) : value,
    }));
  };


  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setFormData((prev) => ({
        ...prev,
        image: files[0],
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormComplete()) {
      console.log("Campaign Created:", formData);
    }
  };

  const isFormComplete = (): boolean => {
    return Boolean(
      formData.campaignName &&
      formData.description &&
      formData.budget > 0 &&
      formData.image
    );
  };

  return (
    <div className="h-screen w-screen bg-gray-100 overflow-auto">
      <div className="flex flex-col items-center p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Setup Donation</h1>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-4xl bg-white rounded-lg shadow-md p-6 space-y-6"
        >
          {/* Campaign Name Input */}
          <div>
            <label htmlFor="campaignName" className="block text-sm font-medium text-gray-700">
              Donation Clause
            </label>
            <input
              id="campaignName"
              name="campaignName"
              type="text"
              value={formData.campaignName}
              onChange={handleInputChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter campaign name"
            />
          </div>

          {/* Budget Input */}
          <div>
            <label htmlFor="budget" className="block text-sm font-medium text-gray-700">
              Budget
            </label>
            <div className="mt-1 flex rounded-md shadow-sm">
              <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                $
              </span>
              <input
                id="budget"
                name="budget"
                type="number"
                value={formData.budget}
                onChange={handleInputChange}
                className="flex-1 block w-full px-4 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter budget"
              />
            </div>
          </div>

          {/* Description with Rich Text Editor */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Donation Description
            </label>
            <div className="mt-1 bg-gray-100 border border-gray-300 rounded-md p-4">
              <TipTap />
            </div>
          </div>

          {/* Image Upload */}
          <div>
            <label htmlFor="imageUpload" className="block text-sm font-medium text-gray-700">
              Attach Image
            </label>
            <input
              id="imageUpload"
              name="imageUpload"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
            <label
              htmlFor="imageUpload"
              className="inline-block mt-2 px-4 py-2 bg-indigo-600 text-white font-bold rounded-md cursor-pointer hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Upload Image
            </label>
            {formData.image && (
              <p className="mt-2 text-sm text-green-600">Image selected: {formData.image.name}</p>
            )}
          </div>

          {/* Submit and Preview Buttons */}
          <div className="flex space-x-4">
            <button
              type="submit"
              className="flex-1 py-3 px-6 bg-purple-800 text-white font-bold rounded-md hover:bg-purple-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              Setup Donation
            </button>
            <button
              type="button"
              disabled={!isFormComplete()}
              className={`flex-1 py-3 px-6 font-bold rounded-md focus:outline-none focus:ring-2 ${
                isFormComplete()
                  ? "bg-gray-800 text-white hover:bg-gray-900 focus:ring-gray-500"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              Preview
            </button>
          </div>
        </form>

        {/* Back Link */}
        <div className="mt-4 text-center">
          <Link href="/campaigns" className="text-blue-600 hover:underline">
            Back to Donations
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CreateCampaigns;
