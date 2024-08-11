import React, { useState } from 'react';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [unit, setUnit] = useState('');
  const [category, setCategory] = useState('');
  const [expiryDate, setExpiryDate] = useState('');

  const addItem = () => {
    if (itemName && quantity > 0 && unit && category && expiryDate) {
      const newItem = { name: itemName, quantity, unit, category, expiryDate };
      setItems([...items, newItem]);
      setItemName('');
      setQuantity(0);
      setUnit('');
      setCategory('');
      setExpiryDate('');
    }
  };

  const removeItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  return (
    <div className="App">
      <h1>Pantry Manager</h1>
      <div className="input-section">
        <input
          type="text"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          placeholder="Item Name"
        />
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          placeholder="Quantity"
        />
        <input
          type="text"
          value={unit}
          onChange={(e) => setUnit(e.target.value)}
          placeholder="Unit (e.g., kg, liters)"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="custom-select"
        >
          <option value="" disabled>Select Category</option>
          <option value="Grains">Grains</option>
          <option value="Vegetables">Vegetables</option>
          <option value="Fruits">Fruits</option>
          <option value="Dairy">Dairy</option>
          <option value="Spices">Spices</option>
        </select>
        <input
          type="date"
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)}
          placeholder="Expiry Date"
        />
        <div>
          <button onClick={addItem}>Add Item</button>
        </div>
      </div>
      <div className="items-list">
        <h2>Current Pantry Items</h2>
        {items.length === 0 ? (
          <p>Pantry is empty.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Item Name</th>
                <th>Quantity</th>
                <th>Unit</th>
                <th>Category</th>
                <th>Expiry Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>{item.unit}</td>
                  <td>{item.category}</td>
                  <td>{new Date(item.expiryDate).toLocaleDateString()}</td>
                  <td>
                    <button onClick={() => removeItem(index)}>Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default App;
