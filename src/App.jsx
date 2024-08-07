import { useState } from 'react';
import './App.css';
import Form from './Form';
import ReactPDF from '@react-pdf/renderer';
import NewForm from './NewForm';
import DownloadButton from './DownloadButton';
// import ReactPDF from "@react-pdf/react-pdf";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Form />
    </div>
  );
}

export default App;
