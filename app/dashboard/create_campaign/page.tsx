'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import TipTap from "@/components/TipTap";
import './CreateCampaigns.css';

interface FormData {
  campaignName: string;
  description: string;
  budget: number;
  image?: File;  
}

const CreateCampaigns: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    campaignName: "",
    description: "",
    budget: 0,
  });

  const [currentStep, setCurrentStep] = useState(0);
  const [transitionState, setTransitionState] = useState('enter');

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

  const handleNext = () => {
    if (currentStep < 3) {
      setTransitionState('exit');
      setTimeout(() => {
        setCurrentStep(currentStep + 1);
        setTransitionState('enter');
      }, 500);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setTransitionState('exit');
      setTimeout(() => {
        setCurrentStep(currentStep - 1);
        setTransitionState('enter');
      }, 500);
    }
  };

  return (
    <div className="h-screen w-screen bg-gray-100 overflow-auto">
      <div className="flex flex-col items-center p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Create Campaign</h1>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-4xl bg-white rounded-lg shadow-md p-6 space-y-6"
        >
          {/* Step 1: Campaign Name */}
          <div className={`step-container ${transitionState}`}>
            {currentStep === 0 && (
              <>
                <label htmlFor="campaignName" className="block text-sm font-medium text-gray-700">
                  Campaign Name
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
              </>
            )}
          </div>

          {/* Step 2: Budget */}
          <div className={`step-container ${transitionState}`}>
            {currentStep === 1 && (
              <>
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
                    min="0"
                    step="0.01"
                  />
                </div>
              </>
            )}
          </div>

          {/* Step 3: Description */}
          <div className={`step-container ${transitionState}`}>
            {currentStep === 2 && (
              <>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                  Campaign Description
                </label>
                <div className="mt-1 bg-gray-100 border border-gray-300 rounded-md p-4">
                  <TipTap />
                </div>
              </>
            )}
          </div>

          {/* Step 4: Image Upload */}
          <div className={`step-container ${transitionState}`}>
            {currentStep === 3 && (
              <>
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
                  <p className="mt-2 text-sm text-green-600">
                    Image selected: {formData.image.name}
                  </p>
                )}
              </>
            )}
          </div>

          {/* Navigation buttons */}
          <div className="flex space-x-4 mt-6">
            {currentStep > 0 && (
              <button
                type="button"
                onClick={handlePrevious}
                className="py-3 px-6 bg-gray-600 text-white font-bold rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
              >
                Previous
              </button>
            )}
            {currentStep < 3 ? (
              <button
                type="button"
                onClick={handleNext}
                className="py-3 px-6 bg-purple-800 text-white font-bold rounded-md hover:bg-purple-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                disabled={!isFormComplete()}
                className="py-3 px-6 bg-purple-800 text-white font-bold rounded-md hover:bg-purple-900 focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                Create Campaign
              </button>
            )}
          </div>
        </form>

        <div className="mt-4 text-center">
          <Link href="/campaigns" className="text-blue-600 hover:underline">
            Back to Campaigns
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CreateCampaigns;
