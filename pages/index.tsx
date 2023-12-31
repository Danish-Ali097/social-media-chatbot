import { useState } from 'react';


export default function Home() {
  const [userMessage, setUserMessage] = useState('');
  const [chatResponse, setChatResponse] = useState('');

  const handleUserMessageChange = (e: any) => {
    setUserMessage(e.target.value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMessage }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const responseData = await response.json();
      setChatResponse(responseData.message);
    } catch (error) {
      console.error('Error fetching chat response:', error);
    }
  };

  return (
    <div className={`min-h-screen p-24`}>
      <h1 className={`text-2xl text-center mb-5`}>DIPLOMAT VOICE</h1>
      <form onSubmit={handleSubmit} className={`form`}>
        <div className="mt-8 max-w-md">
          <div className="grid grid-cols-1 gap-6">
            <label className="block">
              <span className="text-gray-700">Ask a question:</span>
              <input type="text" className="mt-1 block w-full" value={userMessage} onChange={handleUserMessageChange} />
            </label>
          </div>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3" type="submit">Submit</button>
      </form>
      {chatResponse && (
        <div className={`pt-5 card card-body`}>
          <p>{chatResponse}</p>
        </div>
      )}
    </div>
  );
}
