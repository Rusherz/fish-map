import { PlaylistAddOutlined } from "@material-ui/icons"
import { fishActionTypes } from "./action"

const countInitialState = {
	fish: [],
}

export default function reducer(state = countInitialState, action) {
	switch (action.type) {
		case fishActionTypes.GET_FISH:
			return Object.assign({}, state, {
				fish: action.payload,
			})
		default:
			return state
	}
}
