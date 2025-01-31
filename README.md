# Price Tracker Backend

Price Tracker is a system that allows users to track product prices across multiple supermarkets. This backend provides a GraphQL API built with **Apollo Server**, **Prisma**, and **PostgreSQL**.

## Features

- Supermarkets management (with geolocation)
- Products management
- Price tracking with historical data
- GraphQL API

## Technologies Used

- **Node.js** - Runtime for JavaScript
- **TypeScript** - Strongly typed JavaScript
- **Apollo Server** - GraphQL API framework
- **Prisma** - ORM for PostgreSQL
- **PostgreSQL** - Relational database
- **Docker** - Containerized database environment

## Installation

1. Clone the repository

   ```
   git clone https://github.com/zanderlan-n/price-tracker-backend
   cd price-tracker-backend
   ```

2. Install dependencies

   ```
   npm install
   ```

3. Set up the environment variables

   ```
   cp .env.example .env
   ```

   Edit the `.env` file and set your database connection string.

4. Run the database migrations

   ```
   npx prisma migrate dev
   ```

5. Start the backend server

   ```
   npm run dev
   ```

6. Open GraphQL Playground

   ```
   http://localhost:4000
   ```

## API Endpoints

The GraphQL API exposes the following operations:

### Queries

- `products`: Fetch all products
- `supermarkets`: Fetch all supermarkets
- `prices`: Fetch price history for products

### Mutations

- `addProduct(name, barcode)`: Add a new product
- `addSupermarket(name, location)`: Add a new supermarket
- `addPrice(productId, supermarketId, price)`: Register a product price at a supermarket

## License

This project is licensed under the MIT License.
