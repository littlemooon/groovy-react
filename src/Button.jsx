import React from 'react'

export default function Button({ style, ...props }) {
  return <button style={{fontSize: '20px', ...style}} {...props}/>
}
