import React, { useEffect, useRef, useState } from "react";
import './Challenge_2.css';

function Stopwatch(){

    const [isRunning, setIsRunning] = useState(false);
    const [remainingTime, setRemainingTime] = useState(0);
    const [inputVisible, setInputVisible] = useState(true); // 상태 추가
    const [inputHours, setInputHours] = useState(0);
    const [inputMinutes, setInputMinutes] = useState(0);
    const [inputSeconds, setInputSeconds] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {

        if(isRunning){
            intervalIdRef.current = setInterval(() => {
                const currentTime = Date.now();
                const timeElapsed = currentTime - startTimeRef.current;
                setRemainingTime(Math.max(0, remainingTime - timeElapsed));
                startTimeRef.current = currentTime;
            },10);
        }

        return() => {
            clearInterval(intervalIdRef.current);
        }

    }, [isRunning, remainingTime]);

    function start(){
        setIsRunning(true);
        setInputVisible(false); // 숨김
        const inputTime = inputHours * 3600000 + inputMinutes * 60000 + inputSeconds * 1000;
        setRemainingTime(inputTime);
        startTimeRef.current = Date.now();
    }

    function stop(){
        setIsRunning(false);
    }

    function reset(){
        setRemainingTime(0);
        setIsRunning(false);
        setInputVisible(true); // 보임
    }

    function formatTime(){
        let hours = Math.floor(remainingTime / (1000*60*60));
        let minutes = Math.floor(remainingTime / (1000*60) % 60);
        let seconds = Math.floor(remainingTime / 1000 % 60);
        
        return `${hours}:${minutes}:${seconds}`;
    }

    return (
    <div className="stopwatch">
        <div className="controls">
            {inputVisible && ( 
                <>
                    <input type="number" value={inputHours} onChange={(e) => setInputHours(parseInt(e.target.value))} className="time-input"/> :
                    <input type="number" value={inputMinutes} onChange={(e) => setInputMinutes(parseInt(e.target.value))} className="time-input"/> :
                    <input type="number" value={inputSeconds} onChange={(e) => setInputSeconds(parseInt(e.target.value))} className="time-input"/>
                </>
            )}
        </div>
        <div className="timer">
            <div className="display">{formatTime()}</div>
            <div className="controls">
                <button onClick={start} className="start-button">Start</button>
                <button onClick={stop} className="stop-button">Stop</button>
                <button onClick={reset} className="reset-button">Reset</button>
            </div>
        </div>
    </div>
    );
}

export default Stopwatch;
