# App-Food Frontend

The App-Food frontend is a user-friendly interface for managing food ordering operations. This application interacts with the App-Food backend API to create categories, list products, place orders, and more.

**Warning:** WIP. This project is still under development.

## Getting Started

### Prerequisites

To run this project, you will need:

-   Node.js installed on your machine.
-   Yarn package manager.
-   A running instance of the App-Food backend (refer to the backend README for setup instructions).

### Environment Variables

Depending on your setup, you may need to set up environment variables such as the API base URL for the App-Food backend. This can be done in a `.env` file in the root of the project.

Example:

```bash
API_URL=http://localhost:3000
```

## Setup and Running

### Installing Dependencies

First, install the project dependencies:

```bash
yarn
```

### Development Mode

To run the application in development mode:

```bash
yarn start:dev
```

### Production Mode

To build the application for production:

```bash
yarn build:prod
```

To run the production build:

```bash
yarn start:prod
```

### Code Formatting and Linting

To format the code using Prettier and ESLint:

```bash
yarn format
```

### Running Tests

To run tests:

```bash
yarn test
```

## Using the Application

The frontend application provides interfaces for the following operations:

-   List all categories
-   Create a new category
-   List all products
-   Create a new product
-   List products by category
-   List all orders
-   Create a new order
-   Change order status
-   Delete/cancel order

Refer to the [backend README](https://github.com/ugsto/app-food/blob/main/crud/README.md) for detailed examples of how to interact with these endpoints.

Enjoy using App-Food frontend!
