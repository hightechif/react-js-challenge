import React from 'react';
import '../styles/instructor.module.css'; // template from tutorial
import styles from '../styles/Box.module.css'; // lesson

function Box() {
    return (
        <div>
            <ul>
              <li>Margin</li>
              <li>The Box / Border</li>
              <li>Padding</li>
              <li>Content</li>
          </ul>
          <section> 
              <div className={styles.parent}>
                  <div className={styles.box}>
                      <span className={styles.content}>Box</span>
                  </div>
              </div> 
              {/* <div className="margin">
                  <div className="box">
                      <span className="content">Content</span>
                  </div>
              </div> */}
          </section>
        </div>
    )
}

export default Box;
