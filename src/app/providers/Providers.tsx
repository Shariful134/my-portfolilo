"use client";

import React from "react";
import UserProviders from "../context/UserContext";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <UserProviders>{children}</UserProviders>;
};

export default Providers;
