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
}

CategoryModel.init(
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    name: DataTypes.STRING(50),
  },
  {
    tableName: "category",
    timestamps: false,
    sequelize,
  }
);

export default CategoryModel;
