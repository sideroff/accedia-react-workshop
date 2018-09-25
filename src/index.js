import React from 'react';
import ReactDOM from 'react-dom';

import './styles.css';

// Note: Change this import if you wish to load a different exercise.
import CurrentExercise from './exercise_1';

// Remember the div with id='root' from ../public/index.html? We use it below.
ReactDOM.render(<CurrentExercise />, document.getElementById('root'));
