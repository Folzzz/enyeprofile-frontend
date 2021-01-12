import React from 'react'

import BootstrapTable from 'react-bootstrap-table-next'
import PaginationFactory from 'react-bootstrap-table2-paginator'
import { COLUMNS } from './columns';
  

const Table = ({ tableData }) => {

    const customTotal = (from, to, size) => (
        <span className="react-bootstrap-table-pagination-total">
         {' '} Showing { from } to { to } of { size } Results
        </span>
    );
    
    const options = {
        paginationSize: 20,
        pageStartIndex: 0,
        showTotal: true,
        paginationTotalRenderer: customTotal,
        disablePageTitle: true,
        sizePerPageList: [{
          text: '20', value: 20
        }, {
          text: '25', value: 25
        }, {
          text: 'All', value: tableData.length
        }] 
    }

    return (
        <div style={{overflowX:"auto"}} className="table-wrapper">
            {/* table
            <ul>
                {tableData.map((data, i) => (
                    <li key={i}>{data.FirstName}</li>
                ))}
            </ul> */}

        <BootstrapTable 
        keyField='PhoneNumber' 
        data={ tableData } 
        columns={ COLUMNS } 
        pagination={ PaginationFactory(options) } 
        bordered={ false }
        />
            
        </div>
    )
}

export default Table
