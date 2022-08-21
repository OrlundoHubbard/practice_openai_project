import React from "react";
import { Component } from "react";
import Display from "./Display";
import { Container, Row, Col } from "react-bootstrap";

class Home extends Component {
  render() {
    return (
      <div>
        <Container>
          <h1>This is the Home Page</h1>
          <Row>
            <Col>
              <Display
                header="Product Descrptions"
                title="Generate Product Descriptions"
                text="blah blah blha"
                theLink="/product-description"
                button="Product"
              />
            </Col>
            <Col>
              <Display
                header="cold emails"
                title="Generate emails"
                text="blah blah blha"
                theLink="/cold-emails"
                button="Emails"
              />
            </Col>
            <Col>
              <Display
                header="tweets"
                title="Generate tweets"
                text="blah blah blha"
                theLink="/tweets"
                button="tweets"
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Home;
