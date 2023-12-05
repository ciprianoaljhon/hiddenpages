import React, { useState } from "react";
import { useParams } from "react-router-dom";

function Profile() {
  const { paramValue } = useParams();
  console.log(paramValue);
  const [activeTab, setActiveTab] = useState("profile");

  const handleTabChange = (tab) => setActiveTab(tab);

  const tabs = [
    { id: "profile", label: "Profile" },
    { id: "security", label: "Security" },
    { id: "orders", label: "Orders" },
    { id: "wishlist", label: "Wishlist" },
  ];

  return (
    <div className="h-max w-full border-red-400 border-solid border-2  pt-24 px-24 flex gap-4">
      <div className="sub-container h-screen w-1/4">
        <ul className="tab-list flex w-full flex-col border-solid border-black border-2  child:px-6 child:py-3 cursor-pointer">
          {tabs.map(({ id, label }) => (
            <li
              key={id}
              className={activeTab === id ? "active bg-red-500" : ""}
              onClick={() => handleTabChange(id)}
            >
              {label}
            </li>
          ))}
        </ul>
      </div>

      <div className="tab-content">
        {activeTab === "profile" && (
          <div>
            <h2>Profile Tab Content</h2>
            {/* Add your profile information here */}
          </div>
        )}

        {activeTab === "security" && (
          <div>
            <h2>Security Tab Content</h2>
            {/* Add your security settings here */}
          </div>
        )}

        {activeTab === "orders" && (
          <div>
            <h2>Orders Tab Content</h2>
            {/* Display user's order history */}
          </div>
        )}

        {activeTab === "wishlist" && (
          <div>
            <h2>Wishlist Tab Content</h2>
            {/* Display user's wishlist items */}
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;
