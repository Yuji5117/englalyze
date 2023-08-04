import React from "react";

interface FormProps {
  analyzeSentence: any;
  handleChange: any;
  isLoading: boolean;
}

const Form = ({ analyzeSentence, handleChange, isLoading }: FormProps) => {
  return (
    <form onSubmit={(e) => analyzeSentence(e)}>
      <textarea
        className="w-full p-2 mb-4 border rounded-md shadow-sm resize-none"
        rows={5}
        onChange={handleChange}
        disabled={isLoading}
      ></textarea>
      <button
        disabled={isLoading}
        className={`w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600" ${
          isLoading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"
        }`}
      >
        Analyze
      </button>
    </form>
  );
};

export default Form;
