import { DataTypes, Model } from 'sequelize';
import sequelize from '../dbConfig'; // Import the sequelize instance

// Define the LearningPackage model
export class LearningPackage extends Model {
    public id!: number;                 // Primary Key
    public title!: string;
    public description!: string;
    public category!: string;
    public targetAudience!: string;     // Prerequisite or audience information
    public difficultyLevel!: number;    // Range: 1 to 20

    constructor(init?: Partial<LearningPackage>) {
      super();
      Object.assign(this, init);
    }

}
  
LearningPackage.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      targetAudience: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      difficultyLevel: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize, // Pass the sequelize instance
      modelName: 'LearningPackage', // Model name (corresponds to table name in lowercase plural form)
      tableName: 'learning_packages', // Optional: You can specify the exact table name
      timestamps: false, // Optional: if you don't want Sequelize to manage createdAt/updatedAt columns
    }
  );  