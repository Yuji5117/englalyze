"use client";

import axios from "axios";
import { useState } from "react";

const endpoint = process.env.NEXT_PUBLIC_API_ENDPOINT as string;
export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [sentence, setSentence] = useState<string>("");
  const [answer, setAnswer] = useState<string>("");

  const analyzeSentence = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);

    const res = await axios.post(
      endpoint,
      {
        sentence,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    setAnswer(res.data.message);

    setIsLoading(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSentence(e.target.value);
  };

  const message = answer.split("- ").map((line: string, index: number) => {
    if (index === 0) return;

    const test = line.split(":");

    return (
      <div
        key={index}
        className="w-full max-w-2xl p-5 m-5 bg-white rounded shadow-md h-auto"
      >
        <p className="text-lg text-gray-700 border-b border-gray-300">
          {test[0]}
        </p>
        <p className="text-lg text-gray-700 pt-4">{test[1]}</p>
      </div>
    );
  });

  return (
    <main className="">
      <div className="m-8 max-w-[800px] mx-auto">
        <h1 className="text-4xl font-bold mb-4">Analyze Sentence</h1>
        <div className="border p-8 bg-gray-100 rounded-lg shadow-md">
          <form onSubmit={(e) => analyzeSentence(e)}>
            <textarea
              className="w-full p-2 mb-4 border rounded-md shadow-sm resize-none"
              rows={5}
              onChange={handleChange}
            ></textarea>
            <button
              disabled={isLoading}
              className={`w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600" ${
                isLoading
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-blue-600"
              }`}
            >
              Analyze
            </button>
          </form>
        </div>
        <div className="flex flex-col items-center justify-center bg-gray-100">
          <div className="p-5 m-5">{message}</div>
        </div>
      </div>
    </main>
  );
}
