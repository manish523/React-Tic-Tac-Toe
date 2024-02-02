import { useState } from "react";

export default function Player({ initialPlayername, symbol, isActive }) {
  const [playerName, setPlayerName] = useState(initialPlayername);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((editing) => !isEditing);
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let editablePlayername = <span className="player-name">{playerName}</span>;
  let btnCaption = "Edit";

  if (isEditing) {
    editablePlayername = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
    btnCaption = "Save";
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayername}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{btnCaption}</button>
    </li>
  );
}

// Both of lines below will not be executed instantly but will be schedules and hence result to
// same output which is False to True
//  setIsEditing(!isEditing); // Schedules a state value to true
//  setIsEditing(!isEditing); // Schedules a state value to true

// Always this form of declaration should be uses
// React will instantly update the state with the value provided
// If we declare this line twice, the 2nd line will get the latest value from state and have no side effects
// It's important in react to follow this approach if we are updating state with previous state value
// setIsEditing((editing)=> !isEditing);
