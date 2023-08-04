import React from "react";

interface ResultContainerPorps {
  children: React.ReactNode;
}

const ResultContainer = ({ children }: ResultContainerPorps) => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100">
      <div className="p-5 m-5">{children}</div>
    </div>
  );
};

export default ResultContainer;
