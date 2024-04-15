// Like
// • id: Unique identifier for each like.
// • userld: Identifier for the user who liked the post.
// • postid: Identifier for the post that was liked.
// The Like data structure is used to keep track of likes on posts. It includes attributes such as user ID of the liker and post ID of the liked post.

export default class LikeModel {
  static id = 1;
  constructor(userId, postId) {
    this.id = LikeModel.id++;
    this.userId = userId;
    this.postId = postId;
  }
  //Create a Like model with functions for adding and removing a like
  //and to get all likes on a specific post.
  static addLike(userId, postId) {
    const like = likes.find((u) => u.userId && u.postId == postId);
    if (like) {
      return { success: false, message: "You have liked this post already" };
    }
    const newLike = new LikeModel(userId, postId);
    likes.push(newLike);
    return { success: true, message: newLike };
  }
  static removeLike(userId, postId) {
    const index = likes.findIndex((u) => u.userId && u.postId == postId);
    if (index != -1) {
      return { success: false, message: "You need to like to remove like" };
    }
    likes.splice(index, 1);
    return { success: true, message: "you removed the like successfully" };
  }
  static getAllLikes(postid) {
    const like = likes.find((l) => l.postId == postid);
    if (like) {
      return { success: true, message: like };
    }
    return { success: true, message: "no Likes for this post" };
  }
}
const likes = [];
