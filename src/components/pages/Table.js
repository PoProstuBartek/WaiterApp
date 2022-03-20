import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getTableId, updateTableData } from '../../redux/tableRedux'
import { useNavigate } from 'react-router-dom';

const Table = () => {

  const { id }  = useParams();
  const table = useSelector(state => getTableId(state, parseInt(id)));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [status, setStatus] = useState(table.status);
  const [peopleAmount, setPeopleAmount] = useState(table.peopleAmount);
  const [maxPeopleAmount, setMaxPeopleAmount] = useState(table.maxPeopleAmount);
  const [bill, setBill] = useState(table.bill);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateTableData({status, peopleAmount, maxPeopleAmount, bill, id }))
    navigate("/")
  }
  
  return(
    <Container>
       <h2>Table {table.id} </h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Status:</Form.Label>
            <Form.Select onChange={e => setStatus(e.target.value)}>
              <option value={status}>
                {status}
              </option>
            </Form.Select>
          </Form.Group>
          <Form.Group>
            <Form.Label>People:</Form.Label>
            <Form.Control 
              type="number" 
              value={peopleAmount} 
              onChange={e => setPeopleAmount(e.target.value)} 
            />
            / 
            <Form.Control 
              type="text" 
              value={maxPeopleAmount} 
              onChange={e => setMaxPeopleAmount(e.target.value)} 
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Bill:</Form.Label>
            <p className="mx-2">$</p>
            <Form.Control 
              type="text"
              value={bill}
              onChange={e => setBill(e.target.value)}
            />
          </Form.Group>      
          <Button variant="primary" type="submit" className="mt-4">Update</Button>
      </Form>
    </Container>
  )
}

export default Table;