import React from 'react'
import styles from './Contribute.module.scss'

const url = "https://docs.google.com/forms/d/e/1FAIpQLSe1ZqQFuGtmaz6Elv0NxgABxe_Jn6T1lqK7l5B8kHXSovN3aw/viewform"


function JoinUs() {
  return (
    <div className={styles.joinUs}>
    <div className={styles.items}>
      <div className={styles.heading}>
        <h2>Educational Growth</h2>
        <a href={url}><button>Donate Now</button></a>
      </div>
    </div>
    <div className={styles.items}>
      <div className={styles.heading}>
        <h2>Blood Donation Camps</h2>
        <a href={url}><button>Donate Now</button></a>
      </div>
    </div>
    <div className={styles.items}>
      <div className={styles.heading}>
        <h2>Ration Bags</h2>
        <a href={url}><button>Donate Now</button></a>
      </div>
    </div>
  </div>
  )
}

export default JoinUs