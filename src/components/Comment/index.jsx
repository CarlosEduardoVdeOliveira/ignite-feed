import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react';
import { Avatar } from '../Avatar';
import styles from './styles.module.css';

export function Comment({content, onDeleteComment}) {
    const [likesCount, setLikesCount] = useState(0);

    function handleDeleteComment() {
        onDeleteComment(content)
    }
    function handleLikeComment(){
        setLikesCount((state)=> state + 1);
    }
  return (
    <div className={styles.comment}>
        <Avatar hasBorder={false} src="https://github.com/carloseduardovdeoliveira.png" />
        <div className={styles.commentBox}>
            <div className={styles.commentContent}>
                <header>
                    <div className={styles.authorAndTime}>
                        <strong>Carlos Eduardo <span>(você)</span> </strong>
                        <time title="07 de Outubro às 11:53" dateTime="2022-10-07 11:53:00">
                            Cerca de 2h atrás
                        </time>
                    </div>
                    <button 
                        title='Excluir comentário'
                        onClick={handleDeleteComment}
                    >
                        <Trash size={20} />
                    </button>
                </header>
                <p>{content}</p>
            </div>
            <footer>
                <button onClick={handleLikeComment}>
                    <ThumbsUp size={20} /> Aplaudir <span>{likesCount}</span>
                </button>
            </footer>
        </div>
    </div>
  );
}

                  
              
            