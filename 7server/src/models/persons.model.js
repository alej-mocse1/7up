const { Model, DataTypes } = require("sequelize");
// const { DEPARTMENT_TABLE } = require("./departments.model");

const PERSON_TABLE = "persons";

class Person extends Model {
  static config(sequelize) {
    return { 
      sequelize,
      tableName: PERSON_TABLE,
      modelName: "Person",
      timestamps: false,
    };
  }
}

const PersonSchema = {

  id: {
        allowNull: true,
        autoIncrement: true, // Auto-incremental
        primaryKey: true, // Clave primaria
        type: DataTypes.INTEGER, // Tipo entero
      },

  name: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "name",
  },

  lastName: {
    allowNull: true,
    type: DataTypes.STRING,
    field: "phone", 
  },

  tel: {
    allowNull: true,
    type: DataTypes.STRING,
    field: "phone", 
  },

  email: {  
    allowNull: false,
    type: DataTypes.STRING,
    field: "email",
    validate: {
      isEmail: true,
    },
  },

  confirmEmail: {  
    allowNull: true,
    type: DataTypes.BOOLEAN,
    field: "confrimEmail",
  },

  totalPoints: {  
    allowNull: true,
    type: DataTypes.INTEGER,
    field: "totalPoints",
  },

};

module.exports = { Person, PersonSchema, PERSON_TABLE };