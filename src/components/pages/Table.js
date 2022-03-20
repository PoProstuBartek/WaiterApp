import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getTableId, updateTableData } from '../../redux/tableRedux'
import { useNavigate } from 'react-router-dom';
import shortid from 'shortid';

const Table = () => {

  const { id }  = useParams();
  const table = useSelector(state => getTableId(state, parseInt(id)));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [status, setStatus] = useState(table.status);
  const [peopleAmount, setPeopleAmount] = useState(table.peopleAmount);
  const [maxPeopleAmount, setMaxPeopleAmount] = useState(table.maxPeopleAmount);
  const [bill, setBill] = useState(table.bill);
  const statusNames = ["Busy", "Cleaning", "Free", "Reserved"];
  const inactiveStatuses = statusNames.filter(statusName => statusName !== status);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateTableData({status, peopleAmount, maxPeopleAmount, bill, id }))
    navigate("/")
  }
  
  return(
    <Container>
       <h2 className="mx-3">Table {table.id} </h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <div className="d-flex mx-3 my-4 w-25">
            <Form.Label className="m-2 fw-bold">Status:</Form.Label>
              <Form.Select onChange={e => setStatus(e.target.value)}>
                <option value={status}>
                  {status}
                </option>
                {
                  inactiveStatuses.map(statusName => (
                    <option key={shortid()} value={statusName}>
                      {statusName}
                    </option>
                  ))
                }
              </Form.Select>
            </div>
          </Form.Group>
          <Form.Group>
          <div className="d-flex mx-3 my-4 w-25">
              <Form.Label className="m-2 fw-bold">People:</Form.Label>
              <Form.Control className="text-center"
                type="text" 
                value={peopleAmount} 
                onChange={e => setPeopleAmount(e.target.value)} 
              />
              <span className="m-2">/</span> 
              <Form.Control className="text-center"
                type="text" 
                value={maxPeopleAmount} 
                onChange={e => setMaxPeopleAmount(e.target.value)} 
              />
            </div>
          </Form.Group>
          <Form.Group>
            <div className="d-flex mx-3 my-4 w-25">
              <Form.Label className="m-2 fw-bold">Bill:</Form.Label>
              <span className="m-2">$</span>
              <Form.Control className="w-25" 
                type="text"
                value={bill}
                onChange={e => setBill(e.target.value)}
              />
            </div>
          </Form.Group>      
          <Button variant="primary" type="submit" className="m-3">Update</Button>
      </Form>
    </Container>
  )
}

export default Table;