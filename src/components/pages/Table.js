import { Container } from "react-bootstrap";
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getTableId } from '../../redux/tableRedux'
import Instructions from "../views/Instructions";
import TableForm from "../features/TableForm";

const Table = () => {

  const { id }  = useParams();
  const table = useSelector(state => getTableId(state, parseInt(id)));
  
  return(
    <Container>
       <h2 className="mx-3">Table {table.id} </h2>
      <TableForm />
      <Instructions />
    </Container>
  )
}

export default Table;