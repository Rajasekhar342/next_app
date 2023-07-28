import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'

const BlogPost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>Lorem ipsum dolor sit.</h1>
          <p className={styles.desc}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
            hic doloremque obcaecati rerum nesciunt fugit minima molestiae
            officiis est!
          </p>
          <div className={styles.author}>
            <Image
              src='https://images.pexels.com/photos/168'
              alt=''
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>JOhn Doe</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src='https://images.pexels.com/photos/168'
            alt=''
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          tempora eaque assumenda sunt voluptatum pariatur aut inventore,
          deserunt incidunt quo reprehenderit sint asperiores optio tempore
          molestiae quod. Adipisci, eligendi exercitationem.
        </p>
      </div>
    </div>
  )
}

export default BlogPost
