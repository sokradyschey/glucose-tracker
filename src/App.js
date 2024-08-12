import React, { useState } from 'react';

function GlucoseTracker() {
  // State to manage glucose levels, meal type, and form inputs
  const [levels, setLevels] = useState([]);
  const [sugarLevels, setSugarLevels] = useState('');
  const [mealType, setMealType] = useState('');
  const [trackingList, setTrackingList] = useState([]);

  // Function to handle form submission
  const submitLevels = (e) => {
    e.preventDefault();
    const newLevels = [...levels, sugarLevels];
    setLevels(newLevels);

    const total = newLevels.reduce((acc, level) => acc + parseInt(level), 0);
    const avg = total / newLevels.length;

    // Update tracking list and conditional styles
    let color = 'green';
    if (mealType === 'Fasting' && (sugarLevels <= 70 || sugarLevels >= 89)) {
      color = 'red';
    } else if (mealType === 'Post Breakfast' && (sugarLevels <= 70 || sugarLevels >= 129)) {
      color = 'red';
    } else if (mealType === 'Post Lunch' && (sugarLevels <= 70 || sugarLevels >= 129)) {
      color = 'red';
    } else if (mealType === 'Post Dinner' && (sugarLevels <= 70 || sugarLevels >= 129)) {
      color = 'red';
    }

    setTrackingList([...trackingList, { mealType, sugarLevels, color }]);
    setSugarLevels(''); // Clear the input
  };

  // JSX for rendering the component
  return (
    <div>
      <h1>Glucose Tracker</h1>
      <form onSubmit={submitLevels}>
        <label htmlFor="meal">Meal Type:</label>
        <select id="meal" value={mealType} onChange={(e) => setMealType(e.target.value)}>
          <option value="Fasting">Fasting</option>
          <option value="Post Breakfast">Post Breakfast</option>
          <option value="Post Lunch">Post Lunch</option>
          <option value="Post Dinner">Post Dinner</option>
        </select>

        <label htmlFor="levels">Sugar Levels:</label>
        <input
          id="levels"
          type="number"
          value={sugarLevels}
          onChange={(e) => setSugarLevels(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>

      <h2>Daily Average: {levels.length > 0 ? (levels.reduce((acc, level) => acc + parseInt(level), 0) / levels.length).toFixed(2) : 0} mg/dL</h2>

      <div id="trackingList">
        {trackingList.map((item, index) => (
          <div key={index} style={{ color: item.color }}>
            {item.mealType}: {item.sugarLevels} mg/dL
          </div>
        ))}
      </div>
    </div>
  );
}

export default GlucoseTracker;

