import { DataTypes, Model, ForeignKey } from 'sequelize';
import sequelize from '../dbConfig';
import { LearningPackage } from './LearningPackage';

export class LearningFact extends Model {
  public id!: number;
  public content!: string;
  public disabled!: boolean; // Field to mark the fact as disabled instead of deleting
  public packageId!: ForeignKey<LearningPackage['id']>; // Foreign key reference to LearningPackage

  constructor(init?: Partial<LearningFact>) {
    super();
    Object.assign(this, init);
  }
}

LearningFact.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    disabled: {
      type: DataTypes.BOOLEAN,
      defaultValue: false, // Facts are enabled by default
    },
  },
  {
    sequelize,
    modelName: 'LearningFact',
    tableName: 'learning_facts',
    timestamps: false,
  }
);

// Establish relationship
LearningPackage.hasMany(LearningFact, { foreignKey: 'packageId' });
LearningFact.belongsTo(LearningPackage, { foreignKey: 'packageId' });
