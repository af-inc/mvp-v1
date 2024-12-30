'use client';

import React, { useState } from "react";

const MailPage: React.FC = () => {
  // State for tracking the active tab and content
  const [activeTab, setActiveTab] = useState("notifications");

  // State for notifications, contacts, and email content
  const [notifications, setNotifications] = useState<string[]>([
  
  ]);
  const [contacts, setContacts] = useState<{ name: string; email: string }[]>([]);
  const [newContact, setNewContact] = useState({ name: "", email: "" });
  const [emailContent, setEmailContent] = useState("");
  const [selectedContacts, setSelectedContacts] = useState<number[]>([]);

  // Handle adding/updating contacts
  const handleContactChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: "name" | "email"
  ) => {
    setNewContact({
      ...newContact,
      [field]: e.target.value,
    });
  };

  const handleAddContact = () => {
    if (newContact.name && newContact.email) {
      setContacts([...contacts, newContact]);
      setNewContact({ name: "", email: "" });
    }
  };

  // Handle selecting contacts for sending email
  const handleContactSelection = (index: number) => {
    if (selectedContacts.includes(index)) {
      setSelectedContacts(selectedContacts.filter((i) => i !== index));
    } else {
      setSelectedContacts([...selectedContacts, index]);
    }
  };

  // Handle sending email (for now just logs the action)
  const handleSendEmail = () => {
    console.log("Sending email to:", selectedContacts.map(i => contacts[i].email));
    console.log("Email content:", emailContent);
  };

  // Delete a notification (permanently)
  const handleDeleteNotification = (index: number) => {
    setNotifications((prevNotifications) =>
      prevNotifications.filter((_, i) => i !== index) // Removes the notification permanently
    );
  };

  // Handle long press (mobile) or right-click (desktop)
  const handleLongPress = (e: React.TouchEvent, index: number) => {
    e.preventDefault();
    handleDeleteNotification(index);
  };

  const handleRightClick = (e: React.MouseEvent, index: number) => {
    e.preventDefault();
    handleDeleteNotification(index);
  };

  return (
    <div className="h-screen w-screen flex flex-col">
      {/* Header Section with Tabs */}
      <div className="flex items-center justify-between text-black p-4 border-b-2 border-gray-300">
        <button
          onClick={() => setActiveTab("notifications")}
          className={`px-6 py-2 font-bold rounded-md focus:outline-none border-b-2 ${
            activeTab === "notifications" ? "border-indigo-600 text-indigo-600" : "border-transparent hover:border-gray-400"
          }`}
        >
          Notifications
        </button>
        <div className="border-l-2 border-gray-300 h-6"></div> {/* Vertical Divider */}
        <button
          onClick={() => setActiveTab("contacts")}
          className={`px-6 py-2 font-bold rounded-md focus:outline-none border-b-2 ${
            activeTab === "contacts" ? "border-indigo-600 text-indigo-600" : "border-transparent hover:border-gray-400"
          }`}
        >
          Contacts
        </button>
        <div className="border-l-2 border-gray-300 h-6"></div> {/* Vertical Divider */}
        <button
          onClick={() => setActiveTab("mail")}
          className={`px-6 py-2 font-bold rounded-md focus:outline-none border-b-2 ${
            activeTab === "mail" ? "border-indigo-600 text-indigo-600" : "border-transparent hover:border-gray-400"
          }`}
        >
          Mail
        </button>
      </div>

      {/* Content Section */}
      <div className="flex-1 p-6 overflow-auto bg-white">
        {/* Notifications Tab Content */}
        {activeTab === "notifications" && (
          <>
            <h2 className="text-2xl font-bold mb-4">Notifications</h2>
            {notifications.length === 0 ? (
              <p className="text-center text-gray-500">No notifications</p>
            ) : (
              <ul className="space-y-2">
                {notifications.map((notification, index) => (
                  <li
                    key={index}
                    className="py-2 border-b border-gray-300"
                    onContextMenu={(e) => handleRightClick(e, index)} // Right-click for desktop
                    onTouchStart={(e) => handleLongPress(e, index)} // Long press for mobile
                  >
                    {notification}
                  </li>
                ))}
              </ul>
            )}
          </>
        )}

        {/* Contacts Tab Content */}
        {activeTab === "contacts" && (
          <>
            <h2 className="text-2xl font-bold mb-4">Contacts</h2>

            {/* Add New Contact */}
            <div className="mb-4">
              <h3 className="text-lg font-medium">Add New Contact</h3>
              <div className="space-y-2">
                <div>
                  <label htmlFor="contactName" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    id="contactName"
                    type="text"
                    value={newContact.name}
                    onChange={(e) => handleContactChange(e, "name")}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Enter name"
                  />
                </div>
                <div>
                  <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    id="contactEmail"
                    type="email"
                    value={newContact.email}
                    onChange={(e) => handleContactChange(e, "email")}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Enter email"
                  />
                </div>
                <button
                  onClick={handleAddContact}
                  className="mt-3 px-4 py-2 bg-indigo-600 text-white font-bold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  Add Contact
                </button>
              </div>
            </div>

            {/* Display Contacts */}
            <h3 className="text-lg font-medium">Your Contacts</h3>
            <ul className="space-y-2 mt-4">
              {contacts.map((contact, index) => (
                <li key={index} className="flex items-center justify-between py-2 border-b border-gray-300">
                  <div>
                    <p>{contact.name}</p>
                    <p className="text-sm text-gray-500">{contact.email}</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={selectedContacts.includes(index)}
                    onChange={() => handleContactSelection(index)}
                    className="w-4 h-4 text-indigo-600"
                  />
                </li>
              ))}
            </ul>
          </>
        )}

        {/* Mail Tab Content */}
        {activeTab === "mail" && (
          <>
            <h2 className="text-2xl font-bold mb-4">Send Campaign Link</h2>
            <textarea
              value={emailContent}
              onChange={(e) => setEmailContent(e.target.value)}
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Write your email content here"
            />
            <button
              onClick={handleSendEmail}
              disabled={selectedContacts.length === 0 || !emailContent}
              className={`mt-4 px-6 py-3 bg-green-600 text-white font-bold rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 ${
                selectedContacts.length === 0 || !emailContent
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "focus:ring-green-500"
              }`}
            >
              Send Email
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default MailPage;
