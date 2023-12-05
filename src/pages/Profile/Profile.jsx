import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Details from "./Details";
import AddressBook from "./AddressBook";
import { useLoggedInContext } from "../../hooks/LoggedInContext";

function Profile() {
  const [activeTab, setActiveTab] = useState("details");
  const { setLogIn } = useLoggedInContext();
  useEffect(() => {
    setLogIn(true);
    scrollTo(0, 0);
  });

  const handleTabChange = (tab) => setActiveTab(tab);

  const tabs = [
    { id: "details", label: "My Details" },
    { id: "address-book", label: "Address Book" },
  ];
  return (
    <div className="h-max w-full pt-24 px-24 min-h-screen ">
      <div className="wrapper h-full ">
        <h1 className="mb-5 text-3xl">My Account</h1>
        <div className="tabs flex gap-x-4">
          <ul className="tab-list flex w-1/4 flex-col child:px-6 child:py-3 cursor-pointer">
            {tabs.map(({ id, label }) => (
              <li
                key={id}
                className={
                  "w-full " +
                  (activeTab === id
                    ? "active bg-main-clr text-secondary rounded-xl"
                    : "")
                }
                onClick={() => handleTabChange(id)}
              >
                {label}
              </li>
            ))}
          </ul>
          <div className="tab-content bg-neutral-1 w-full h-full px-10 py-5 rounded-lg shadow-xl">
            {activeTab === "details" && <Details />}

            {activeTab === "address-book" && <AddressBook></AddressBook>}

            {/* {activeTab === "orders" && (
              <div>
                <h2>Orders Tab </h2>
              </div>
            )} */}

            {/* {activeTab === "wishlist" && (
              <div>
                <h2>Wishlist Tab </h2>
              </div>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
