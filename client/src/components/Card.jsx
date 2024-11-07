import React from 'react'
import { NavLink } from 'react-router-dom'
export default function card(props) {
  return (
    <div>
      <div className="border border-black bg-black w-80 h-52 hover:shadow-2xl">
        <NavLink to={props.link}>
        <img src={props.src} className={props.effect} alt="" />
        </NavLink>
        
      </div>
    </div>
  )
}
