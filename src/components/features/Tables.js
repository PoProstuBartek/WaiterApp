import { Container, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getAllTables } from "../../redux/tableRedux";
import { Link } from "react-router-dom";

const Tables = () => {

  const tables = useSelector(state => getAllTables(state));

  return (
    <Container>
      <div className="d-flex justify-content-between">
        <h1>All tables</h1>
      </div>
        <ul>
          {tables.map(table => 
          <li key={table.id}>
            <h3>Table {table.id}</h3>
            <p className="ps-4 m-0"><span className="fw-bold">Status: </span>{table.status}</p>
            <Link className="ms-auto p-2" to={`/table/${table.id}`}>
              <Button variant="primary" >Show more</Button>
            </Link>
          </li>)}
        </ul>
      
    </Container>
  )
}

export default Tables;