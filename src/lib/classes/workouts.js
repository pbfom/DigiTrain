import workoutData from '$lib/data/workouts.json';
import { getWeekEndDate } from './applicationParameters';

let workout = {
  date: "",
  type: "",
  duration: ""
};

export function CheckUsernameAndPassword(email, password)  {
  if (email === "philip.baier@icloud.com" && password === "test") { 
    return true;
  } else {
    return false;
  }
}

export function getCountOfWorkouts() {
    var workouts = workoutData.workouts.map(function(e) {
		return e.date;
	});
    return workouts.length;
}

export function getCountOfOpenWorkouts() {
    var workouts = workoutData.open_workouts.map(function(e) {
		return e.date;
	});
    return workouts.length;
}

export function getUpcommingWorkoutsThisWeekCount() {
    var workouts = workoutData.open_workouts.map(function(e) {
		  if (e.date < getWeekEndDate() ) {
        return e;
      } 
	  });
    return workouts.length;
}


export function getWorkoutData() {
    var workouts = workoutData.workouts.map(function(e) {
		return e;
	});
    return workouts;
}

export function getUpcommingWorkoutsThisWeek() {
  var workouts = workoutData.open_workouts.map(function(e) {
    if (e.date < getWeekEndDate() ) {
      return e;
    } 
  });
  return workouts;
}

export function getNextWorkoutThisWeek() {
  var workouts = workoutData.open_workouts.map(function(e) {
    if (e.date < getWeekEndDate() ) {
      return e;
    } 
  });
  return workouts[0];
}
