import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Button, Form}from 'react-bootstrap';
import InfoCard from './components/InfoCard';
function App() {
  const data = useSelector(state=>state);
  const dispatch = useDispatch();
  const inputValue = useRef(null);

  const displayData = () =>{
    const info = data.map((city)=>{
      console.log(city.data.name);
      return <InfoCard key={city.data.name} data={city.data}/>
    })
    return info
  }

  const Search = () =>{
    dispatch({type: "SEARCH_CITY", city: inputValue.current.value})
    inputValue.current.value =""
  }

  return (
    <div className="App">
      <h1 className="h1" >WhatsTheWeather</h1>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control className="input" ref={inputValue} type="text" placeholder="Enter City" />
          </Form.Group>      
            <Button className="button" onClick={Search} variant="primary">Search</Button>
      {displayData()}
    </div>
  );
}

export default App;
