import { Sequelize } from 'sequelize-typescript';
import { databaseConfig } from '../src/config/database';

const sequelize = new Sequelize(databaseConfig)

beforeEach(async () => {
  const tables = sequelize.models;
  for (const model of Object.values(tables)) {
    await model.destroy({ where: {}, truncate: true, cascade: true });
  }
});
