import React from "react"
import Link from "next/link"
import { connect } from "react-redux"
import List from "@material-ui/core/List"
import AppBar from "@material-ui/core/AppBar"
import Drawer from "@material-ui/core/Drawer"
import MenuIcon from "@material-ui/icons/Menu"
import InboxIcon from "@material-ui/icons/Inbox"
import MailIcon from "@material-ui/icons/Mail"
import Divider from "@material-ui/core/Divider"
import Toolbar from "@material-ui/core/Toolbar"
import ListItem from "@material-ui/core/ListItem"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"

export interface HeaderProps {
	open: false
}

export class Header extends React.Component<HeaderProps, any> {
	constructor(props) {
		super(props)

		this.state = {
			open: false,
		}
	}

	ToggleDrawer = () => {
		this.setState({
			open: !this.state.open,
		})
	}

	render() {
		return (
			<>
				<Drawer
					open={this.state.open}
					anchor={"left"}
					onClose={this.ToggleDrawer}
				>
					<List color="primary">
						{["Post", "Search"].map((text, index) => (
							<Link href={text[0].toLowerCase() + text.slice(1)}>
								<ListItem button key={text}>
									<ListItemIcon>
										{index % 2 === 0 ? (
											<InboxIcon />
										) : (
											<MailIcon />
										)}
									</ListItemIcon>
									<ListItemText primary={text} />
								</ListItem>
							</Link>
						))}
					</List>
					<Divider />
					<List>
						{["Profile", "Settings", "Logout", "Login"].map(
							(text, index) => (
								<ListItem button key={text}>
									<ListItemIcon>
										{index % 2 === 0 ? (
											<InboxIcon />
										) : (
											<MailIcon />
										)}
									</ListItemIcon>
									<ListItemText primary={text} />
								</ListItem>
							)
						)}
					</List>
				</Drawer>
				<AppBar position="static">
					<Toolbar>
						<IconButton
							edge="start"
							color="inherit"
							aria-label="menu"
							onClick={() => {
								this.ToggleDrawer()
							}}
						>
							<MenuIcon />
						</IconButton>
						<Typography variant="h6">News</Typography>
					</Toolbar>
				</AppBar>
			</>
		)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {}
}

export default connect(null, mapDispatchToProps)(Header)
