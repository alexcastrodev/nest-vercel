/* eslint-disable prettier/prettier */
import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class User extends Model {
  @Column
  fullName: string;

  @Column
  phoneNumber: string

  @Column
  email: string;
}
