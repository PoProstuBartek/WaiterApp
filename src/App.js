import { Route, Routes } from "react-router";
import { Container } from "react-bootstrap";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import Table from "./components/pages/Table";
import Header from "./components/views/Header";
import Footer from "./components/views/Footer";
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchTables } from './redux/tableRedux';
import NewTable from "./components/pages/NewTable";

const App = () => {

  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchTables()), [dispatch]);

  return (
    <main>
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/table/:id" element={<Table />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/newTable" element={<NewTable />} />
        </Routes>
        <Footer />
      </Container>
    </main>
  );
}

export default App;