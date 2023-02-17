import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from './components/auth/Auth';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import HomeContainer from './components/HomeContainer';
import Dashboard from './components/pages/Dashboard';
import Documents from './components/pages/Documents';
import Reports from './components/pages/Reports';
import CreateEdit from './components/pages/CreateEdit';
import View from './components/pages/View';
import Profile from './components/Profile/Profile';
import Subscription from './components/Profile/Subscription';
import Help from './components/Profile/Help';
import { useState } from 'react';
import SubscribePlan from './components/auth/SubscribePlan';

function App() {
    const token = localStorage.getItem('token');
    const [isAuthenticated, setAuthenticated] = useState(token);
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/auth/" element={<Auth />}>
                    <Route path="signup" element={<Signup isAuthenticated={isAuthenticated} setAuthenticated={setAuthenticated} />} />
                    <Route path="login" element={<Login isAuthenticated={isAuthenticated} setAuthenticated={setAuthenticated} />} />
                    <Route path="subscribe-plan" element={<SubscribePlan />} />
                </Route>
            </Routes>
            <Routes>
                <Route path="/pages/" element={<HomeContainer setAuthenticated={setAuthenticated} />}>
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="myInvoices" element={<Documents />} />
                    <Route path="myReports" element={<Reports />} />
                    <Route path="createEdit" element={<CreateEdit />} />
                    <Route path="view" element={<View />} />
                </Route>
            </Routes>
            <Routes>
                <Route path="/profile/" element={<HomeContainer setAuthenticated={setAuthenticated} />}>
                    <Route index element={<Profile />} />
                    <Route path="subscription" element={<Subscription />} />
                    <Route path="help" element={<Help />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
