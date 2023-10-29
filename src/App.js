import React, { useState } from "react";
import "./App.css";

const Data = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com" },
  { id: 4, name: "Alice Brown", email: "alice@example.com" },
  { id: 5, name: "Charlie Davis", email: "charlie@example.com" },
  { id: 6, name: "Eva Wilson", email: "eva@example.com" },
  { id: 7, name: "Frank White", email: "frank@example.com" },
  { id: 8, name: "Grace Miller", email: "grace@example.com" },
  { id: 9, name: "Henry Clark", email: "henry@example.com" },
  { id: 10, name: "Isabel Adams", email: "isabel@example.com" },
  { id: 11, name: "koma Doe", email: "komal@example.com" },
  { id: 12, name: "neha Smith", email: "neha@example.com" },
  { id: 13, name: "sneha Johnson", email: "sneha@example.com" },
  { id: 14, name: "Anjali Brown", email: "anjali@example.com" },
  { id: 15, name: "Chinu Davis", email: "chinu@example.com" },
  { id: 16, name: "Elvish Wilson", email: "elvish@example.com" },
  { id: 17, name: "Frahan White", email: "frahan@example.com" },
  { id: 18, name: "Gauri Miller", email: "gauri@example.com" },
  { id: 19, name: "Hena Clark", email: "hena@example.com" },
  { id: 20, name: "Ishani Adams", email: "ishani@example.com" },
];

const itemsPerPage = 8; // Number of items to display per page

export default function App() {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Get the data for the current page
  const currentData = Data.slice(startIndex, endIndex);

  const totalPages = Math.ceil(Data.length / itemsPerPage);

  const changePage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Create an array of page numbers from 1 to totalPages
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((d, i) => (
            <tr key={i}>
              <td>{d.id}</td>
              <td>{d.name}</td>
              <td>{d.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button onClick={() => changePage(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </button>
        {pageNumbers.map((page) => (
          <button key={page} onClick={() => changePage(page)}>
            {page}
          </button>
        ))}
        <button onClick={() => changePage(currentPage + 1)} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
}
