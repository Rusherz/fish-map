import React from "react"
import Map from "../components/Map"
import { connect } from "react-redux"
import { wrapper } from "../store/store"
import { bindActionCreators } from "redux"
import { addFish } from "../store/fish/action"

export class Index extends React.Component {
	render() {
		return <Map />
	}
}

export const getServerSideProps = wrapper.getStaticProps(
	async ({ store }) => {}
)

const mapDispatchToProps = (dispatch) => {
	return {
		addFish: bindActionCreators(addFish, dispatch),
	}
}

export default connect(null, mapDispatchToProps)(Index)
