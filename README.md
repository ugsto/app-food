# App-Food

App-Food is a powerful application providing APIs for managing food ordering operations such as category creation, product listing, order placement and more.

## Getting Started

### Prerequisites

To run this project, you will need:
- Docker and Docker Compose installed on your machine.
- Optionally, Node.js and Yarn if you want to run the app outside Docker.

### Environment Variables

The application requires a MongoDB instance, but if you use Docker Compose, this is handled for you. If you are not using Docker Compose, the address of your MongoDB instance should be specified through the environment variable `MONGODB_HOST`.

You can create a `.env` file in the root of the project with the following variable:

```bash
MONGODB_HOST=Your_MongoDB_Host
```

## Setup and Running

### Recommended: With Docker Compose

Build and start the application using Docker Compose:

```bash
docker-compose up -d
```

This is the recommended way of running App-Food as it will also set up a MongoDB instance for you, all tied together in a neat Docker package.

### Alternatively: With Node.js and TypeScript

First, install the project dependencies:

```bash
yarn
```

Build the TypeScript source:

```bash
yarn build
```

Start the application:

```bash
yarn start:dev
```

### Alternatively: With Docker

Build the Docker image:

```bash
docker build . -t app-food:latest
```

Run the Docker container:

```bash
docker run -d -p 3000:3000 app-food
```

## API Endpoints

| Method | Endpoint                                       | Description                       |
| ------ | ---------------------------------------------- | --------------------------------- |
| GET    | `/categories`                                  | List all categories               |
| POST   | `/categories`                                  | Create a new category             |
| GET    | `/products`                                    | List all products                 |
| POST   | `/products`                                    | Create a new product              |
| GET    | `/categories/:categoryId/products`             | List products by category         |
| GET    | `/orders`                                      | List all orders                   |
| POST   | `/orders`                                      | Create a new order                |
| PATCH  | `/orders/:orderId`                             | Change order status               |
| DELETE | `/orders/:orderId`                             | Delete/cancel order               |

## Examples

Create a new category:

```bash
curl -XPOST -H 'Content-Type: application/json' -d '{"name": "pizza", "icon": "🍕"}' localhost:3000/categories
```

Create a new product:

```bash
curl -X POST -H "Content-Type: multipart/form-data" \
-F "image=@path_to_your_image_file" \
-F "name=Margherita" \
-F "description=Classic Margherita Pizza" \
-F "price=12.50" \
-F 'ingredients=[{"name":"Tomato","icon":"🍅"},{"name":"Mozzarella","icon":"🧀"}]' \
-F "category=your_category_id" \
localhost:3000/products
```

Create a new order:

```bash
curl -X POST -H 'Content-Type: application/json' \
-d '{
  "table": "Table 4",
  "products": [
    {"product": "your_first_category_id", "quantity": 2},
    {"product": "your_second_category_id", "quantity": 1}
  ]
}' \
localhost:3000/orders
```

Enjoy using App-Food!
