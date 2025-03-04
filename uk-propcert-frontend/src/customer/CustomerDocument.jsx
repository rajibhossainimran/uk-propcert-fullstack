import React, { useState } from 'react';
import { FaFilePdf, FaSearch, FaDownload } from 'react-icons/fa';
import PropTypes from 'prop-types';

const CustomerDocument = ({ documents }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Sample document data structure
  const sampleDocuments = [
    {
      id: 1,
      type: 'EPC',
      title: 'Energy Performance Certificate',
      status: 'Valid',
      issueDate: '2023-01-15',
      expiryDate: '2033-01-15',
      downloadLink: '#'
    },
    {
      id: 2,
      type: 'EICR',
      title: 'Electrical Installation Condition Report',
      status: 'Expired',
      issueDate: '2022-06-01',
      expiryDate: '2023-06-01',
      downloadLink: '#'
    }
  ];

  const filteredDocuments = (documents || sampleDocuments).filter(doc =>
    doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doc.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'valid': return 'bg-green-100 text-green-800';
      case 'expired': return 'bg-red-100 text-red-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleDownload = (e, link) => {
    e.preventDefault();
    // Add download logic here
    console.log('Downloading:', link);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Your Property Documents</h1>
        
        <div className="relative max-w-md">
          <input
            type="text"
            placeholder="Search documents..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDocuments.map((doc) => (
          <div key={doc.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <FaFilePdf className="text-red-500 mr-3 text-2xl" />
              <h2 className="text-xl font-semibold">{doc.type}</h2>
            </div>
            
            <div className="mb-4">
              <h3 className="text-gray-900 font-medium">{doc.title}</h3>
              <p className="text-sm text-gray-500 mt-1">
                Issued: {new Date(doc.issueDate).toLocaleDateString()}
              </p>
              <p className="text-sm text-gray-500">
                Expires: {new Date(doc.expiryDate).toLocaleDateString()}
              </p>
            </div>

            <div className="flex items-center justify-between">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(doc.status)}`}>
                {doc.status}
              </span>
              <button
                onClick={(e) => handleDownload(e, doc.downloadLink)}
                className="flex items-center text-blue-600 hover:text-blue-800"
              >
                <FaDownload className="mr-2" />
                Download
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredDocuments.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No documents found matching your search</p>
        </div>
      )}
    </div>
  );
};

CustomerDocument.propTypes = {
  documents: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      issueDate: PropTypes.string.isRequired,
      expiryDate: PropTypes.string.isRequired,
      downloadLink: PropTypes.string.isRequired
    })
  )
};

export default CustomerDocument;