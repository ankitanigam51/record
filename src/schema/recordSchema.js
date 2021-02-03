import sequelize from "sequelize";
import db from "../config/dbconnection";

const salesRecord = db.define(
  "salesRecord",
  {
    Region: {
      type: sequelize.STRING,
    },
    Country: {
      type: sequelize.STRING,
    },
    "Item Type": {
      type: sequelize.STRING,
    },
    "Sales Channel": {
      type: sequelize.STRING,
    },
    "Order Priority": {
      type: sequelize.STRING,
    },
    "Order Date": {
      type: sequelize.DATE,
    },
    "Order ID": {
      type: sequelize.STRING,
    },
    "Ship Date": {
      type: sequelize.DATE,
    },
    "Units Sold": {
      type: sequelize.FLOAT,
    },
    "Unit Price": {
      type: sequelize.FLOAT,
    },
    "Unit Cost": {
      type: sequelize.FLOAT,
    },
    "Total Revenue": {
      type: sequelize.FLOAT,
    },
    "Total Cost": {
      type: sequelize.FLOAT,
    },
    "Total Profit": {
      type: sequelize.FLOAT,
    },
  },
  {
    timestamp: true,
  }
);

salesRecord.sync();
export default salesRecord;