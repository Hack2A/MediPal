import React from 'react';
import {X} from 'lucide-react';

import { useState } from 'react';

const ChatBotBtn = () => {
    const [isChatBotOpen, setIsChatBotOpen] = useState(false);

    const toggleChat = () => {
        setIsChatBotOpen(!isChatBotOpen);
    };

    return (
        <div className="fixed bottom-4 right-4">
            <button className="bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none" onClick={toggleChat}>
                Chat
            </button>

            {isChatBotOpen && (
                <div className="absolute right-3 bottom-16 bg-[#FAF9F6] shadow-md rounded-lg w-100 h-125 p-4">
                    <div className='flex justify-between'>
                        <h2 className="text-lg font-bold">
                            MediPal
                        </h2>
                        <button className="text-black text-xl  hover:text-red-600 focus:outline-none" onClick={toggleChat}>
                            <X/>
                        </button>
                    </div>
                    <div className="mt-2">
                        <p>
                            Welcome to the ChatBot
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChatBotBtn;