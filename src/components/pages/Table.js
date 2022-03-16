import { Container, Form, Row, Col } from "react-bootstrap";

const Table = () => {

  return(
    <Container>
       <h2>Table X</h2>
      <Form>
        <Row>
          <Col><h4>Status:</h4></Col>
          <Col>
            <Form.Select>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </Form.Select>
          </Col>
        </Row>
        <Row>
          <Col><h4>People:</h4></Col>
          <Col><Row><Form.Control type="number" /> / <Form.Control type="number" /></Row></Col>
        </Row>
        <Row>
          <Col><h4>Bill:</h4></Col>
          <Col><Row>$<Form.Control type="number" /></Row></Col>
        </Row>
      </Form>
    </Container>
  )
}

export default Table;