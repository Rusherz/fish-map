import App from "./app"
import * as cors from "cors"
import * as mongoose from "mongoose"
import { json, urlencoded } from "body-parser"
import PostsController from "./Controllers/Posts"
import loggerMiddleware from "./Middleware/Logger"

mongoose.connect("mongodb://mongo:27017/fish-map", {
	authSource: "admin",
	useNewUrlParser: true,
	auth: {
		user: "root",
		password: "password",
	},
	useUnifiedTopology: true,
})

const app = new App({
	port: 1337,
	controllers: [new PostsController()],
	middlewares: [
		json({ limit: "50mb" }),
		urlencoded({ extended: true }),
		loggerMiddleware,
		cors(),
	],
})

app.listen()
