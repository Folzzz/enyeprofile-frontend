import React from 'react'

const Filter = ({ genderSort, payMethod, genderFilter, payFilter }) => {
    // setting gender value
    const genderSelection = (event) => {
        console.log(event.target.value);
        // setSelectGender(event.target.value)
        genderFilter(event.target.value)
    }

    // setting pay value
    const paySelection = (event) => {
        payFilter(event.target.value)
    }


    return (
        <div className="filter">
            <h4>Filter by: </h4>
            <div className="filter-section">
                <div className="gender-sort">
                    Gender {' '}
                    {/* <select value={genderSort} onChange={genderFilter}> */}
                    <select value={genderSort} onChange={genderSelection}>
                        <option value="">ALL</option>
                        <option value="Male">MALE</option>
                        <option value="Female">FEMALE</option>
                        <option value="Prefer to skip">PREFER TO SKIP</option>
                    </select>
                </div>
                <div className="pay-sort">
                    Payment Method {' '}
                    <select value= {payMethod} onChange={paySelection}>
                        <option value="">ALL</option>
                        <option value="money order">MONEY ORDER</option>
                        <option value="paypal">PAYPAL</option>
                        <option value="check">CHECK</option>
                        <option value="cc">CC</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Filter
