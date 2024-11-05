import React from 'react'
import { NavLink } from 'react-router-dom'
export default function card(props) {
  return (
    <div>
      <div className="border bg-transparent w-80 h-52 ">
        <NavLink to={props.link}>
        <img src={props.src} className={props.effect} alt="" />
        </NavLink>
        
      </div>
    </div>
  )
}
