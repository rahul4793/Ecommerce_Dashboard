# Deployed Frontend URL 
https://ecommerce-dashboard-black.vercel.app/

# Deployed Backend URL 
https://ecommerce-dashboard-sabw.onrender.com/api/products?month=May

# Transactions Dashboard Application

This project is a **Transactions Dashboard** built with a **React frontend** and a **Node.js backend**. It allows users to view, search, and analyze transaction data, providing insights through statistics and interactive charts.

## Tech Stack

### Frontend:
- **React.js**: A JavaScript library for building user interfaces, used to create dynamic components and manage the state of the application.
- **CSS**: Used for styling the frontend components to make the dashboard user-friendly and responsive.
- **Chart.js**: A JavaScript charting library used to create the bar and pie charts for visualizing transaction data.
  
### Backend:
- **Node.js**: JavaScript runtime for the backend, handling API requests.
- **Express.js**: A web framework for Node.js to build RESTful APIs and serve data to the frontend.
- **MongoDB**: A NoSQL database used to store transaction data. MongoDB's flexible document model allows easy querying and filtering.

## Features
- **Transactions Table**: Displays transaction data, with the ability to search by title, description, price, and category. Pagination is supported.
- **Charts**: Displays Bar and Pie charts based on transactions for the selected month.
- **Transactions Statistics**: Shows key statistics like the total number of transactions, total sales, etc.
- **Search and Pagination**: Allows users to search and navigate through pages of transactions.

## Getting Started

### Prerequisites
Before running the project, ensure you have the following installed:
- **Node.js** (v16 or higher): [Download Node.js](https://nodejs.org/en/)
- **MongoDB**: [Install MongoDB](https://www.mongodb.com/try/download/community) or use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for a cloud-based database.

### To run it locally

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/transactions-dashboard.git
   cd transactions-dashboard
2. **To run the backend**:
   ```bash
   cd backend
   npm install
   npm start

   Change the db url in index.js folder in home directory of backend folder
   The backend will be running at http://localhost:5000

2. **To run the frontend**:
    ```bash
    cd frontend
    npm install
    npm start

    The frontend will be running at http://localhost:3000

### API Endpoints for backend testing
**Intialize database**
GET http://localhost:5000/api/initialize

**Get Products**:
 ```bash
GET "http://localhost:5000/api/products?month=March&search=Laptop&sold=true&page=1&perPage=10"
GET http://localhost:5000/api/combinedata?month=May
GET http://localhost:5000/api/statistics?month=May

Query Parameters:
month: The month for which to fetch the transactions (e.g., January, February, etc.)
search: (Optional) Search query for filtering by title, description, or price.
sold: (Optional) Filter by transaction status (true or false).
page: (Optional) Pagination - Page number (default is 1).
perPage: (Optional) Pagination - Number of results per page (default is 10).
Example Request:

Sample URL
GET /products?month=March&search=Laptop&sold=true&page=1&perPage=10


