import React, { useState } from "react";
import * as dateFns from 'date-fns';
import './Challenge_4.css';

const formatOfYear ='yyy';
const formatOfMonth ='MMM';
const formatOfWeek ='eee';
const formatOfDay ='d';

const Calendar = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectDate, setSelectDate] = useState(new Date());
    const [memos, setMemos] = useState({}); 
    const [memo, setMemo] = useState(""); 
    const [isMemoVisible, setIsMemoVisible] = useState(false); 

    const today = new Date();

    const firstDay = dateFns.startOfMonth(currentDate);
    const lastDay = dateFns.lastDayOfMonth(currentDate);
    const startDate = dateFns.startOfWeek(firstDay);
    const endDate = dateFns.lastDayOfWeek(lastDay);
    const totalDate = dateFns.eachDayOfInterval({start:startDate, end: endDate});

    const weeks = (date => {
        const weeks=[];
        for(let i=1; i<8; i++){
            weeks.push(date[i]);
        }
        return weeks;
    })(totalDate);

    const isToday= day => dateFns.isSameDay(day,today);
    const isSelectedDate = day => dateFns.isSameDay(day,selectDate);

    const handleMemoChange = (event) => {
        setMemo(event.target.value);
    };

    const handleDateClick = (date) => {
        setSelectDate(date);
        setIsMemoVisible(true);
        setMemo(memos[date] || '');
    };

    
    const handleMemoSubmit = () => {
        setIsMemoVisible(false);
        setMemos({ ...memos, [selectDate]: memo });
    };

    return (
        <div className="container">
            <div style={{display: 'flex', justifyContent: 'space-around', margin: '1rem 0'}}>
                <button onClick={()=>setCurrentDate(dateFns.subMonths(currentDate,1))}>last</button>
                <div>{dateFns.format(currentDate,formatOfMonth)} {dateFns.format(currentDate, formatOfYear)}</div>
                <button onClick={() => setCurrentDate(dateFns.addMonths(currentDate,1))}>next</button>
            </div>
            <div style={{display: 'grid', gridTemplateColumns:'repeat(7, 1fr)', gap:'1rem' }}>
                {weeks.map(week => (
                    <div>{dateFns.format(week, formatOfWeek)}</div>
                ))}
                {totalDate.map(date => (
                    <div style={{
                        color: !dateFns.isSameMonth(date, currentDate) ? isSelectedDate(date) ? 'blue': (isToday(date) ? 'green': '#ddd') : dateFns.isWeekend(date, currentDate)? 'red': '',
                        border: memos[date] ? '3px solid blue' : '1px solid transparent', 
                        borderRadius: '40px', // 테두리 둥글게 지정
                        }}
                        onClick={() => handleDateClick(date)} 
                    >
                        {dateFns.format(date, formatOfDay)}
                    </div>
                ))}
            </div>
            {isMemoVisible && (
                <div className="memo-container">
                    <textarea
                        value={memo}
                        onChange={handleMemoChange}
                    />
                    <button onClick={handleMemoSubmit}>등록</button>
                </div>
            )}
        </div>
    );    
};

export default Calendar;
