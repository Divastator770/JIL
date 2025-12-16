import React from "react";
import PillNav from "@/components/PillNav";
import logo from "@/img/logo.png";

const Navbar = () => {
  return (
    <div className="w-full flex justify-center items-center px-4 py-4">
      <PillNav 
        logo={logo}
        logoAlt="Company Logo"
        items={[
          { label: "F.A.Q", href: "#faq" },
          { label: "Collaborations", href: "#collabs" },
          { label: "Photos", href: "#photos" },
          { label: "Contact us", href: "/contact" },
        ]}
        activeHref="/"
        className="custom-nav w-full max-w-7xl flex justify-between rounded-full px-6 py-4 border border-white/10"
        ease="power2.easeOut"
        baseColor="#transparent"
        pillColor=""
        hoveredPillTextColor="black"
        pillTextColor="#4A3E31"
      />
    </div>
  );
};

export default Navbar;