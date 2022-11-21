import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'

import './global.css'

export function App() {
  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
       <Sidebar />
        <main>
           <Post
        author="Diego Fernandes"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi repellat blanditiis sunt quam fugiat, commodi deleniti quos ducimus incidunt iusto, quia necessitatibus eveniet quod? Hic eius modi dolorum ut deleniti?"
      />
      <Post
        author="Gabriel Muzzi"
        content="Post Legal"
      />
        </main>
      </div>

</div>
  )
}


 
