import React from "react";

export const PulsatingButton = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <button className="bg-purple-600 text-white px-6 py-3 rounded-full animate-pulse hover:bg-purple-700 transition">
      {children}
    </button>
  );
};
