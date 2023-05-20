import React, { Component } from "react";
import { Button, Form, Table } from "react-bootstrap";

class BengaliMinimalPairFinder extends Component {
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

  handleSubmit = (event) => {
    event.preventDefault();

    // Split the paragraph into words
    const words = this.state.paragraph.split(/\s+/);

    // Find the minimal pairs in the words
    const minimalPairs = this.getMinimalPairs(words);

    // Update the state with the minimal pairs
    this.setState({ minimalPairs: minimalPairs });
  };

  removeDuplicates = (array) => {
    const uniqueArray = [];

    array.forEach((pair) => {
      // Check if the current pair already exists in the uniqueArray
      const alreadyExists = uniqueArray.some((uniquePair) => {
        return uniquePair[0] === pair[0] && uniquePair[1] === pair[1];
      });

      if (!alreadyExists) {
        // Add the pair to the uniqueArray
        uniqueArray.push(pair);
      }
    });

    return uniqueArray;
  };

  getMinimalPairs = (words) => {
    // Find all the minimal pairs in the given array of words
    const minimalPairs = [];

    for (let i = 0; i < words.length; i++) {
      for (let j = i + 1; j < words.length; j++) {
        if (this.areWordsMinimalPair(words[i], words[j])) {
          minimalPairs.push([words[i], words[j]]);
        }
      }
    }
    // console.log(minimalPairs);
    return this.removeDuplicates(minimalPairs);
  };

  handleClearClick = () => {
    this.setState({ paragraph: "", minimalPairs: [] });
  };

  areWordsMinimalPair = (word1, word2) => {
    if (word1.length !== word2.length) {
      return false;
    }

    let diffCount = 0;
    for (let i = 0; i < word1.length; i++) {
      const hex1 = word1.charCodeAt(i).toString(16);
      const hex2 = word2.charCodeAt(i).toString(16);
      if (hex1 !== hex2) {
        diffCount++;
      }
    }

    return diffCount === 1;
  };

  render() {
    return (
      <div className="container">
        <h1 className="text-center display-1">Minimal Pair Finder</h1>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="formBasicParagraph">
            <Form.Label className="display-5">
              Enter a Bengali paragraph:
            </Form.Label>
            <Form.Control
              as="textarea"
              rows={8}
              value={this.state.paragraph}
              onChange={this.handleParagraphChange}
            />
          </Form.Group>
          <Button className="my-3" variant="success" type="submit">
            Find Minimal Pairs
          </Button>
          <Button
            className="mx-2 my-1"
            variant="danger"
            onClick={this.handleClearClick}
          >
            Clear Text
          </Button>
        </Form>
        {this.state.minimalPairs.length > 0 ? (
          <div className="container">
            <p>Total Minimal Pairs found: {this.state.minimalPairs.length}</p>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Sr. No.</th>
                  <th>Word 1</th>
                  <th>Word 2</th>
                </tr>
              </thead>
              <tbody>
                {this.state.minimalPairs.map((pair, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{pair[0]}</td>
                    <td>{pair[1]}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        ) : null}
      </div>
    );
  }
}

export default BengaliMinimalPairFinder;
