import libraryBooks from "../data/fantasy.json";
import { Container, Row, Col, CardText } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Welcome from "./Welcome";
import SingleBook from "./SingleBook";
import BookList from "./BookList";
import { Component } from "react";

class Main extends Component {
  state = {
    bookIndex: 0,
    book: libraryBooks[0],
  };

  render() {
    const currentBook = libraryBooks[this.state.bookIndex];
    return (
      <>
        <Container fluid={true}>
          <Row className="mt-5 p-3">
            <div className=" border-bottom border-1 border-dark">
              <Welcome />
              <p className="mt-5 fs-3">Cosa vuoi leggere?</p>
            </div>
          </Row>

          <Row className="border-bottom border-1 border-dark justify-content-center p-5">
            {/* qui verrà inserito il single book visualizzato */}
            <Col
              xs={12}
              md={6}
              lg={4}
              className="p-5 d-flex flex-column align-items-center"
            >
              <div>
                <SingleBook img={currentBook.img} title={currentBook.title} />
              </div>
              <Button
                onClick={() => {
                  const nextBook =
                    (this.state.bookIndex + 1) % libraryBooks.length;

                  this.setState({
                    bookIndex: nextBook,
                  });
                }}
                className=" mt-3 btn-info rounded-5"
                id="btn-singleCard"
              >
                Cambia libro
              </Button>
            </Col>
          </Row>

          {/* <Row>
          <Col>
            <BookList book={libraryBooks} />
          </Col>
        </Row> */}

          <Row className="g-3 p-5 justify-content-center">
            {libraryBooks.map((book) => {
              return (
                <Col xs={12} md={6} lg={3} key={book.asin} className=" p-4">
                  <Card className=" h-100 rounded-5 bg-dark" id="card-book">
                    <Card.Img
                      src={book.img}
                      className="img-fluid"
                      id="img-book"
                    />
                    <Card.Body className="d-flex flex-column align-items-center text-light border-top border-1">
                      <Card.Title className=" p-3" id="title-book">
                        {book.title}
                      </Card.Title>
                      <Card.Text>Category: {book.category}</Card.Text>
                      <CardText>Price: {book.price} $</CardText>
                      <Button className="w-50 btn-info rounded-5" id="btn-card">
                        Buy
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </>
    );
  }
}

export default Main;
