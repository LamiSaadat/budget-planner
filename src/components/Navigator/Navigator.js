import React from "react";
import "./Navigator.scss";

export default function Navigator() {
  return (
    <div className="tabs">
      <h2 className="tabs__tab">Income</h2>
      <h2 className="tabs__tab">Expenses</h2>
      <h2 className="tabs__tab">Savings</h2>
    </div>
  );
}
