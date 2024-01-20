import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          {/* <h1>Mujje Tu Yilibe</h1> */}
          <Outlet />
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
