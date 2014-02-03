var exerciseData = [
	{
		day: 'Sunday',
		title: 'Rest',
		exercises: []
	},
	{
		day: 'Monday',
		title: 'Back, Biceps, Abs',
		exercises: [
			{
				name: 'Lat Pulldowns'
			},
			{
				name: 'Seated Cable Rows'
			},
			{
				name: 'Chin-Ups'
			},
			{
				name: 'Hanging Leg Raises'
			}
		]
	},
	{
		day: 'Tuesday',
		title: 'Rest',
		exercises: []
	},
	{
		day: 'Wednesday',
		title: 'Shoulders and Legs',
		exercises: [
			{
				name: 'Military Press'
			},
			{
				name: 'Side Lateral Raise'
			},
			{
				name: 'Shrugs'
			},
			{
				name: 'Leg Press'
			},
			{
				name: 'Leg Extensions'
			},
			{
				name: 'Leg Curls'
			}
		]
	},
	{
		day: 'Thursday',
		title: 'Rest',
		exercises: []
	},
	{
		day: 'Friday',
		title: 'Chest, Triceps, and Abs',
		exercises: [
			{
				name: 'Dumbell Bench Press'
			},
			{
				name: 'Cable Crossover'
			},
			{
				name: 'Tricep Dips'
			},
			{
				name: 'Hanging Leg Raise'
			}
		]
	},
	{
		day: 'Saturday',
		title: 'Rest',
		exercises: []
	}
];

Template.workout.helpers({
	// allExercises: exerciseData,
	exercise: function() {
		var date = new Date(),
			day = date.getDay();
		
		var exercises = exerciseData[day]
		return exercises;
	}
});