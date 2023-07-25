"use client";

import axios from "axios";
import { useEffect, useState } from "react";

const endpoint = process.env.NEXT_PUBLIC_API_ENDPOINT as string;
export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [sentence, setSentence] = useState<string>("");
  const [answer, setAnswer] = useState();

  const analyzeSentence = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);

    console.log("かいし");

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

    console.log("完了");
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSentence(e.target.value);
  };
  return (
    <main className="">
      <div className="m-8 max-w-[800px] mx-auto">
        <h1 className="text-4xl font-bold mb-4">Analyze Script</h1>
        <div className="border p-8 bg-gray-100 rounded-lg shadow-md">
          <form onSubmit={(e) => analyzeSentence(e)}>
            <textarea
              className="w-full p-2 mb-4 border rounded-md shadow-sm resize-none"
              rows={10}
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
        <p>{answer}</p>
      </div>
    </main>
  );
}
