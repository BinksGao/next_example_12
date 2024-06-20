/*
 * @Description: 
 * @author: gaohuan
 * @Date: 2024-04-24 15:53:25
 * @LastEditTime: 2024-04-24 15:55:23
 */
import styles from './layout.module.css'
export default function Layout({ children }) {
  return <div className={styles.container}>{children}</div>;
}
