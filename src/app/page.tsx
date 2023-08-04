"use client";
import Form from "@/components/Form";
import ResultContainer from "@/components/ResultContainer";
import ResultContext from "@/components/ResultContext";
import { ANALYZE_SENTENCE_PROPMT, TRANSLATOR_PROPMT } from "@/config/const";
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
      prompt: ANALYZE_SENTENCE_PROPMT,
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
          <Form
            analyzeSentence={analyzeSentence}
            handleChange={handleChange}
            isLoading={isLoading}
          />
        </div>
        {result && (
          <ResultContainer>
            {result.split("- ").map((context: string, index: number) => (
              <div key={index}>
                <ResultContext index={index} context={context} />
              </div>
            ))}
          </ResultContainer>
        )}
      </div>
    </main>
  );
}
