// import important parts of sequelize library
const { Model, DataTypes, INTEGER } = require("sequelize");
// import our database connection from config.js
const sequelize = require("../config/connection");

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    product_price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isDecimal: true,
      },
    },
    product_stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: {
        isNumeric: true,
      },
    },
    category_id: {
      // reference the category model's id
      type: DataTypes.INTEGER,
      references: {
        model: "category",
        key: "id",
      },
<<<<<<< HEAD
=======
      category_id: {
        // reference the category model's id
        references: {
          model: "tag",
          key:"id",
        }
      }
>>>>>>> d23b9fea0296455acc3a29b6de64070e008d1f0e
    },
  },
  console.log("Please enter product info"),
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "product",
  }
);

module.exports = Product;
