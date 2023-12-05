import React, { useEffect, useState } from "react";
import { baseURL } from "../../config/data";
import { useLoggedInContext } from "../../hooks/LoggedInContext";
import { useAddress } from "../../hooks/useAddress.jsx";
import axios from "axios";
function MyDetails() {
  const { userId } = JSON.parse(sessionStorage.getItem("sessionData"));

  const {
    defaultAddress,
    additionalAddress,
    handleDefaultAddressChange,
    handleAddressChange,
    handleSave,
  } = useAddress(userId);

  return (
    <div>
      <h3 className="mb-4">Delivery Address</h3>
      <Divider title="Default Address" />
      <form
        action=""
        className="flex flex-col gap-2"
        onSubmit={(e) => handleSave(e, "default")}
      >
        <Input
          type="text"
          htmlFor="default-street"
          text="Street"
          name="default-street"
          value={defaultAddress.street}
          onChange={(value) => handleDefaultAddressChange("street", value)}
        />
        <Input
          type="text"
          htmlFor="default-city"
          text="City"
          name="default-city"
          value={defaultAddress.city}
          onChange={(value) => handleDefaultAddressChange("city", value)}
        />
        <Input
          type="text"
          htmlFor="default-region"
          text="Region"
          name="default-region"
          value={defaultAddress.region}
          onChange={(value) => handleDefaultAddressChange("region", value)}
        />
        <Input
          type="text"
          htmlFor="default-country"
          text="Country"
          name="default-country"
          value={defaultAddress.country}
          onChange={(value) => handleDefaultAddressChange("country", value)}
        />
        <Input
          type="text"
          htmlFor="default-postal-code"
          text="Postal Code"
          name="default-postal-code"
          value={defaultAddress.postalCode}
          onChange={(value) => handleDefaultAddressChange("postalCode", value)}
        />

        <button className="primary-btn ml-auto px-8 py-2 rounded-lg">
          Save
        </button>
      </form>

      <Divider title="Additional Address" />
      <form
        action=""
        className="flex flex-col gap-2"
        onSubmit={(e) => handleSave(e, "additional")}
      >
        <Input
          type="text"
          htmlFor="additional-street"
          text="Street"
          name="additional-street"
          value={additionalAddress.street}
          onChange={(value) => handleAddressChange("street", value)}
        />
        <Input
          type="text"
          htmlFor="additional-city"
          text="City"
          name="additional-city"
          value={additionalAddress.city}
          onChange={(value) => handleAddressChange("city", value)}
        />
        <Input
          type="text"
          htmlFor="additional-region"
          text="Region"
          name="additional-region"
          value={additionalAddress.region}
          onChange={(value) => handleAddressChange("region", value)}
        />
        <Input
          type="text"
          htmlFor="additional-country"
          text="Country"
          name="additional-country"
          value={additionalAddress.country}
          onChange={(value) => handleAddressChange("country", value)}
        />
        <Input
          type="text"
          htmlFor="additional-postal-code"
          text="Postal Code"
          name="additional-postal-code"
          value={additionalAddress.postalCode}
          onChange={(value) => handleAddressChange("postalCode", value)}
        />

        <button
          className="primary-btn ml-auto px-8 py-2 rounded-lg"
          onClick={handleSave}
        >
          Save
        </button>
      </form>
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
