import React, { useState, useEffect } from "react";
import { Category } from "../Category";
import { List, Item } from "./styles";
import  {initialState}  from '../../initialState'
const ListOfCategories = () => {
  const [categories, setCategories] = useState(initialState)
  
  useEffect(() =>{
    fetch('https://makrom25.github.io/api-del-proyecto-de-react/api/db.json')
      .then(response => response.json)
      .then(data => {
        setCategories(data)
      })
  }, [])
  
  return (
    <List>
      {initialState.categories.map((category) => (
        <Item key={category.id}>
          <Category {...category} />
        </Item>
      ))}
    </List>
  );
};
export { ListOfCategories };
