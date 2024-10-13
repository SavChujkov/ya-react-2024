import React, { useState } from 'react';
import Mainpage from '../mainpage/Mainpage';
import { getIngredientsAction } from '../../services/actions';
import { useDispatch } from 'react-redux';


const apiUrl = "https://norma.nomoreparties.space/api/ingredients"
//1 replace hardcoded data with api data
function App() {


  const apiUrl = "https://norma.nomoreparties.space/api/ingredients"
  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(getIngredientsAction(apiUrl))
  }, [])


  //useEffect -> get ingredients -> to useState
  //api_data to BurgerIngredient and BurgerConstructor
  return (
    <Mainpage />
  );
}

export default App;
