import axios from "axios"

export function GetLocation(
	full: boolean = false
): Promise<Position | Coordinates> | Error {
	return new Promise((resolve, reject) => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				(positon) => {
					if (!full) {
						let location: Coordinates = {
							latitude: 0,
							longitude: 0,
							accuracy: 0,
							altitudeAccuracy: 0,
							altitude: 0,
							heading: 0,
							speed: 0,
						}

						for (let key in positon.coords) {
							location[key] = positon.coords[key]
						}

						resolve(location)
						return
					}

					resolve(positon)
				},
				(error) => reject(error)
			)
		}
	})
}

function getOptions(options) {
	// // Get the current state of the client
	// let state = wrapper

	// // If we have a user anda session
	// if (
	// 	state.user &&
	// 	Object.keys(state.user.user).length !== 0 &&
	// 	Object.keys(state.user.session).length !== 0
	// ) {
	// 	// Check if options already has headers,
	// 	// if not then create a new object
	// 	if (!options.headers) {
	// 		options.headers = {}
	// 	}

	// 	// Set the user and token header for the server
	// 	options.headers["x-user-id"] = state.user.user.id
	// 	options.headers["x-token"] = state.user.session.access_token
	// }

	// return the options
	return options
}

function handleResponse(resolve, reject, options, response) {
	// Check if something on the server went wrong,
	// if something did go wrong then reject the promise
	// and return the message
	if (response.data.status === false) {
		reject(response.data.message)
	}

	// If nothing went wrong,
	// check to see if the call wants the full response,
	// if so resolve the full response,
	if (options.full) {
		resolve(response)
	}
	// otherwise resolve only the data of the response
	else {
		resolve(response.data)
	}
}

export function get(url, options = {}) {
	return new Promise((resolve, reject) => {
		options = getOptions(options)

		axios
			.get(url, options)
			.then((response) =>
				handleResponse(resolve, reject, options, response)
			)
	})
}

export function post(url, body, options = {}) {
	return new Promise((resolve, reject) => {
		// options = getOptions(options)

		axios
			.post(url, body, options)
			.then((response) =>
				handleResponse(resolve, reject, options, response)
			)
	})
}

export function put(url, body, options = {}) {
	return new Promise((resolve, reject) => {
		options = getOptions(options)

		axios
			.put(url, body, options)
			.then((response) =>
				handleResponse(resolve, reject, options, response)
			)
	})
}
