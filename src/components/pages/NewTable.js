import { Container } from "react-bootstrap";
import NewTableForm from "../features/NewTableForm";

const NewTable = () => {
  return( 
    <Container>
      <h2 className="mx-3">Create new table</h2>
      <NewTableForm />
    </Container>
  )
}

export default NewTable;