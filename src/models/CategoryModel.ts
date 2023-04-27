import {
  InferAttributes,
  InferCreationAttributes,
  DataTypes,
  Model,
  CreationOptional,
} from "sequelize";
import { sequelize } from "../database";

class CategoryModel extends Model<
  InferAttributes<CategoryModel>,
  InferCreationAttributes<CategoryModel>
> {
  declare id: CreationOptional<number>;
  declare name: string;
  declare category: string;
  declare description: string;
  declare price: number;
}

CategoryModel.init(
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    name: DataTypes.STRING(50),
    category: DataTypes.STRING(30),
    description: DataTypes.STRING,
    price: DataTypes.NUMBER,
  },
  {
    tableName: "category",
    timestamps: false,
    sequelize,
  }
);
