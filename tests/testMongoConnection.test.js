import { describe, test, before, after } from 'node:test';
import assert from 'node:assert';
import mongoose from 'mongoose';
import connectDB from '../config/db.js';

describe('Database Suite', () => {

  before(async () => {
    console.log('Connecting to database...');
    await connectDB();
    console.log('Database connected for tests.');
  });

  after(async () => {
    console.log('Closing database connection...');
    await mongoose.connection.close();
  });

  test('should have a valid database connection', () => {
    assert.equal(mongoose.connection.readyState, 1);
  });

});
