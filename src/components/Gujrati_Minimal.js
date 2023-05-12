import React, { Component } from "react";
import { Container, Form, Button } from "react-bootstrap";

class GujaratiMinimalPairs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paragraph: "",
      minimalPairs: [],
    };
  }

  handleParagraphChange = (event) => {
    this.setState({ paragraph: event.target.value });
  };

  findMinimalPairs = () => {
    const words = this.state.paragraph.split(/[^\u0A80-\u0AFF]+/);
    const minimalPairs = [];
    const alreadyChecked = [];

    words.forEach((word, index) => {
      if (word.length >= 4 && word.length !== word.split('').filter(char => char === word[0]).length) {
        for (let i = index + 1; i < words.length; i++) {
          if (words[i].length >= 4 && words[i].length !== words[i].split('').filter(char => char === words[i][0]).length && !alreadyChecked.includes(i)) {
            let pairsFound = true;
            let differenceCount = 0;
            for (let j = 0; j < word.length; j++) {
              if (word[j] !== words[i][j]) {
                differenceCount++;
                if (differenceCount > 1) {
                  pairsFound = false;
                  break;
                }
              }
              if (j === word.length - 1 && pairsFound && differenceCount === 1) {
                minimalPairs.push([word, words[i]]);
              }
            }
          }
        }
        alreadyChecked.push(index);
      }
    });

    this.setState({ minimalPairs: minimalPairs });
  };

  render() {
    return (
      <Container>
        <h1>Gujarati Minimal Pairs Finder</h1>
        <Form>
          <Form.Group controlId="formParagraph">
            <Form.Label>Enter a Gujarati Paragraph:</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              value={this.state.paragraph}
              onChange={this.handleParagraphChange}
            />
          </Form.Group>
          <Button variant="primary" onClick={this.findMinimalPairs}>
            Find Minimal Pairs
          </Button>
        </Form>
        <hr />
        <h2>Minimal Pairs:</h2>
        <ul>
          {this.state.minimalPairs.map((pair, index) => (
            <li key={index}>{`${pair[0]} - ${pair[1]}`}</li>
          ))}
        </ul>
      </Container>
    );
  }
}

export default GujaratiMinimalPairs;
