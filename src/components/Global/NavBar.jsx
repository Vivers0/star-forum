import React from 'react'
import logo from '../../upload/img/logo.png'
import { CardMedia } from '@material-ui/core'

export default () => {
    const styles = {
        nav: {
            borderBottom: '1px solid black',
            backgroundColor: '#313742'
        },
        image: {
            height: '70px'
        }
    }

    return (
        <nav className="navbar navbar-dark" style={styles.nav}>
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src={logo} alt="logo" style={styles.image} className='rounded' />
                </a>
                {/* Button */}
                <button type="button" class="btn btn-outline-success">Login</button>
            </div>
        </nav>
    )
}
