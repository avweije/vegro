/**
* Javascript Object for the events page.
**/
var EventPage = {
	// the container element that holds the events
	container: null,

	/**
	* Load the events data from the JSON file and attach event handlers.
	*/
	async load() {
		// get the container element
		this.container = document.getElementById("eventsContainer");

		// get the register button
		var btn = document.getElementById("registerButton");
		btn.addEventListener("click", function() {
			// show the register popup
			RegisterPopup.show();
		});

		// get the events data
		const response = await fetch("data/events.json");
		const data= await response.json();

		// show the events data
		this.show(data);
	},

	/**
	* Show the events data in the events container.
	**/
	show(data) {
		// create the event item container
		var el = document.createElement("div");
		el.className = "events-item event-header";

		// create the spans for the data
		var sp = document.createElement("span");
		sp.innerHTML = 'Tijd';

		el.appendChild(sp);

		sp = document.createElement("span");
		sp.innerHTML = 'Onderwerp';

		el.appendChild(sp);

		sp = document.createElement("span");
		sp.innerHTML = 'Spreker';

		el.appendChild(sp);

		// add the event item
		this.container.appendChild(el);

		// loop through the events data
		for (var i=0;i<data.length;i++) {
			// create the event item container
			el = document.createElement("div");
			el.className = "events-item" + (data[i].spreker == "" ? " event-break" : "");

			// create the spans for the data
			sp = document.createElement("span");
			sp.innerHTML = data[i].start + ' - ' + data[i].stop;

			el.appendChild(sp);

			sp = document.createElement("span");
			sp.innerHTML = data[i].onderwerp;

			el.appendChild(sp);

			sp = document.createElement("span");
			sp.innerHTML = data[i].spreker;

			el.appendChild(sp);

			// add the event item
			this.container.appendChild(el);
		}
	}
};

window.addEventListener("DOMContentLoaded", (event) => {
  // load the events
  EventPage.load();
});