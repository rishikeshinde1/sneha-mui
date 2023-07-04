import "./App.css";
import Navigation from "./components/Navigation";

import "bootstrap/dist/css/bootstrap.min.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//pages
import Home from "./pages/Home";
import Products from "./pages/Products";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import About from "./pages/About.Jsx";
function App() {
  return (
    <>
      <Navigation />

      <Home />

      <Container>
        <Row>
          <Col>
            <About />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <Products />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <Testimonials />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <Contact />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
