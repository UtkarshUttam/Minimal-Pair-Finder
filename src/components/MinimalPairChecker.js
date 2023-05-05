import React from "react";
import { Button, Form } from "react-bootstrap";

class MinimalPairFinder extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      paragraph: "",
      minimalPairs: [],
    };

    this.handleParagraphChange = this.handleParagraphChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getMinimalPairs = this.getMinimalPairs.bind(this);
  }

  handleParagraphChange(event) {
    this.setState({ paragraph: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    // Split the paragraph into words
    const words = this.state.paragraph.split(/\s+/);

    // Find the minimal pairs in the words
    const minimalPairs = this.getMinimalPairs(words);

    // Update the state with the minimal pairs
    this.setState({ minimalPairs: minimalPairs });
  }

  getMinimalPairs(words) {
    // Find all the minimal pairs in the given array of words
    const minimalPairs = [];

    for (let i = 0; i < words.length; i++) {
      for (let j = i + 1; j < words.length; j++) {
        if (this.areWordsMinimalPair(words[i], words[j])) {
          minimalPairs.push([words[i], words[j]]);
        }
      }
    }

    return minimalPairs;
  }
  handleClearClick = () => {
    // console.log("Uppercase was clicked"+text);
    let newText = "";
    this.setState({paragraph:newText});
    // props.showAlert("Text cleared!", "success");
  };

  areWordsMinimalPair(word1, word2) {
    // Determine if the two words are a minimal pair
    // You can implement your own logic here based on the rules of Hindi minimal pairs
    // This is just an example implementation that checks if the length of the two words is the same
    // return word1.length === word2.length;
    if (word1.length !== word2.length || word1.length < 4) {
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
  }

  render() {
    return (
      <div className="container">
        <h1 className="text-center display-1">Minimal Pair Finder</h1>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="formBasicParagraph">
            <Form.Label className="display-5">
              Enter a Hindi paragraph:
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
          <button
            className="btn btn-danger mx-2 my-1"
            onClick={this.handleClearClick}
          >
            Clear text
          </button>
        </Form>
        {this.state.minimalPairs.length > 0 ? (
          <div>
            <h4>Minimal Pairs:</h4>
            <ul>
              {this.state.minimalPairs.map((pair, index) => (
                <li key={index}>
                  {pair[0]} and {pair[1]}
                </li>
              ))}
            </ul>
          </div>
        ) : this.state.paragraph.length>0 ?<p>OOPS!! No Minimal Pairs Found.</p>:null}
      </div>
    );
  }
}

export default MinimalPairFinder;
