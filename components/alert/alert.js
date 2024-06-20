/*
 * @Description: 
 * @author: gaohuan
 * @Date: 2024-04-24 16:10:37
 * @LastEditTime: 2024-04-24 16:11:57
 */
import styles from './alert.module.css'
import cn from 'classnames'

export default function Alert({ children, type }) {
  return (
    <div
      className={cn({
        [styles.success]: type === 'success',
        [styles.error]: type === 'error'
      })}
    >
      {children}
    </div>
  )
}