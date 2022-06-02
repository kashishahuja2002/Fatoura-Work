import './App.css';
// import Login from './components/auth/Login';
import Signup from './components/auth/Signup';

let dummyData = [
    {"abc@abc.com": "abc"}, 
    {"xyz@xyz.com": "xyz"}
];

function App() {
    return (
        <Signup dummyData={dummyData} />
        // {/* <Login dummyData={dummyData} /> */}
    );
}

export default App;
