// import {
//   Badge,
//   Button,
//   Card,
//   Image,
//   List,
//   message,
//   Rate,
//   Spin,
//   Typography,
//   Select,
//   Pagination
// } from "antd";



// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import BookCard from './BookCard'
// import '../CSS/Book.css'

// const Books = ({role}) => {


//   const [books, setBooks] = useState([])
//   useEffect(() => {
//     axios.get('http://localhost:3001/book/books')
//     .then(res => {
//       setBooks(res.data)
//       console.log(res.data)
//     }).catch( err => console.log(err))
//   }, [])



//   const [currentPage, setCurrentPage] = useState(1);
//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

//   return (
//     <div className='book-list'>
//       {
//         // books.map(book => {
//         //  return <BookCard key={book.id} book={book} ></BookCard>
//         // })     // // OR if we write paranthesis after '=>' then we dont need to write return
//         books.map(book => (
//           <BookCard key={book.id} book={book} role={role}></BookCard>
//         ))


//       }

      
//       <Pagination
//         current={currentPage}
//         total={items.length}
//         pageSize={pageSize}
//         onChange={handlePageChange}
//       />
      



//     </div>
//   )
// }

// export default Books









// import {
//   Badge,
//   Button,
//   Card,
//   Image,
//   List,
//   message,
//   Rate,
//   Spin,
//   Typography,
//   Select,
//   Pagination,
//   Row,
//   Col
// } from "antd";

// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import BookCard from './BookCard'
// import '../CSS/Book.css'

// const { Option } = Select;

// const Books = ({ role }) => {
//   const [books, setBooks] = useState([])
//   const [filteredBooks, setFilteredBooks] = useState([]); // For filtered data
//   const [currentPage, setCurrentPage] = useState(1);
//   const [pageSize] = useState(6); // Display 6 books per page
//   const [sortOrder, setSortOrder] = useState('asc'); // Sorting order
//   const [selectedFilter, setSelectedFilter] = useState('all'); // Current filter

//   useEffect(() => {
//     axios.get('http://localhost:3001/book/books')
//       .then(res => {
//         setBooks(res.data);
//         setFilteredBooks(res.data);
//       }).catch(err => console.log(err))
//   }, [])

//   // Handle pagination
//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

//   // Handle sorting
//   const handleSortChange = (value) => {
//     setSortOrder(value);
//     let sortedBooks = [...filteredBooks];
//     sortedBooks.sort((a, b) => {
//       if (value === 'asc') {
//         return a.title.localeCompare(b.title);
//       } else {
//         return b.title.localeCompare(a.title);
//       }
//     });
//     setFilteredBooks(sortedBooks);
//   };

//   // Handle filtering (e.g., by genre, author, etc.)
//   const handleFilterChange = (value) => {
//     setSelectedFilter(value);
//     if (value === 'all') {
//       setFilteredBooks(books); // Show all books
//     } else {
//       const filtered = books.filter(book => book.genre === value); // Assuming books have a 'genre' property
//       setFilteredBooks(filtered);
//     }
//     setCurrentPage(1); // Reset to the first page
//   };

//   // Calculate current books to display on current page
//   const startIndex = (currentPage - 1) * pageSize;
//   const endIndex = startIndex + pageSize;
//   const paginatedBooks = filteredBooks.slice(startIndex, endIndex);

//   return (
//     <div className="book-list">
//       <Row justify="space-between" align="middle" style={{ marginBottom: '16px' }}>
//         {/* Filter Dropdown */}
//         <Col>
//           <Select
//             defaultValue="all"
//             style={{ width: 200 }}
//             onChange={handleFilterChange}
//           >
//             <Option value="all">All Genres</Option>
//             <Option value="fiction">Fiction</Option>
//             <Option value="non-fiction">Non-Fiction</Option>
//             {/* Add more filter options as needed */}
//           </Select>
//         </Col>

//         {/* Sorting Dropdown */}
//         <Col>
//           <Select
//             defaultValue="asc"
//             style={{ width: 200 }}
//             onChange={handleSortChange}
//           >
//             <Option value="asc">Sort: A-Z</Option>
//             <Option value="desc">Sort: Z-A</Option>
//           </Select>
//         </Col>
//       </Row>

//       {/* Book Cards */}
//       <Row gutter={[16, 16]}>
//         {paginatedBooks.map(book => (
//           <Col key={book.id} xs={24} sm={12} md={8}>
//             <BookCard book={book} role={role} />
//           </Col>
//         ))}
//       </Row>

//       {/* Pagination */}
//       <Row justify="center" style={{ marginTop: '16px' }}>
//         <Pagination
//           current={currentPage}
//           total={filteredBooks.length}
//           pageSize={pageSize}
//           onChange={handlePageChange}
//         />
//       </Row>
//     </div>
//   )
// }

// export default Books;











import {
  Badge,
  Button,
  Card,
  Image,
  List,
  message,
  Rate,
  Spin,
  Typography,
  Select,
  Pagination,
  Row,
  Col
} from "antd";

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BookCard from './BookCard';
import '../CSS/Book.css';

const { Option } = Select;

const Books = ({ role }) => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]); // For filtered data
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(6); // Display 6 books per page
  const [sortOrder, setSortOrder] = useState('asc'); // Sorting order
  const [selectedFilter, setSelectedFilter] = useState('all'); // Current filter

  useEffect(() => {
    axios.get('http://localhost:3001/book/books')
      .then(res => {
        setBooks(res.data);
        setFilteredBooks(res.data);
      }).catch(err => console.log(err));
  }, []);

  // Handle pagination
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Handle sorting
  const handleSortChange = (value) => {
    setSortOrder(value);
    let sortedBooks = [...filteredBooks]; // Sort the filteredBooks array
    sortedBooks.sort((a, b) => {
      if (value === 'asc') {
        return a.title.localeCompare(b.title);
      } else {
        return b.title.localeCompare(a.title);
      }
    });
    setFilteredBooks(sortedBooks); // Update the filteredBooks state
  };

  // Handle filtering (e.g., by genre, author, etc.)
  const handleFilterChange = (value) => {
    setSelectedFilter(value);
    if (value === 'all') {
      setFilteredBooks(books); // Show all books
    } else {
      const filtered = books.filter(book => book.genre === value); // Assuming books have a 'genre' property
      setFilteredBooks(filtered);
    }
    setCurrentPage(1); // Reset to the first page
  };

  // Calculate current books to display on current page
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedBooks = filteredBooks.slice(startIndex, endIndex);

  return (
    <div className="book-list">
      <Row justify="space-between" align="middle" style={{ marginBottom: '16px' }}>
        {/* Filter Dropdown */}
        <Col>
          <Select
            defaultValue="all"
            style={{ width: 200 }}
            onChange={handleFilterChange}
          >
            <Option value="all">All Genres</Option>
            <Option value="fiction">Fiction</Option>
            <Option value="non-fiction">Non-Fiction</Option>
            {/* Add more filter options as needed */}
          </Select>
        </Col>

        {/* Sorting Dropdown */}
        <Col>
          <Select
            defaultValue="asc"
            style={{ width: 200 }}
            onChange={handleSortChange}
          >
            <Option value="asc">Sort: A-Z</Option>
            <Option value="desc">Sort: Z-A</Option>
          </Select>
        </Col>
      </Row>

      {/* Book Cards */}
      <Row gutter={[16, 16]}>
        {paginatedBooks.map(book => (
          <Col key={book.id} xs={24} sm={12} md={8}>
            <BookCard book={book} role={role} />
          </Col>
        ))}
      </Row>

      {/* Pagination */}
      <Row justify="center" style={{ marginTop: '16px' }}>
        <Pagination
          current={currentPage}
          total={filteredBooks.length}
          pageSize={pageSize}
          onChange={handlePageChange}
        />
      </Row>
    </div>
  );
};

export default Books;






















