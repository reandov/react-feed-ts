import { useState } from "react";
import { ThumbsUp, Trash } from "phosphor-react";

import { Avatar } from "../Avatar/Avatar";

import styles from "./Comment.module.css";

interface CommentProps {
  content: string;
  onDeleteComment: (commentToDelete: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount((currentLikeCount) => {
      return currentLikeCount + 1;
    });
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/evnrodr.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Evandro Rodrigues</strong>
              <time
                title="17th of August at 2:40pm"
                dateTime="2022-08-17 14:40:00"
              >
                About 1hr ago
              </time>
            </div>

            <button onClick={handleDeleteComment} title="Delete comment">
              <Trash size={20} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp size={24} />
            Raise <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
