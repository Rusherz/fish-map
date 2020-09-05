import * as express from "express"
import { ObjectId } from "mongodb"
import { PostInterface, PostModel } from "../Views/Post"
import { Request, Response } from "express"
import IControllerBase from "../Views/IControllerBase"

class PostsController implements IControllerBase {
	public path = "/posts"
	public router = express.Router()

	constructor() {
		this.initRoutes()
	}

	public initRoutes() {
		this.router.get("", this.getAllPosts)
		this.router.post("", this.createPost)
		this.router.get("/:id", this.getPost)
	}

	getPost = async (req: Request, res: Response) => {
		const id: ObjectId = new ObjectId(req.params.id)

		let result = await PostModel.findOne({
			_id: id,
		}).exec()

		if (!result) {
			res.status(404).send({
				error: "Post not found!",
			})
		}

		res.render("posts/index", result)
	}

	getAllPosts = async (req: Request, res: Response) => {
		res.send(await PostModel.find().exec())
	}

	createPost = async (req: Request, res: Response) => {
		const postObject: PostInterface = req.body

		let newPost = new PostModel(postObject)

		console.log(newPost)

		newPost = await newPost.save()

		res.send(newPost)
	}
}

export default PostsController
