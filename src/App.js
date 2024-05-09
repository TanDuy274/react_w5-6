import { Route, Routes } from 'react-router-dom';
import './App.css';
import NotFound from './components/NotFound';
import { default as SignIn } from './components/SignIn';
import SignUp from './components/SignUp';
import Register from './components/Register';
import Watch from './components/Watch';
import UseWatch from './components/UseWatch';

function App() {
  return (
    <>
      <Register />
      {/* watch
      <Watch />
      useWatch
      <UseWatch /> */}
    </>
  );
}

export default App;
