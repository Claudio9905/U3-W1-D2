import Alert from "react-bootstrap/Alert";

const Welcome = (props) => {
  const colorBg = {
    fontWeight: props.weight,
  };

  return (
    <>
      {["light"].map((variant) => (
        <Alert key={variant} variant={variant} className="w-50 shadow-lg fs-1">
          Benvenuto in <span style={colorBg}>Epi-Library</span>
        </Alert>
      ))}
    </>
  );
};

export default Welcome;
