import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getTableId, updateTableData } from '../../redux/tableRedux'
import { useNavigate } from 'react-router-dom';
import shortid from 'shortid';


const TableForm = () => {
  
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

  const statusValidator = (value) => {
    if (value === "Free" || value === "Cleaning"){
      setPeopleAmount(0);
      setBill(0);
    }
    if (value === "Reserved"){
      setPeopleAmount(maxPeopleAmount);
    }
    setStatus(value);
  }

  const maxPeopleValidator = (value) => {
    if (value < 0 || value === ''){
      value = 0;
    }
    if (value > 10 || isNaN(value)){
      value = maxPeopleAmount;
    }
    if (value < peopleAmount){
      value = peopleAmount;
    }
    setMaxPeopleAmount(value);
  }

  const peopleValidator = (value) => {
    if (value < 0 || value === '' || status === "Free" || status === "Cleaning"){
      value = 0;
    }
    if (value >= maxPeopleAmount){
      value = maxPeopleAmount;
    }
    setPeopleAmount(value);
  }

  const billValidator = (value) => {
    if (value < 0 || value === ''){
      value = 0;
    }
    if (isNaN(value)){
      value = bill;
    }
    if (value > 2000){
      value = bill;
    }
    if (status !== "Busy"){
      value = "0"
    }
    setBill(value);
  }

  return(
    <Form onSubmit={handleSubmit}>
        <Form.Group>
          <div className="d-flex mx-3 my-4 w-25">
            <Form.Label className="m-2 fw-bold">Status:</Form.Label>
              <Form.Select onChange={e => statusValidator(e.target.value)}>
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
                type="number" 
                value={peopleAmount} 
                onChange={e => peopleValidator(e.target.value)} 
              />
              <span className="m-2">/</span> 
              <Form.Control className="text-center"
                type="number" 
                value={maxPeopleAmount} 
                onChange={e => maxPeopleValidator(e.target.value)} 
              />
            </div>
          </Form.Group>
          <Form.Group>
            <div className="d-flex mx-3 my-4 w-25">
              <Form.Label className="m-2 fw-bold">Bill:</Form.Label>
              <span className="m-2">$</span>
              <Form.Control className="w-50"
                max="2000"
                type="number"
                value={bill}
                onChange={e => billValidator(e.target.value)}
              />
            </div>
          </Form.Group>      
          <Button variant="primary" type="submit" className="m-3">Update</Button>
      </Form>
  )
}

export default TableForm;