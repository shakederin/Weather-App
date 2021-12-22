import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
function App() {
  const data = useSelector(state=>state);
  const dispatch = useDispatch();
  const inputValue = useRef(null);

  const displayData = () =>{
    const info = data.map((city)=>{
      return <p>{city.data.name} {city.data.main.temp}</p>
    })
    return info
  }

  const Search = () =>{
    dispatch({type: "SEARCH_CITY", city: inputValue.current.value})
  }

  return (
    <div className="App">
        {/* <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>City</Form.Label>
          <Form.Control type="test" placeholder="Enter City" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Sreach
        </Button> */}
      <input ref={inputValue}/>
      {/* // <Button onClick={Search} variant="danger">Search</Button> <Button variant="info">Info</Button> */}
      <button onClick={Search}>Search</button>
      <p>{displayData()}</p>
    </div>
  );
}

export default App;
