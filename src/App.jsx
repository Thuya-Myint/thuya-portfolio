import React, { useRef } from 'react'
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Projects from './components/projects/Projects'

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/project' element={<Projects />} />
            </Routes>
        </Router>



    )
}
export default App
