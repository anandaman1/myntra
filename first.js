import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Card from "./src/card";
import Header from "./src/header";
import Footer from "./src/footer";
import items from "./src/utils/items";

function App() {
  const [sortedItems, setSortedItems] = useState(items);
  const [activeSort, setActiveSort] = useState(null);

  const handleSort = (type) => {
    if (type === activeSort) {
      setSortedItems(items); // Reset to original
      setActiveSort(null);
    } else {
      const sorted = [...items].sort((a, b) =>
        type === "low" ? a.price - b.price : b.price - a.price
      );
      setSortedItems(sorted);
      setActiveSort(type);
    }
  };

  return (
    <>
      <Header onSort={handleSort} />
      <div
        className="middle"
        style={{
          display: "flex",
          gap: "5px",
          flexWrap: "wrap",
          paddingInline: "30px",
        }}
      >
        {sortedItems.map((value, index) => (
          <Card
            key={index}
            cloth={value.cloth}
            offer={value.offer}
            price={value.price}
          />
        ))}
      </div>
      <Footer />
    </>
  );
}

const duck1 = ReactDOM.createRoot(document.getElementById("duck"));
duck1.render(<App />);
