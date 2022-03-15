import { Route, Routes } from "react-router";
import { Container } from "react-bootstrap";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import Table from "./components/pages/Table";

const App = () => {
  return (
    <main>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/table/tableId" element={<Table />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </main>
  );
}

export default App;
