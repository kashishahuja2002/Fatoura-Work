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

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/auth/" element={<Auth />}>
                    <Route path="signup" element={<Signup />} />
                    <Route path="login" element={<Login />} />
                </Route>
            </Routes>
            <Routes>
                <Route path="/pages/" element={<HomeContainer />}>
                    <Route index path="dashboard" element={<Dashboard />} />
                    <Route path="myInvoices" element={<Documents />} />
                    <Route path="myReports" element={<Reports />} />
                    <Route path="create-edit" element={<CreateEdit />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
