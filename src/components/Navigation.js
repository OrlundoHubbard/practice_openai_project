import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.css";

function ListExample() {
  return (
    <Nav defaultActiveKey="/home" as="ul">
      <Nav.Item as="li">
        <Nav.Link href="product-description">Product Description</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href="cold-emails">Cold Emails</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href="tweets">Tweet</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default ListExample;
