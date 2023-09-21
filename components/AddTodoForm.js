import { useState } from 'react'
import styles from '../styles/home.module.css'
import Button from './Button'

export const AddTodoForm = ({ onAdd }) => {
  const [text, setText] = useState('')

  const onClick = () => {
    onAdd({ text: text })
    setText('')
  }

  return <div className={styles.column}>
    <input 
      style={{ margin: '10px 0' }} 
      type='text' 
      value={text} 
      onChange={e => setText(e.target.value)} 
    />
    <Button onClick={onClick}>Add todo</Button>
  </div>
}

