import applicationParameters from '$lib/data/application_parameters.json';

export function getCurrentDate() {
    var currentDate = applicationParameters.application_parameters.map(function(e) {
		return e.current_date;
	});
    return currentDate;
}


export function getWeekEndDate() {
    var endOfWeekDate = applicationParameters.application_parameters.map(function(e) {
		return e.end_of_the_week;
	});
    return endOfWeekDate;
}