import { ObjectId } from "mongodb"
import { Schema, Document, model } from "mongoose"

export interface PostInterface extends Document {
	[x: string]: any

	id: ObjectId
	type: string
	title: string
	image?: string
	author: string
	content: string
	location?: Position
}

const PostSchema: Schema = new Schema({
	type: { type: String, required: true },
	title: { type: String, required: true },
	image: { type: String, required: true },
	author: { type: String, required: true },
	content: { type: String, required: true },
	location: { type: Object, required: true },
})

// Export the model and return your PostInterface interface
export const PostModel = model<PostInterface>("Posts", PostSchema)
