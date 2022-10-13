import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post/index'
import styles from './App.module.css'
import './global.css'
import {posts} from './db'

export function App() {
  return (
    <div className="App">
      <Header />
     <div className={styles.wrapper}>
      <Sidebar />
      <main>
        {posts.map(post =>{
          return(
            <Post
              key={post.id}
              author={post.author}
              publishedAt={post.publishedAt}
              content={post.content}
            />
          )
        })}
      </main>
     </div>
    </div>
  )
}

