import React, { useState } from "react";
import "./scss/styles.scss";
import Header from "./components/Header";
import Main from "./components/Main/Main";
import Menu from "./components/Menu/Menu";

function App() {
  const [valueTitle, setValueTitle] = useState("");
  const [valueType, setValueType] = useState("");
  const [valueByType, setValueByType] = useState([]);
  const [valueByBrand, setValueByBrand] = useState([]);
  const [valueByRatings, setValueByRatings] = useState("");
  const [valueByPricesStart, setValueByPricesStart] = useState("");
  const [valueByPricesEnd, setValueByPricesEnd] = useState("");

  const handleTitle = (title) => {
    setValueTitle(title);
  };

  const handleType = (type) => {
    setValueType(type);
  };

  const handleByType = (byType) => {
    setValueByType(byType);
  };

  const handleByBrand = (byBrand) => {
    setValueByBrand(byBrand);
  };

  const handleByRatings = (byRating) => {
    setValueByRatings(byRating);
  };

  const handleByPrices = (start, end) => {
    setValueByPricesStart(start);
    setValueByPricesEnd(end);
  };

  const handleClearAllFilter = () => {
    setValueTitle("");
    setValueType("");
    setValueByType([]);
    setValueByBrand([]);
    setValueByRatings("");
    setValueByPricesStart("");
    setValueByPricesEnd("");
  };

  return (
    <div>
      <Header />
      <div>
        <Menu
          handleTitle={handleTitle}
          handleType={handleType}
          handleByType={handleByType}
          handleByBrand={handleByBrand}
          handleByRatings={handleByRatings}
          handleByPrices={handleByPrices}
          handleClearAllFilter={handleClearAllFilter}
          valueByBrand={valueByBrand}
          valueByPricesEnd={valueByPricesEnd}
          valueByPricesStart={valueByPricesStart}
          valueByRatings={valueByRatings}
          valueByType={valueByType}
          valueTitle={valueTitle}
          valueType={valueType}
        />
        <Main
          valueTitle={valueTitle}
          valueType={valueType}
          valueByType={valueByType}
          valueByBrand={valueByBrand}
          valueByRatings={valueByRatings}
          valueByPricesStart={valueByPricesStart}
          valueByPricesEnd={valueByPricesEnd}
        />
      </div>
    </div>
  );
}

export default App;
