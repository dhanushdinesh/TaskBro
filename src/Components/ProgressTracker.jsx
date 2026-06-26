import React from 'react'

export default function ProgressTracker({tasks}) {
  const totalTasks = tasks.length;
  const completedTask = tasks.filter((task) => task.completed).length;
  const progress = totalTasks === 0 ? 0 :
  (completedTask / totalTasks) * 100;
  return (
    <div className='progress-tracker'>
      <p>{completedTask} of {totalTasks}
        tasks completed
      </p>
      <div className='progress-bar'>
        <div className='progress' style={{ width: `${progress}%` }}>
        </div>
      </div>
    </div>
  );
}
