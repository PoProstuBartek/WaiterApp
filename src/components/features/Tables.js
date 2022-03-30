import { Container, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getAllTables } from "../../redux/tableRedux";
import { Link } from "react-router-dom";
import RemoveButton from "./RemoveButton";

const Tables = () => {

  const tables = useSelector(state => getAllTables(state));

  return (
    <Container>
      <div className="d-flex justify-content-between">
        <h1>All tables</h1>
      </div>
        <ul className="list-group list-unstyled">
          {tables.map(table => 
          <li key={table.id} className="d-flex my-3 border-bottom">
            <h2 className="mx-3">Table {table.id}</h2>
            <p className="m-2"><span className="fw-bold ">Status: </span>{table.status}</p>
            <Link className="ms-auto p-2" to={`/table/${table.id}`}>
              <Button variant="primary" >Show more</Button>
            </Link>
            <RemoveButton tableId={table.id}/>
          </li>)}
        </ul>
        <Link className="ms-auto p-2" to={'/newTable'}>
          <Button variant="primary">Create new table</Button>
        </Link>
    </Container>
  )
}

export default Tables;