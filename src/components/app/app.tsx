import React, { useState } from 'react';
import logo from './logo.svg';
import appModule from "app.module.css"
import Mainpage from '../mainpage/Mainpage';
import { get } from 'http';


//1 replace hardcoded data with api data
function App() {


  const apiUrl = "https://norma.nomoreparties.space/api/ingredients"
  const [ingredientsData, setIngredientsData] = React.useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  //const [isError,setIsError] = useState(false)

  const getApiData = async () => {
    setIsLoading(true)

    try {
      const res = await fetch(apiUrl);
      if (!res.ok) {
        throw new Error(`Ошибка запроса ингридиентов - ${res.status}`)
      }

      const data = await res.json();

      setTimeout(() => {
        setIngredientsData(data.data)
        setIsLoading(false)
      }, 500)
    }
    catch {
      setIsError(true)
    }
  }

  React.useEffect(() => {
    getApiData()
  }, [])


  //useEffect -> get ingredients -> to useState
  //api_data to BurgerIngredient and BurgerConstructor
  return (
    <Mainpage isLoading={isLoading} isError={isError} ingredientsData={ingredientsData} />
  );
}

export default App;
