import React from "react";

interface ResultContextProps {
  index: number;
  context: string;
}

const ResultContext = ({ index, context }: ResultContextProps) => {
  if (index === 0) return;

  const [title, content] = context.split(":");

  return (
    <div className="w-full max-w-2xl p-5 m-5 bg-white rounded shadow-md h-auto">
      <p className="text-lg text-gray-700 border-b border-gray-300">{title}</p>
      <p className="text-lg text-gray-700 pt-4">{content}</p>
    </div>
  );
};

export default ResultContext;
