import Footer from "@/components/modules/shared/Footer";
import NavBar from "@/components/modules/shared/NavBar";
import React from "react";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <NavBar></NavBar>
      <main className="min-h-screen">{children}</main>
      <Footer></Footer>
    </div>
  );
};

export default CommonLayout;
