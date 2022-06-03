import './App.css';
import HomeContainer from './components/pages/HomeContainer'
// import Login from './components/auth/Login'

let dummyData = [
    {"abc@abc.com": "abc"}, 
    {"xyz@xyz.com": "xyz"}
];

function App() {
    return (
        <HomeContainer />
        // {/* <Login /> */}
    );
}

export default App;
