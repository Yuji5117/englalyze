"use client";
import ResultContainer from "@/components/ResultContainer";
import ResultContext from "@/components/ResultContext";
import { apiClient } from "@/libs/axios";
import { useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [sentence, setSentence] = useState<string>("");
  const [result, setResult] = useState<string>("");

  const analyzeSentence = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);

    const res = await apiClient.post("", {
      sentence,
    });

    setResult(res.data.message);

    setIsLoading(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSentence(e.target.value);
  };

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
              disabled={isLoading}
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
        <ResultContainer>
          {result.split("- ").map((context: string, index: number) => (
            <div key={index}>
              <ResultContext index={index} context={context} />
            </div>
          ))}
        </ResultContainer>
      </div>
    </main>
  );
}
