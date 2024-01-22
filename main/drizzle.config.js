export default {
  schema: './src/utils/schema.js',
  driver: 'pg',
  dbCredentials: {
    connectionString: 'postgres://postgres:postgres@localhost:5432/postgres',
  },
  out: './migrations',
};
