import React from "react";
import { Component } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";

const { Configuration, OpenAIApi } = require("openai");


class ProductDescription extends Component {
  constructor() {
    super();
    this.state = {
      heading: "The Response from the AI will be shown here",
      response: "....await the repsponse",
    };
  }

  onFormSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target),
      formDataObj = Object.fromEntries(formData.entries());
    console.log(formDataObj.productName);

    this.setState({
      heading: `AI product description suggestions for: ${formDataObj.productName}`,
      response: `The response from OpenAI API will be shown here`,
    });
  };

  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);
  
  openai.createCompletion("text-davinci-001", {
    prompt: `Write a detailed, smart, informative and proffessional product description for ${formDataObj.productName}`,
    temperature: 0.8,
    max_tokens: 100,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  })
  .then((response) => {
    this.setState({
      heading: `AI Product Description suggestions for: ${formDataObj.productName}`,
      response: `${response.data.choices[0].text}`
    })
  });
  
  this.setState({
    heading: `AI product description suggestions for: ${formDataObj.productName}`,
    response: `The response from OPENAI will be shown here`
  })

  render() {
    return (
      <div>
        <Container>
          <h1>This is the Product Description Page</h1>
          <Form onSubmit={this.onFormSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>
                What would you like to get a product description for?
              </Form.Label>
              <Form.Control
                type="text"
                name="productName"
                placeholder="Enter product"
              />
              <Form.Text className="text-muted">
                Enter as much information as possible for more accurate
                descriptions
              </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">
              Get AI suggestions
            </Button>
          </Form>
          <Card className="cardMargin">
            <Card.Body>
              <Card.Title>{this.state.heading}</Card.Title>
              <Card.Text>
                <h4>{this.state.response}</h4>
              </Card.Text>
            </Card.Body>
          </Card>
        </Container>
      </div>
    );
  }
}
export default ProductDescription;
