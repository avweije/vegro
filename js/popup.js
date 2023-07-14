/**
* Javascript Object for the register popup.
**/
var RegisterPopup = {
	// the overlay container that holds the popup
	overlay: null,

	/**
	* Add the Escape key listeners.
	**/
	init() {
		// add the keyup event listener
		document.addEventListener("keyup", function(event) {
			if (event.key === "Escape") {
				if (RegisterPopup.overlay !== null) {
					// hide the popup
					RegisterPopup.hide();
				}
			}
		});
	},

	/**
	* Show the register popup.
	**/
	show() {
		// make sure the popup isn't already showing
		if (this.overlay == null) {
			// create the popup overlay container
			this.overlay = document.createElement("div");
			this.overlay.className = "popup-overlay";

			// create the popup container
			var pop = document.createElement("div");
			pop.className = "popup-container";

			// create the title
			var title = document.createElement("h3");
			title.className = "popup-title";
			title.innerHTML = "Aanmelden";

			pop.appendChild(title);

			// create the text element
			var sp = document.createElement("p");
			sp.className = "popup-text";
			sp.innerHTML = "Wat leuk dat je ook komt! Vul hieronder je email adres in en druk op de knop om je aan te melden.";

			pop.appendChild(sp);

			// create the footer container for the input and button
			var ftr = document.createElement("div");
			ftr.className = "popup-footer";

			// create the input field
			var inp = document.createElement("input");
			inp.className = "popup-input";
			inp.id = "emailInput";
			inp.name = "email";
			inp.type = "email";
			inp.placeholder = "Vul je email adres in..";

			ftr.appendChild(inp);

			// create the submit button
			var btn = document.createElement("button");
			btn.className = "popup-submit";
			btn.type = "submit";
			btn.innerHTML = "Aanmelden";
			btn.addEventListener("click", function() {
				// register the email address
				RegisterPopup.register();
			});

			ftr.appendChild(btn);
			pop.appendChild(ftr);

			// add the popup container
			this.overlay.appendChild(pop);
			document.body.appendChild(this.overlay);

			// add the outside click event listener
			this.overlay.addEventListener("click", function(event) {
				// if this is an outside click
				if (event.target === RegisterPopup.overlay) {
					// hide the popup
					RegisterPopup.hide();
				}
			});
		}
	},

	/**
	* Hide the register popup.
	**/
	hide() {
		// if the popup is active
		if (this.overlay !== null) {
			document.body.removeChild(this.overlay);
			this.overlay = null;
		}
	},

	/**
	* Register an email address through the PHP script.
	**/
	async register() {
		// get the email address
		var email = document.getElementById("emailInput").value;
		// if we have an email address
		if (email != "") {
			// register the email address
			const response = await fetch("php/register.php?email=" + encodeURIComponent(email));

			// show an alert message
			if (response.status == 200) {
				alert("Je bent aangemeld!");
			} else if (response.status == 409) {
				alert("Je bent al aangemeld met dit email adres.");
			}

			// close the popup
			RegisterPopup.hide();
		} else {
			// show an alert
			alert("Er is geen email adres ingesteld.");
		}
	}
};

// initialise the popup
RegisterPopup.init();