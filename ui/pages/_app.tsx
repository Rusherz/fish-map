import '../styles/main.scss'
import { wrapper } from "../store/store"
import Grid from "@material-ui/core/Grid"
import Header from "../components/Header"
import "react-html5-camera-photo/build/css/index.css"

const WrappedApp = ({ Component, pageProps }) => {
	return (
		<>
			<Header />
			<Grid container spacing={0} justify="space-around" style={{
				height: "100%"
			}}>
				<Component {...pageProps} />
			</Grid>
		</>
	)
}

export default wrapper.withRedux(WrappedApp)
