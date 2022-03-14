
import './App.css';
import FloorPlan from './FloorPlan';

function App() {
  const floorPlan = [
    {
      bedroom: " Bedroom1",
      kitchen: ['oven', 'sink'],
      fullBathroom: "Full Bathroom",
      bedroom2: "Bedroom2",
      livingRoom: "Living Room",
      halfBathroom: "Half Bathroom",
      bedroom3: "Bedroom3"
    }
  ]
  return (
    <div>
      <FloorPlan/>
    </div>    
  );
}

export default App;
