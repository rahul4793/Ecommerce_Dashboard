// import React, { useState, useEffect } from 'react';
// import { getTransactions } from '../api';

// const TransactionsTable = ({ month }) => {
//   const [transactions, setTransactions] = useState([]);
//   const [search, setSearch] = useState('');
//   const [page, setPage] = useState(1);
//   const perPage = 10;

//   useEffect(() => {
//     const fetchTransactions = async () => {
//       const data = await getTransactions(month, search, page, perPage);
//       setTransactions(data);
//     };
//     fetchTransactions();
//   }, [month, search, page]);

//   const handleSearchChange = (e) => {
//     setSearch(e.target.value);
//     setPage(1); // Reset to first page when search changes
//   };

//   const handleNextPage = () => setPage(page + 1);
//   const handlePrevPage = () => setPage(page - 1);

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search by title, description or price"
//         value={search}
//         onChange={handleSearchChange}
//       />
//       <table>
//         <thead>
//           <tr>
//             <th>Title</th>
//             <th>Description</th>
//             <th>Price</th>
//           </tr>
//         </thead>
//         <tbody>
//           {transactions.map((transaction, index) => (
//             <tr key={index}>
//               <td>{transaction.title}</td>
//               <td>{transaction.description}</td>
//               <td>{transaction.price}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <div>
//         <button onClick={handlePrevPage}>Previous</button>
//         <button onClick={handleNextPage}>Next</button>
//       </div>
//     </div>
//   );
// };

// export default TransactionsTable;


import React, { useState, useEffect } from 'react';
import { getTransactions } from '../api';

const TransactionsTable = ({ month }) => {
  const [transactions, setTransactions] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const perPage = 10;

  useEffect(() => {
    const fetchTransactions = async () => {
      const data = await getTransactions(month, search, page, perPage);
      setTransactions(data);
    };
    fetchTransactions();
  }, [month, search, page]);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setPage(1); // to reset page
  };

  const handleNextPage = () => setPage(page + 1);
  const handlePrevPage = () => setPage(page - 1);

  return (
    <div>
      <input
        type="text"
        placeholder="Search by title, description, or price"
        value={search}
        onChange={handleSearchChange}
      />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Category</th>
            <th>Sold</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={transaction.id}>
              <td>{transaction.id}</td>
              <td>{transaction.title}</td>
              <td>{transaction.description}</td>
              <td>{transaction.price}</td>
              <td>{transaction.category}</td>
              <td>{transaction.sold}</td>
              <td>
                {transaction.image ? (
                  <img src={transaction.image} alt="Product" style={{ width: '50px', height: '50px' }} />
                ) : (
                  'No Image'
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button onClick={handlePrevPage}>Previous</button>
        <button onClick={handleNextPage}>Next</button>
      </div>
    </div>
  );
};

export default TransactionsTable;
