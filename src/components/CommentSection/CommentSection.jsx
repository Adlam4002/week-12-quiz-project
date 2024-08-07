import { db } from "@/db";
import CommentsForm from "../CommentsForm";
export default async function CommentSection({questionId}){
    const questionID = questionId
  
const response = await db.query(`
    SELECT comments.id, comment, COALESCE(users.name, 'Missing') AS username, question_id, parent_comment_id, created_at, updated_at
    FROM comments
    LEFT JOIN users ON comments.user_id = users.id 
    WHERE question_id = $1
    `, [questionID])
   const data = response.rows
    return(<div className="flex flex-col items-center w-3/5">
        <CommentsForm qid={questionId}/>
        {data.map((item)=> 
        (
        <div key={item.id} id="comments-box" className="flex flex-col items-center border-2 rounded w-3/5 m-2">
        <div id="comments-username">{item.username}</div>
        <div id="comments-comment">{item.comment}</div>
       </div>
        

    
  ))}

        </div>)
}






// 'use client';

// import { useState, useEffect } from 'react';
// import styles from "./styles.module.css";


// const CommentsSection = ({ questionId }) => {
//   const [comments, setComments] = useState([]);
//   const [newComment, setNewComment] = useState("");

//   useEffect(() => {
//     const fetchComments = async () => {
//       const response = await fetch(`/api/comments/${questionId}`);
//       const data = await response.json();
//       setComments(data);
//     };

//     fetchComments();
//   }, [questionId]);

//   const handleCommentSubmit = async () => {
//     if (newComment.trim() !== "") {
//       const response = await fetch(`/api/comments/${questionId}`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ 
//           text: newComment, 
//           user_id: 1, // Replace with actual user ID retrieval logic
//           parent_comment_id: null // assuming root comments for now
//         }),
//       });
//       const newCommentData = await response.json();
//       setComments([...comments, newCommentData]);
//       setNewComment("");
//     }
//   };

//   return (
//     <div id="comments-container" className="comments-section">
//       <h3>Comments</h3>
//       <div id="comments-list">
//         {comments.map(comment => (
//           <div key={comment.id} className="comment">
//             <p>{comment.comment}</p>
//           </div>
//         ))}
//       </div>
//       <div className={`${styles.usercomment}`}>
//       <textarea className={`${styles.textarea}`}
//         id="comment-input"
//         placeholder="Add a comment"
//         value={newComment}
//         onChange={(e) => setNewComment(e.target.value)}>
//       </textarea>
//       </div>
//       <button className={`${styles.button}`} id="submit-comment" onClick={handleCommentSubmit}>
//         Submit
//       </button>
//       {/* <div>
//        insert displayed comments here 
//       </div> */}
//     </div>
//   );
// };

// export default CommentsSection;
