import { useState } from "react";
import jsPDF from "jspdf";
import { useNavigate } from "react-router-dom";
export default function ChatAssistant({
    product,
    brand
}) {
    const [messages, setMessages] = useState([
        {
            sender: "ai",
            text: `🔧 ProductAssist AI Assistant

Product: ${product}
${brand ? `Brand: ${brand}` : ""}

I can help diagnose issues, provide troubleshooting steps, generate reports, and connect you with repair professionals.

What problem are you experiencing today?`
        }
    ]);

    const [input, setInput] = useState("");
    const [lastQuestion, setLastQuestion] =
        useState("");
    const navigate = useNavigate();
    const sendMessage = async () => {
        if (!input.trim()) return;

        const userMessage = {
            sender: "user",
            text: input
        };

        setMessages(prev => [...prev, userMessage]);

        try {
            const response = await fetch(
                "http://127.0.0.1:8000/assistant",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        question: input,
                        product: product,
                        brand: brand
                    })
                }
            );

            const data = await response.json();

            const historyItem = {
                product,
                brand,
                question: input,
                answer: data.answer,
                time: new Date().toLocaleString()
            };

            const existingHistory =
                JSON.parse(
                    localStorage.getItem("history")
                ) || [];

            existingHistory.unshift(historyItem);

            localStorage.setItem(
                "history",
                JSON.stringify(existingHistory)
            );

            setMessages(prev => [
                ...prev,
                {
                    sender: "ai",
                    text: data.answer
                }
            ]);
        } catch (error) {
            setMessages(prev => [
                ...prev,
                {
                    sender: "ai",
                    text: "Backend connection failed."
                }
            ]);
        }
        setLastQuestion(input);
        setInput("");
    };

    const downloadReport = (answer) => {

        const doc = new jsPDF();

        doc.setFontSize(20);
        doc.text("ProductAssist AI Report", 20, 20);

        doc.setFontSize(12);

        doc.text(
            `Product: ${product}`,
            20,
            40
        );

        doc.text(
            `Brand: ${brand || "N/A"}`,
            20,
            50
        );

        doc.text(
            `Issue: ${lastQuestion}`,
            20,
            60
        );

        const lines = doc.splitTextToSize(
            answer,
            170
        );

        doc.text(
            "Diagnosis:",
            20,
            80
        );

        doc.text(
            lines,
            20,
            90
        );

        doc.save(
            "ProductAssist_Report.pdf"
        );
    };

    return (
        <div className="max-w-4xl mx-auto p-6">
            <div className="bg-white shadow rounded-xl p-4 h-[500px] overflow-y-auto">
                {messages.map((msg, index) => (
                    <div
                        key={index}
                        className={`my-3 ${msg.sender === "user"
                            ? "text-right"
                            : "text-left"
                            }`}
                    >
                        <div>

                            <span className="inline-block bg-slate-100 px-4 py-2 rounded-xl">
                                {msg.text}
                            </span>

                            {msg.sender === "ai" &&
                                index !== 0 && (

                                    <div className="mt-2">

                                        <button
                                            onClick={() =>
                                                downloadReport(msg.text)
                                            }
                                            className="text-sm bg-blue-600 text-white px-3 py-1 rounded"
                                        >
                                            📄 Download Report
                                        </button>

                                        <button
                                            onClick={() =>
                                                navigate(
                                                    `/mechanics?product=${encodeURIComponent(product)}`
                                                )
                                            }
                                            className="ml-2 text-sm bg-green-600 text-white px-3 py-1 rounded"
                                        >
                                            🔧 Contact Mechanic
                                        </button>

                                    </div>

                                )}

                        </div>
                    </div>
                ))}
            </div>

            <div className="flex mt-4">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Describe your issue..."
                    className="flex-1 border p-3 rounded-l-xl"
                />

                <button
                    onClick={sendMessage}
                    className="bg-blue-600 text-white px-6 rounded-r-xl"
                >
                    Send
                </button>
            </div>
        </div>
    );
}