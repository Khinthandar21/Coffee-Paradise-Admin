import React from "react";
import Linechart from "./Linechart";
import Piechart from "./Piechart";

const Dashboard = () => {
  return (
    <div className="container-fluid">
      <h2 style={{ color: "white", textAlign: "center" }}>Current Sales</h2>
      <div className="row">
        <div className="col-md-8">
          <Linechart />
        </div>
        <div className="col-md-4">
          <Piechart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
