// import mongoose from "mongoose";
// class Post {
//     constructor(){
//         let postSchema = new mongoose.Schema(
//             {
//                 userId: { type: String, required: true },
//                 desc: { type: String, required: true },
//                 likes: [],
//                 createdAt: {
//                     type: Date,
//                     default: new Date(),
//                 },
//                 image: String,
//             },
//             {
//                 timestamps: true,
//             });
//         this.PostModel = mongoose.model("Posts", postSchema);
//     }

//     getModel() {
//         return this.PostModel;
//     }
// }

// const PostModelInstance = new Post();
// export default PostModelInstance;
