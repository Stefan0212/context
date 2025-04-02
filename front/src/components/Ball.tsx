interface BallProps {
    letter: string;
  }
  
  function Ball({ letter }: BallProps) {
    return (
      <div
        style={{
          width: "50px",
          height: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          backgroundColor: "red",
          color: "white",
          fontSize: "24px",
          fontWeight: "bold",
          margin: "5px",
        }}
      >
        {letter}
      </div>
    );
  }
  
  export default Ball;
  