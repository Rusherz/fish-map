declare global {
	interface Window {
		google: any
	}
}

import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { Marker, InfoWindow } from "@react-google-maps/api"
import { getFish } from "../store/fish/action"
import { GoogleMap, LoadScript } from "@react-google-maps/api"

export interface MapProps {
	fish: []
	getFish: typeof getFish
}

export class Map extends React.Component<MapProps, any> {
	constructor(props) {
		super(props)

		this.state = {
			fish: [],
		}
	}

	componentDidMount() {
		this.props.getFish()
	}

	GenerateFish = () => {
		return this.state.fish.map((marker, markerIndex) => {
			if (marker.open) {
				return (
					<InfoWindow
						key={marker.id}
						position={marker.position}
						onCloseClick={() => {
							this.ToggleMarker(markerIndex)
						}}
					>
						<img src={marker.image || marker.url} />
					</InfoWindow>
				)
			} else {
				return (
					<Marker
						key={marker.id}
						position={marker.position}
						icon={{
							url: marker.url,
						}}
						onClick={() => {
							this.ToggleMarker(markerIndex)
						}}
					>
						<h1>Marker</h1>
					</Marker>
				)
			}
		})
	}

	ToggleMarker = (markerIndex) => {
		this.setState({
			fish: this.state.fish.map((f, fIndex) => {
				if (fIndex != markerIndex) {
					return f
				}

				f.open = !f.open

				return f
			}),
		})
	}

	render() {
		return (
			<LoadScript googleMapsApiKey="AIzaSyAzNAcbkbNofJb40BYJ75D1WnYtQ_LbZr4">
				<GoogleMap
					mapContainerStyle={{
						width: "100%",
						height: "100%",
					}}
					center={{ lat: 33.772, lng: -117.214 }}
					zoom={10}
				>
					{this.GenerateFish()}
				</GoogleMap>
			</LoadScript>
		)
	}
}

const mapStateToProps = (state) => ({
	fish: state.fish,
})

const mapDispatchToProps = (dispatch) => {
	return {
		getFish: bindActionCreators(getFish, dispatch),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Map)
