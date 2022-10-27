/* eslint-disable */
import First from './pages/first';
import Second from './pages/second';
import Last from './pages/last';
import { Routes, Route, Link } from 'react-router-dom';
import { useState } from "react";


function App() {
    let [mbti_total, setMbti_total] = useState([]);
    let [prog_now, setProg_now] = useState(0);
    
    return (
    <>
        <Routes>
            <Route path="/" element={ <First mbti_total={mbti_total} setMbti_total={setMbti_total} prog_now={prog_now} setProg_now={setProg_now}/> }/>
            <Route path="/second" element={ <Second mbti_total={mbti_total} setMbti_total={setMbti_total} prog_now={prog_now} setProg_now={setProg_now}/> } />
            <Route path="/last" element={ <Last mbti_total={mbti_total} setMbti_total={setMbti_total} prog_now={prog_now} setProg_now={setProg_now}/> } /> 
        </Routes>
    </>
    );
}

export default App;