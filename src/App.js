import { useState } from 'react';
import './App.css';
import './components/GoalList/GoalList';
import GoalList from './components/GoalList/GoalList';
import NewGoal from './components/NewGoal/NewGoal';

function App() {
  const [courseGoals, setCoureGoals] = useState([
    {id:'g1', text: 'Learn ReactJS'},
    {id: 'g2', text: 'Create some projects'},
    {id: 'g3', text: 'Practice more and more'}
  ]);
  const addGoalHandler=(newGoal)=>{
    setCoureGoals(courseGoals.concat(newGoal));
  }
  return (
  <div className="course-goals">
     <h1>A React App!</h1>
     <NewGoal onAddGoal={addGoalHandler} />
     <GoalList items={courseGoals} />

     
  </div>
   
  );
}

export default App;
