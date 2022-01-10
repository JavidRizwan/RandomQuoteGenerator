import { useState } from "react";
import { Jumbotron, Button, Row, Col } from "react-bootstrap";

const QuoteBox = () => {
  const [random, setRandom] = useState(0);

  const generateRandom = () => {
    let randomNumber = Math.floor(20 * Math.random());
    setRandom(randomNumber);
  };

  const quotesArray = [
    { quote: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
    {
      quote: "Life is what happens when you’re busy making other plans.",
      author: "John Lennon",
    },
    { quote: "Get busy living or get busy dying.", author: "Stephen King" },
    {
      quote: "You only live once, but if you do it right, once is enough.",
      author: "Mae West",
    },
    {
      quote:
        "Many of life’s failures are people who did not realize how close they were to success when they gave up.",
      author: "Thomas A. Edison",
    },
    {
      quote:
        "If you want to live a happy life, tie it to a goal, not to people or things.",
      author: "Albert Einstein",
    },
    {
      quote:
        "Never let the fear of striking out keep you from playing the game.",
      author: "Babe Ruth",
    },
    {
      quote:
        "Money and success don’t change people; they merely amplify what is already there.",
      author: "Will Smith",
    },
    {
      quote:
        "Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking.",
      author: "Steve Jobs",
    },
    {
      quote: "Not how long, but how well you have lived is the main thing.",
      author: "Seneca",
    },
    {
      quote:
        "If life were predictable it would cease to be life, and be without flavor.",
      author: "Eleanor Roosevelt",
    },
    {
      quote:
        "The whole secret of a successful life is to find out what is one’s destiny to do, and then do it.",
      author: "Henry Ford",
    },
    {
      quote: "In order to write about life first you must live it.",
      author: "Ernest Hemingway",
    },
    {
      quote:
        "The big lesson in life, baby, is never be scared of anyone or anything.",
      author: "Frank Sinatra",
    },
    {
      quote:
        "Sing like no one’s listening, love like you’ve never been hurt, dance like nobody’s watching, and live like it’s heaven on earth.",
      author: "(Attributed to various sources)",
    },
    {
      quote:
        "Curiosity about life in all of its aspects, I think, is still the secret of great creative people.",
      author: "Leo Burnett",
    },
    {
      quote:
        "Life is not a problem to be solved, but a reality to be experienced.",
      author: "Soren Kierkegaard",
    },
    { quote: "The unexamined life is not worth living.", author: "Socrates" },
    { quote: "Turn your wounds into wisdom.", author: "Oprah Winfrey" },
    {
      quote:
        "The way I see it, if you want the rainbow, you gotta put up with the rain.",
      author: "Dolly Parton",
    },
  ];

  let quote = quotesArray[random].quote;
  let author = quotesArray[random].author;

  return (
    <Row>
      <Jumbotron id="quote-box">
        <h3 id="text">{quote}</h3>
        <h4 id="author">- {author}</h4>
        <Row>
          <Col>
            <a
              href={encodeURI(
                `https://twitter.com/intent/tweet?text=${quote} - ${author}`
              )}
              id="tweet-quote"
            >
              <Button className="button">Tweet Quote</Button>
            </a>
          </Col>
          <Col>
            <Button
              className="button"
              onClick={() => generateRandom()}
              id="new-quote"
            >
              New Quote
            </Button>
          </Col>
        </Row>
      </Jumbotron>
    </Row>
  );
};

export default QuoteBox;
