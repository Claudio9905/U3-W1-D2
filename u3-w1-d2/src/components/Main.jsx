import libraryBooks from "../data/fantasy.json";
import { Container, Row, Col, CardText } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Welcome from "./Welcome";

const Main = () => {
  return (
    <>
      <Container fluid={true}>
        <Row className=" mt-5">
          <div className=" ms-3 mb-5 border-bottom border-1 border-dark">
            <Welcome />
            <p className="fs-3">Cosa vuoi leggere?</p>
          </div>
        </Row>
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
};

export default Main;
