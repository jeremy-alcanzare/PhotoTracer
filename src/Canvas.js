import React, { useEffect, useRef } from "react";
import { Button, Container, Row } from "react-bootstrap";

export default function Canvas(props) {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth * 2;
    canvas.height = window.innerHeight * 2;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;

    const context = canvas.getContext("2d");
    context.scale(2, 2);
    context.lineCap = "round";
    context.strokeStyle = "black";
    context.lineWidth = 1;
    contextRef.current = context;
  }, []);

  function clearCanvas() {
    contextRef.current.clearRect(
      0,
      0,
      window.innerWidth * 2,
      window.innerHeight * 2
    );
    console.log("asdf");
  }

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    props.setIsDrawing(true);
  };

  const finishDrawing = () => {
    contextRef.current.closePath();
    props.setIsDrawing(false);
  };

  const draw = ({ nativeEvent }) => {
    if (!props.isDrawing) {
      return;
    }
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
  };

  return (
    <Container className="mt-1">
      <Row>
        <Button className="mx-auto" onClick={clearCanvas}>
          Clear
        </Button>
      </Row>
      <canvas
        className="Canvas"
        onMouseDown={startDrawing}
        onMouseUp={finishDrawing}
        onMouseMove={draw}
        ref={canvasRef}
      />
    </Container>
  );
}
