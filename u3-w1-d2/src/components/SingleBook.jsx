import Card from "react-bootstrap/Card";

const SingleBook = (props) => {
  // questa componente dovrà visualizzare la card di un singolo libro, principlamente l'immagine di copertina e il titolo, passati tramite l'uso delle props

  return (
    <>
      <Card className=" rounded-5 bg-dark" id="singleCard">
        <Card.Img
          variant="top"
          src={props.img}
          className="img-fluid"
          id="img-singleBook"
        />
        <Card.Body className="d-flex flex-column align-items-center text-light border-top border-1">
          <Card.Title className=" p-3" id="title-singleBook">
            {props.title}
          </Card.Title>
        </Card.Body>
      </Card>
    </>
  );
};

export default SingleBook;
