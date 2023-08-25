import React, { useEffect, useState } from 'react';

const Deploy: React.FC = () => {
    const [ws, setWs] = useState<WebSocket | null>(null);
    const [logs, setLogs] = useState<string[]>([]); // State to store logs

    const appendLog = (message: string) => {
        setLogs((prevLogs) => [...prevLogs, message]);
    };

    useEffect(() => {
        const websocket = new WebSocket('ws://127.0.0.1:8000/ws/trade/');
        setWs(websocket);

        websocket.onmessage = (e) => {
            const data = JSON.parse(e.data);
            console.log(data);
            // Here, update your component's state with the new data
        };

        websocket.onerror = (event) => {
            appendLog("WebSocket Error: " + (event && (event as any).data ? (event as any).data : "Unknown error"));
        };

        return () => {
            if (websocket) {
                websocket.close();
            }
        };
    }, []);

    return (
        <div>
            <h1>Deploy</h1>
            <h2>Status: idle</h2>

            <h3>Logs:</h3>
            <ul>
                {logs.map((log, index) => (
                    <li key={index}>{log}</li>
                ))}
            </ul>
        </div>
    );
};

export default Deploy;
