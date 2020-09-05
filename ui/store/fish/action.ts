import { get } from "../../classes/Plugins"

export const fishActionTypes = {
	ADD_FISH: "ADD_FISH",
	GET_FISH: "GET_FISH",
}

export const addFish = () => (dispatch) => {
	return dispatch({ type: fishActionTypes.ADD_FISH })
}

export const getFish = () => (dispatch) => {
	get("/v1/posts").then(posts => {
		dispatch({
			type: fishActionTypes.GET_FISH,
			payload: posts
		})
	})
}
