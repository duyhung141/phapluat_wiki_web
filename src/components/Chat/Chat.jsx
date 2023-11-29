import React, {useState} from 'react';
import TextareaAutosize from 'react-textarea-autosize';

const Chat = () => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const handleInputChange = (event) => {
        setMessage(event.target.value);
    };

    const handleSendMessage = () => {
        if (message.trim() !== '') {
            setMessages([...messages, {text: message, sender: 'user'}]);
            setMessage('');
        }
    };

    return (
        <div className="p-4 sm:ml-64">
            <div className="flex flex-col h-[40rem] overflow-y-auto bg-white border-t border-gray-300">
                {messages.map((msg, index) => (
                    <div
                        key={index}
                        className={`my-1 p-3 border rounded-lg max-w-3xl text-justify ${
                            msg.sender === 'user' ? 'self-end bg-gray-100' : 'self-start bg-gray-600 text-white'
                        }`}
                    >
                        {msg.text}
                    </div>
                ))}
            </div>
            <div className="fixed bottom-0 w-full max-w-6xl">

                <div className="flex items-center justify-between border-t border-gray-300 p-2">
                    <TextareaAutosize
                        className="rounded-lg w-full resize-none focus:outline-none"
                        minRows={1}
                        maxRows={5}
                        value={message}
                        onChange={handleInputChange}
                        placeholder="Nhập tin nhắn..."
                    />
                    <button
                        className="absolute right-5 bottom-3 md:right-3 px-4 py-1 bg-blue-500 text-white rounded-lg"
                        onClick={handleSendMessage}
                    >
                        Gửi
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Chat;
