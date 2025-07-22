import Alert from "react-bootstrap/Alert";

const Welcome = () => {
  return (
    <>
      {["light"].map((variant) => (
        <Alert key={variant} variant={variant} className="w-50 shadow-lg fs-1">
          Benvenuto in <span className=" text-dark">Epi-Library</span>
        </Alert>
      ))}
    </>
  );
};

export default Welcome;
