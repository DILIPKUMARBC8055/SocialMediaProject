// comment
// • id: Unique identifier for each comment.
// • userld: Identifier for the user who commented.
// • postid: Identifier for the post that was commented on.
// • content: The text content of the comment.
// The Comment data structure is used to store comments made on posts. It includes attributes such as user ID of the commenter, post ID of the
// commented post, and the text content of the comment

export default class CommentModel {
  static id = 1;
  constructor(userId, postId, content) {
    this.id = CommentModel.id++;
    this.userId = userId;
    this.postId = postId;
    this.content = content;
  }
  //  Create a Comment model with functions for creating a comment,
  //getting all comments on a specific post, updating and deleting a comment.
  static addComment(userId, postId, content) {
    const newComment = new CommentModel(userId, postId, content);
    comments.push(newComment);
    return { success: true, message: comments };
  }
  static getComments(postid) {
    const comment = comments.find((u) => u.postId == postId);
    if (comment) {
      return { success: true, message: comment };
    } else {
      return { success: true, message: "The post has no comment" };
    }
  }
  static updateComment(commentId, postId, userId, content) {
    const index = comments.findIndex(
      (u) => u.postId == postId && u.userId == userId
    );
    if (index == -1) {
      return { success: false, message: "There is no comment to update" };
    }
    comments[index].content = content;
    return { success: true, message: comments[index] };
  }
  static deleteComment(commentId) {
    const index = comments.findIndex((u) => u.id == commentId);
    if (index == -1) {
      return { success: false, message: "There is no comment to delete" };
    }
    comments.splice(index, 1);
    return { success: true, message: "Comment deleted successfully" };
  }
}

const comments = [new CommentModel(1,1,"wow...!")];
