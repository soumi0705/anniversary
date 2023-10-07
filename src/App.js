import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import React, { useState } from "react";
import { page } from "./pages/page";
import { useSwipeable } from "react-swipeable";

function App() {
  const config = {
    delta: 10, // min distance(px) before a swipe starts. *See Notes*
    preventScrollOnSwipe: false, // prevents scroll during swipe (*See Details*)
    trackTouch: true, // track touch input
    trackMouse: false, // track mouse input
    rotationAngle: 0, // set a rotation angle
    swipeDuration: Infinity, // allowable duration of a swipe (ms). *See Notes*
    touchEventOptions: { passive: true }, // options for touch listeners (*See Details*)
  };
  const handlers = useSwipeable({
    onSwipedLeft: () =>
      setPageNumber((pageNumber) =>
        pageNumber < page.length - 1 ? ++pageNumber : pageNumber
      ),
    onSwipedRight: () =>
      setPageNumber((pageNumber) =>
        pageNumber > 0 ? --pageNumber : pageNumber
      ),
    ...config,
  });
  const [pageNumber, setPageNumber] = useState(0);
  return (
    <div
      {...handlers}
      className="App"
      style={{
        backgroundImage: `url('./assets/background.jpg')`,
        backgroundSize: "cover",
        minHeight: "100vh",
      }}
    >
      {page[pageNumber]}
    </div>
  );
}

export default App;
