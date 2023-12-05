import React from "react";
import Logo from "../assets/Logo";
function Footer() {
  return (
    <footer className="flex flex-col  py-8 px-20 bg-neutral-3 w-full gap-x-5 text-primary">
      <div className="">
        <Logo></Logo>
        {/* <p className="text-justify pt-3">
          Welcome to HiddenPages, your literary escape into worlds untold. At
          HiddenPages, we believe in the transformative power of books — the
          kind that opens minds, sparks imaginations, and transports readers to
          places they've never dreamed. Our curated collection is a treasure
          trove of hidden gems, waiting to be discovered by avid readers and
          casual explorers alike.
        </p> */}
      </div>

      <ul className="flex gap-x-20">
        <li className="flex flex-col">
          <h6>Pages</h6>
          <a href="">Home</a>
          <a href="">Collections </a>
          <a href="">Community</a>
          <a href="">About Us</a>
          <a href=""></a>
        </li>
        <li className="flex flex-col">
          <h6>Customer Support</h6>
          <a href="">Contact Us</a>
          <a href="">FAQs </a>
          <a href="">Terms of Service</a>
          <a href="">Privacy Policy</a>
        </li>
        <li className="flex flex-col">
          <h6>My Account</h6>
          <a href="">Sign In / Register</a>
          <a href="">My Cart </a>
          <a href="">My Favorites</a>
        </li>
        <li className="flex flex-col">
          <h6>Social</h6>
          <a href="">Facebook</a>
          <a href="">Twitter</a>
          <a href="">Instagram</a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
