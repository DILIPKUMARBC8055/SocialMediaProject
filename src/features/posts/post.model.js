// • id: Unique identifier for each post.
// •userld: Identifier for the user who created the post.
// • caption: The text content of the post.
// • imageUrl: The URL of the image attached to the post.
// The Post data structure is used to store information about the posts shared by users. It includes attributes such as the user ID of the poster, the
// caption of the post, and the URL of any attached image.

export default class PostModel {
  static id = 1;
  constructor(userId, caption, imageUrl) {
    this.id = PostModel.id++;
    this.userId = userId;
    this.caption = caption;
    this.imageUrl = imageUrl;
  }
  //     5. Create a Post model with functions for creating a new post, retrieving all posts,
  // retrieving user posts, getting a post by its id, updating a post and
  // deleting a post.
  static addPost(userId, caption, imageUrl) {
    const newpost = PostModel(userId, caption, imageUrl);
    posts.push(newpost);
    return newpost;
  }
  static getPosts() {
    return posts;
  }
  static getPostById(postId) {
    const post = posts.find((u) => u.postId == postId);
    if (post) {
      return { success: true, message: post };
    }
    return { success: false, message: "No post was found with the Id" };
  }
  static getUserPost(userId) {
    const userpost = posts.find((u = u.userId == userId));
    if (userpost) {
      return userpost;
    }
    return { success: true, message: "No post fournd from your account" };
  }
  static updatePost(userId, postId, caption, imageUrl) {
    const index = posts.findIndex(
      (u) => u.postId == postId && u.userId == userId
    );
    if (index == -1) {
      return { success: false, message: "No post found" };
    }
    posts[index].caption = caption;
    posts[index].imageUrl = imageUrl;
    return posts[index];
  }
  static deletePost(postId) {
    const index = posts.findIndex((u) => u.postId == postId);
    if (index == -1) {
      return { success: false, message: "No post found" };
    }
    posts.splice(index, 1);
    return { success: true, message: "post deleted successfully" };
  }
}

const posts = [new PostModel(1,"this is aws","http link")];
