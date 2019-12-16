import React from 'react';
import './App.css';
import { FaHome } from 'react-icons/fa';
import styled from 'styled-components';
function App() {
  return (
    <div>
      <h1>Hello from tech store</h1>
      <FaHome />
      <Button>Hello styled</Button>
    </div>
  );
}
const Button = styled.button`
color:red;
background:blue;
font-size:2rem; `

export default App;
