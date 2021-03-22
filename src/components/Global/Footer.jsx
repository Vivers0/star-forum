import { colors } from '@material-ui/core'
import React from 'react'

export default () => {
    const styles = {
        footer: {
            backgroundColor: '#313742',
             color: '#fff',
             borderTop: '1px solid black',
             marginTop: '100px',
        },
        discord: {
            background: '#7289da',
            padding: '10px 20px',
            borderRadius: '5px',
            fontSize: '14px',
        } 
    }
    return (
        <footer class="page-footer font-small" style={styles.footer}>
            <div className="container py-3">
            <div className="d-flex justify-content-between">
                <div class="footer-copyright text-center py-3">© 2021 Copyright: StarRevenge</div>
                <a href="" style={{ color: '#fff', cursor: 'pointer', textDecoration: 'none' }}><div className="discordButton mt-2" style={styles.discord}>Discord</div></a>
            </div>
            </div>
        </footer>
    )
}