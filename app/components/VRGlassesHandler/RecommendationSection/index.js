import React from 'react'
import { Link } from 'react-router'
import styles from './index.scss'

export default class RecommendationSection extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className={styles.root}>
          <div className={styles.head}>
            <h2>What we use</h2>
          </div>
          <div className={styles.info}>
            <div className={styles.text}>
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </div>
            <div className={styles.imcardboard}>
              <a href='http://www.imcardboard.com?acc=c81e728d9d4c2f636f067f89cc14862c'><img src={require('./imcardboard.png')} /></a>
            </div>
          </div>
          <div className={styles.buttons}>
            <a href='http://www.imcardboard.com/cardboard-v2-0/cardboard-vr-v2-box-81.html?acc=c81e728d9d4c2f636f067f89cc14862c'>Buy Google Cardboard for $19.99</a>
          </div>
        </div>
      </div>
    )
  }
}
