import React from 'react'
import {Link} from 'react-router-dom'
import classes from './MainNavigation.module.css'

function MainNavigation() {
  return (
    <header className={classes.header}>
    <div>
        React meetUps
    </div>
    <nav>
        <ul>
            <li>
                <Link to='/'>All Meetups</Link>
            </li>
            <li>
                <Link to='/new-meetup'>New Meetup </Link>
            </li>
            <li>
                <Link to='/favourites'>My Favourites</Link>
            </li>
        </ul>
    </nav>
    </header>
  )
}

export default MainNavigation