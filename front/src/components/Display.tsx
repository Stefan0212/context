// Display.tsx
import { useContext } from "react";
import { LetterCtx } from "../contexts/LetterCtx";
import Ball from "../components/ball";

const displayStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexWrap: "wrap",
  marginTop: "20px",
  padding: "20px",
  backgroundColor: "#222",
  color: "white",
  borderRadius: "10px",
  minHeight: "80px",
  border: "1opx"
};

function Display() {
  const { input } = useContext(LetterCtx);

  return (
    <div style={displayStyle}>
      {input ? (
        input.split("").map((char, index) => <Ball key={index} letter={char} />)
      ) : (
        <span>Sem entrada</span>
      )}
    </div>
  );
}

export default Display;