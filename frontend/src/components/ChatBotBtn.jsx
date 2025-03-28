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
            <button className="bg-white p-4 rounded-full shadow-md border-1 border-indigo-600 hover:bg-indigo-600" onClick={toggleChat}>
                <img src="https://cdn-icons-png.freepik.com/256/4712/4712242.png?semt=ais_hybrid" alt="chatbot" className='h-7 w-7' />
            </button>

            {isChatBotOpen && (
                <div className="absolute right-3 bottom-16 bg-[#FAF9F6] shadow-md rounded-lg w-100 h-125 p-4">
                    <div className='flex justify-between'>
                        <img src="https://cdn-icons-png.freepik.com/256/4712/4712242.png?semt=ais_hybrid" alt="chatbot" className='h-7 w-7' />
                        <h2 className="text-lg font-bold">
                            MediPal
                        </h2>
                        <button className="text-black text-xl  hover:text-red-600 focus:outline-none" onClick={toggleChat}>
                            <X/>
                        </button>
                    </div>
                    <div className="mt-2">
                        <div className="flex justify-around absolute bottom-5 w-[90%] align-middle">
                            <input type="text" placeholder='Ask something?' className='w-[85%] p-2 shadow-md rounded-2xl border-none' />
                            <button>
                                <img src="https://cdn-icons-png.flaticon.com/128/6532/6532019.png" alt="send button" className="h-6 w-6 my-auto" />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChatBotBtn;