import { format, formatDistanceToNow } from 'date-fns';
import {ptBR} from 'date-fns/locale';
import { useState } from 'react';
import { Avatar } from '../Avatar';
import { Comment } from '../Comment';
import styles from './styles.module.css'

export function Post({author, publishedAt, content}) {
  
  const [comments, setComments] = useState(['Post muito bacana, hein?!']);
  const [newComment, setNewComment] = useState('');

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  });  
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  });  
  
  function handleCreateNewComment() {
    event.preventDefault();
    setComments([...comments, newComment]);
    setNewComment('');
  }
  function handleNewCommentChange() {
    event.target.setCustomValidity('')
    setNewComment(event.target.value);
  }
  function handleNewCommentInvalid(){
    event.target.setCustomValidity('Esse campo é obrigatório')
  }
  function deleteComment(commentToDelete) {
    const commentsWithoutDeletedOne = comments.filter(comment =>{
      return comment !== commentToDelete
    })
    setComments(commentsWithoutDeletedOne);
  }
  
  const isNewCommentEmpyt = newComment.length === 0

  return (
      
    <article className={styles.post}>
      <header className={styles.postHeader}>
        <div className={styles.author}>
          <Avatar
            src={author.avatarUrl}
          />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>
      <div className={styles.content}>
        {content.map(line=>{
            /* if (line.type === 'paragraph') {
              return <p>{line.content}</p>
            }else if(line.type === 'link'){
              return <p><a href='#'>{line.content}</a></p>
            } */
            switch (line.type) {
              case 'paragraph':
                  return <p key={line.content}>{line.content}</p>
              case 'link':
                  return <p key={line.content}><a>{line.content}</a></p>
              case 'block':
                return <p></p>
              default:
                break;
            }
        })}
      </div>
      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea 
          placeholder='Deixe um comentário...'
          value={newComment}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />
        <footer>
          <button type='submit'disabled={isNewCommentEmpyt}>Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {comments.map(comment =>{ 
          return (
              <Comment 
                key={comment} 
                content={comment}
                onDeleteComment={() => deleteComment(comment)}
              />
            )
          }
        )}
      </div>
    </article>
  );
}
