import {
  InferAttributes,
  InferCreationAttributes,
  DataTypes,
  Model,
  CreationOptional,
} from "sequelize";
import { sequelize } from "../database";

class ProductsModel extends Model<
  InferAttributes<ProductsModel>,
  InferCreationAttributes<ProductsModel>
> {
  declare id: CreationOptional<number>;
  declare name: string;
  declare category: string;
  declare description: CreationOptional<string>;
  declare price: number;
}

ProductsModel.init(
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    name: DataTypes.STRING(50),
    category: DataTypes.STRING(30),
    description: {
      type: DataTypes.STRING,
    },
    price: DataTypes.NUMBER,
  },
  {
    tableName: "products",
    timestamps: false,
    sequelize,
  }
);

export default ProductsModel;
