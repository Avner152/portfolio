import Nav from "react-bootstrap/Nav";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function Header() {
  return (
    <div className="navigate">
      <Router>
        <Nav className="justify-content-end" activeKey="/home">
          <Nav.Item>
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#about">about</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#expertise">Expertise</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="experience">Experience</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav.Item>
        </Nav>
      </Router>
    </div>
  );
}

export default Header;
