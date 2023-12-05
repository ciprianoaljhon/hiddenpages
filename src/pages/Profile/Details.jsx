import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseURL } from "../../config/data";
import { success } from "../../config/statusNotif";
function MyDetails() {
  const { userId } = JSON.parse(sessionStorage.getItem("sessionData"));
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    birthDate: "",
    phoneNumber: "",
  });

  const [passwordInfo, setPasswordInfo] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handlePersonalInfoChange = (name, value) => {
    setPersonalInfo({
      ...personalInfo,
      [name]: value,
    });
  };

  const handlePasswordChange = (name, value) => {
    setPasswordInfo({
      ...passwordInfo,
      [name]: value,
    });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `${baseURL}/profile/personal-info/${userId}`,
        personalInfo
      );
      console.log("Personal information updated successfully");
      success("Profile Updated!");
    } catch (error) {
      failed("Failed to Update");
      console.error("Error updating profile:", error);
    }
  };

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`${baseURL}/profile/${userId}`);
        const { firstName, lastName, birthDate, phoneNumber } = response.data;
        setPersonalInfo({ firstName, lastName, birthDate, phoneNumber });
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchProfile();
  }, [userId]);

  return (
    <div>
      <h3 className="mb-4">My Details</h3>
      <Divider title="Personal Information" />
      <form
        action=""
        name="personal-info"
        className="flex flex-col"
        onSubmit={handleSave}
      >
        <div className="flex gap-x-4 child:w-1/2 mb-4 ">
          <Input
            type="text"
            htmlFor="first-name"
            text="First Name"
            name="first-name"
            value={personalInfo.firstName}
            onChange={(value) => handlePersonalInfoChange("firstName", value)}
          />

          <Input
            type="text"
            htmlFor="last-name"
            text="Last Name"
            name="last-name"
            value={personalInfo.lastName}
            onChange={(value) => handlePersonalInfoChange("lastName", value)}
          />
        </div>

        <div className="flex gap-x-4 child:w-1/2 mb-4 ">
          <Input
            type="date"
            htmlFor="birth-date"
            text="Birth Date"
            name="birth-date"
            value={personalInfo.birthDate}
            onChange={(value) => handlePersonalInfoChange("birthDate", value)}
          />
          <Input
            type="number"
            htmlFor="phone-number"
            text="Phone Number"
            name="phone-number"
            value={personalInfo.phoneNumber}
            onChange={(value) => handlePersonalInfoChange("phoneNumber", value)}
          />
        </div>
        <button className="primary-btn ml-auto px-8 py-2 rounded-lg">
          Save
        </button>
      </form>
      <Divider title="Password" />
      <div className="">
        <form action="" className="flex flex-col gap-x-4 mb-4 ">
          <Input
            type="text"
            htmlFor="current-pass"
            text="Current Password"
            name="current-pass"
            value={passwordInfo.currentPassword}
            onChange={(value) => handlePasswordChange("currentPassword", value)}
            required
          />
          <Input
            type="password"
            htmlFor="password"
            text="New Password"
            name="password"
            value={passwordInfo.newPassword}
            onChange={(value) => handlePasswordChange("newPassword", value)}
            required
          />
          <Input
            type="password"
            htmlFor="confirm-pass"
            text="Confirm Password"
            name="confirm-pass"
            value={passwordInfo.confirmPassword}
            onChange={(value) => handlePasswordChange("confirmPassword", value)}
            required
          />
          <button
            className="primary-btn ml-auto px-8 py-2 rounded-lg"
            onClick={handleSave}
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

export default MyDetails;

export function Divider({ title }) {
  return (
    <div>
      <h5 className="">{title}</h5>
      <hr className="border-neutral-3 border-solid mt-2 mb-6 " />
    </div>
  );
}

export function Input({ type, text, name, value, onChange, htmlFor }) {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className="flex flex-col">
      <label htmlFor={htmlFor} className={"text-sm font-semibold"}>
        {text}
      </label>
      <input
        name={name}
        type={type}
        value={value}
        onChange={handleChange}
        className="bg-neutral-2 px-3 py-1 rounded-md border-solid border-2 border-neutral-3"
      />
    </div>
  );
}
