"use client";
import Form from "@/components/Form";
import ResultContainer from "@/components/ResultContainer";
import { TRANSLATOR_PROPMT } from "@/config/const";
import { apiClient } from "@/libs/axios";
import { useState } from "react";

export default function Page() {
  const [isLoading, setIsLoading] = useState(false);
  const [sentence, setSentence] = useState<string>("");
  const [result, setResult] = useState<string>("");

  const translateSentence = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);

    const res = await apiClient.post("", {
      sentence,
      prompt: TRANSLATOR_PROPMT,
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
        <h1 className="text-4xl font-bold mb-4">Translator</h1>
        <div className="border p-8 bg-gray-100 rounded-lg shadow-md">
          <Form
            analyzeSentence={translateSentence}
            handleChange={handleChange}
            isLoading={isLoading}
          />
        </div>
        {result && (
          <ResultContainer>
            <div className="w-full max-w-2xl p-5 m-5 bg-white rounded shadow-md h-auto">
              <p className="text-lg text-gray-700">{result}</p>
            </div>
          </ResultContainer>
        )}
      </div>
    </main>
  );
}
