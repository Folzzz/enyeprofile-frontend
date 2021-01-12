import React, { useState, useEffect } from 'react';
import './App.css';
import Filter from './component/Filter';
import Loader from './component/Loader';
import Table from './component/Table';

function App() {
  const [profiles, setProfiles] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [genderSort, setGenderSort] = useState("")
  const [payMethod, setPayMethod] = useState("")

  const [filteredNames, setFilteredNames] = useState(profiles)
  const [ isLoading, setIsLoading ] = useState(true);


// GENDER FILTER FUNCTION TO SET GENDER SORT VALUE
  const genderFilter = (selectGender) =>    
      setGenderSort(selectGender)

  // pay filter function TO SET PAY OPTION VALUE
  const payFilter = (selectPayMethod) =>    
      setPayMethod(selectPayMethod)
  

  const endPoint = `http://api.enye.tech/v1/challenge/records`
  const getProfile = async() => {
    const response = await fetch(endPoint)
    const data = await response.json()

    const reqData = data.records.profiles
    console.log(reqData);
    setProfiles(reqData)
    setIsLoading(false)
  }

  useEffect(() => {
    getProfile()
  }, [])

  useEffect(() => {
    setFilteredNames(
      profiles.filter(profile => profile.FirstName.toLowerCase().includes(searchTerm.toLowerCase()) )
    )
  }, [searchTerm, profiles])

  useEffect( ()=> {
    setFilteredNames(
      profiles.filter(profile => profile.Gender.includes(genderSort))
    )
  },[genderSort, profiles])

  useEffect( ()=> {
    setFilteredNames(
      profiles.filter(profile => profile.PaymentMethod.includes(payMethod))
    )
  },[payMethod, profiles])

  // const filteredNames = profiles.filter(profile => profile.FirstName.toLowerCase().includes(searchTerm.toLowerCase()) )


  return (
    <div className="App">

      <header className="header">
        <div className="header-div">
          <a href='/'>Enye customer profile</a>
        </div>
      </header>

      <main>

        <div className="search-div">
          <input type="text" placeholder="search profile by firstname..." className="search-bar" required onChange={e => setSearchTerm(e.target.value)} />
        </div>
        
        <Filter 
        genderSort= {genderSort} 
        payMethod= {payMethod} 
        genderFilter = {genderFilter}
        payFilter = {payFilter}
        />

        <div>
          {!isLoading && filteredNames.length === 0 && <h6>No Data Found...</h6> }
          {
            isLoading ?
            <Loader /> :
            <Table tableData={filteredNames}/>
          }
        </div>
        {/* <Table tableData={filteredNames}/> */}

      </main>
    </div>
  );
}

export default App;
