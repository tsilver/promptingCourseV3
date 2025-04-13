import React, { useState } from 'react';

interface PromptTesterProps {
  lessonContext: string;
  initialPrompt?: string;
  placeholder?: string;
}

const PromptTester: React.FC<PromptTesterProps> = ({ 
  lessonContext, 
  initialPrompt = '', 
  placeholder = 'Enter your prompt here...' 
}) => {
  const [prompt, setPrompt] = useState(initialPrompt);
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [promptHistory, setPromptHistory] = useState<{prompt: string, response: string}[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!prompt.trim()) {
      setError('Please enter a prompt');
      return;
    }
    
    setIsLoading(true);
    setError('');
    
    try {
      const response = await fetch('/api/generate-response', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt,
          context: lessonContext
        }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to generate response');
      }
      
      const data = await response.json();
      setResponse(data.response);
      
      // Add to history
      setPromptHistory(prev => [...prev, {
        prompt,
        response: data.response
      }]);
      
    } catch (err) {
      setError('Failed to get a response. Please try again.');
      console.error('Error submitting prompt:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 my-6">
      <h3 className="text-lg font-bold mb-4">Interactive Prompt Tester</h3>
      <p className="mb-4 text-sm text-gray-600">
        This is a safe environment to practice your prompting skills. Try crafting a prompt based on what you've learned.
        Your prompt and the response will be saved for your reference and to help improve this course.
      </p>
      
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-4">
          <textarea
            className="w-full p-3 border border-gray-300 rounded-md"
            rows={4}
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder={placeholder}
          />
        </div>
        
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isLoading}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:bg-blue-300"
          >
            {isLoading ? 'Generating...' : 'Submit Prompt'}
          </button>
        </div>
      </form>
      
      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
          {error}
        </div>
      )}
      
      {response && (
        <div className="mb-4">
          <h4 className="font-bold mb-2">Response:</h4>
          <div className="p-4 bg-gray-100 rounded-md whitespace-pre-wrap">
            {response}
          </div>
        </div>
      )}
      
      {promptHistory.length > 0 && (
        <div className="mt-6">
          <h4 className="font-bold mb-2">Your Prompt History:</h4>
          <div className="max-h-60 overflow-y-auto">
            {promptHistory.map((item, index) => (
              <div key={index} className="mb-3 p-3 bg-gray-50 rounded-md">
                <div className="font-medium">Prompt {index + 1}:</div>
                <div className="text-sm mb-2">{item.prompt}</div>
                <div className="font-medium">Response:</div>
                <div className="text-sm text-gray-700">{item.response}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PromptTester; 