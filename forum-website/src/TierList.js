import React, { useState } from 'react';
import axios from 'axios';
import './TierList.css';

const TierList = () => {
  const [tiers, setTiers] = useState({
    S: [],
    A: [],
    B: [],
    C: [],
    D: []
  });

  const [newItem, setNewItem] = useState('');

  const addItemToTier = (tier) => {
    setTiers((prev) => ({
      ...prev,
      [tier]: [...prev[tier], newItem]
    }));
    setNewItem('');
  };

  const publishTierList = async () => {
    try {
      const tierListData = { tiers };
      await axios.post('http://localhost:5000/api/tierlists', tierListData);
      alert('Tier list published!');
    } catch (error) {
      console.error('Error publishing tier list:', error);
    }
  };

  return (
    <div className="tier-list">
      <h1>Create Your Tier List</h1>
      <div className="add-item">
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Add an item"
        />
        <button onClick={() => addItemToTier('S')}>Add to S Tier</button>
        <button onClick={() => addItemToTier('A')}>Add to A Tier</button>
        <button onClick={() => addItemToTier('B')}>Add to B Tier</button>
        <button onClick={() => addItemToTier('C')}>Add to C Tier</button>
        <button onClick={() => addItemToTier('D')}>Add to D Tier</button>
      </div>

      {/* Loop through the tiers and display them with color-coding */}
      <div className="tiers">
        {Object.keys(tiers).map((tier) => (
          <div key={tier} className={`tier ${tier}-tier`}>
            <h3>{tier} Tier</h3>
            <ul className="tier-items">
              {tiers[tier].map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      <button onClick={publishTierList}>Publish Tier List</button>
     

       <hr/>
       <hr/>
       <hr />
       <hr />
       <hr />
       <hr />
       <hr />
       <hr />
       <hr />

    </div>
     
  );


};

export default TierList;
