import SingleBook from "./SingleBook";

const BookList = (props) => {
  return (
    <>
      {props.map((book, index) => {
        <SingleBook key={index} book={book} />;
      })}
    </>
  );
};

export default BookList;
