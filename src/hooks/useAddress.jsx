import { useEffect, useState } from "react";
import axios from "axios";
import { baseURL } from "../config/data";
import { success, failed } from "../config/statusNotif.js";
export const useAddress = (userId) => {
  const [defaultAddress, setDefaultAddress] = useState({
    street: "",
    city: "",
    region: "",
    country: "",
    postalCode: "",
  });
  const [additionalAddress, setAdditionalAddress] = useState({
    street: "",
    city: "",
    region: "",
    country: "",
    postalCode: "",
  });

  useEffect(() => {
    const fetchAddress = async () => {
      try {
        const res = await axios.get(`${baseURL}/profile/${userId}/address`);
        setAdditionalAddress(res.data.address);
        setDefaultAddress(res.data.defaultAddress);
      } catch (error) {
        console.error("Error fetching address:", error);
      }
    };

    fetchAddress();
  }, [userId]);

  const handleDefaultAddressChange = (name, value) => {
    setDefaultAddress({
      ...defaultAddress,
      [name]: value,
    });
  };

  const handleAddressChange = (name, value) => {
    setAdditionalAddress({
      ...additionalAddress,
      [name]: value,
    });
  };

  const handleSave = async (e, toUpdate) => {
    e.preventDefault();
    try {
      if (toUpdate === "default") {
        const res = await axios.patch(
          `${baseURL}/profile/${userId}/default`,
          defaultAddress
        );
        success("Address Updated");

        console.log(res);
      } else {
        const res = await axios.patch(
          `${baseURL}/profile/${userId}/additional`,
          additionalAddress
        );
      }
    } catch (error) {
      console.error("Error updating addresses:", error);
      failed("Failed to Update Address");
    }
  };

  return {
    defaultAddress,
    additionalAddress,
    handleDefaultAddressChange,
    handleAddressChange,
    handleSave,
  };
};
