import { useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import RecycledItems from './RecycledItems';
import RecycledItemForm from './RecycledItemForm';

function App() {

  const [items, setItems] = useState([]);

  const getRecycledItems = () => {
    axios.get('http://localhost:5000/recycled-items')
    .then((res) => setItems(res.data))
    .catch((err) => console.warn(err))
  };

  const postItems = (newItem) => {
    axios.post('http://localhost:5000/recycled-items/add', newItem)
      .then((res) => {
        setItems(prevItems => [...prevItems, res.data])
      })
      .catch((err) => console.warn(err))
  };

  const deleteItem = (itemId) => {
    axios.delete(`http://localhost:5000/recycled-items/${itemId}`)
      .then((res) => {
        setItems(prevItems => prevItems.filter(item => item._id !== itemId))
      })
      .catch((err) => console.warn(err))
  };

  const editItem = (updates, itemId) => {
    axios.put(`http://localhost:5000/recycled-items/${itemId}`, updates)
      .then((res) => {
        console.log(res.data)
        setItems((prevItems) => prevItems.map((item) => item._id !== itemId ? item : res.data))
      })
      .catch((err) => console.warn(err))
  };
  
  useEffect( () => {
    getRecycledItems();
  }, []); 

  const recycled = items.map((stuff) => 
  <RecycledItems 
    deleteThatItem = {deleteItem} 
    edit = {editItem}
    item = {stuff} 
    key = {stuff._id} />);
  
  return (
    <>
      <h1 className = 'header'>Shannons Recycling Company</h1>
      <div className = 'recycled-items'>
        <RecycledItemForm add = {postItems} btnText = 'Add Item'/>
        {recycled}
      </div>
    </>
  );
}

export default App;