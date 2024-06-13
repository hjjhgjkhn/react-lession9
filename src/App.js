import './App.css';
import {React, useEffect, useState} from 'react' 
import axios from 'axios';
import VuongStudentList from './components/VuongStudentList';

function App() {

  const [VuongStudentList, setVuongStudentList]=useState([]);
  const vuongGetStudent = async () => {
    try {
      const response = await axios.get("https://666a537e7013419182cedff3.mockapi.io/bstreactapi");
      setVuongStudentList(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    vuongGetStudent();
  }, []);

  return (
    <div className="container border mt-5 p-3">
      <h1 className="text-center my-3">xu ly chuc nang hook api </h1>
      <hr/>
      <VuongStudentList renderVuongStudentList = {VuongStudentList}/>
    </div>
  );
}

export default App;
