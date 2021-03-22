import React from 'react'
import NavBar from '../Global/NavBar'

import logo from '../../upload/img/logo.png'
import avatar from '../../upload/img/avatar.jpg'
import Footer from '../Global/Footer'



export default () => {
    // Временно
    const rankList = [['Разработчик', '#eb4034'], ['Новичок', '#cf34eb']].map(el => {
        return (<div className='d-block text-uppercase' style={{ color:el[1] }}>{el[0]}</div>)
    })
    const regestration = '11.02.2020'
    // 

    const styles = {
        body: {
            backgroundColor: '#292E39',
        },
        container: {
            backgroundColor: '#313742',
            width: '100%',
            marginTop: '100px'
        },
        image: {
            width: '200px',
            height: '200px'
        },
        nickname: {
            fontSize: '40px',
            color: '#fff'
        },
        regestration: {
            fontSize: '18px',
            color: '#fff'
        },
        bio: {
            maxWidth: '500px',
            color: '#fff',
            border: '2px solid black',
            borderRadius: '10%',
        },
        post: {
            backgroundColor: '#13ce66',
            color: '#fff',
            padding: '10px 15px',
            float: 'right',
        }
    }
    return (
        <div className="userCard min-100-vh" style={styles.body}>
        < NavBar />
        <div className="container" style={styles.container}>
            <div className="row p-5">
            <div className="leftContainer col-xl-3 p-0">
            <div className="avatar d-flex align-items-center">
                <img src={avatar} alt="Avatar" style={styles.image} />
            </div>
            {/* <div className="badges">
                <span className="badgeDev" style={{ padding: '10px 15px', color: '#5568b3'}}>
                <i className="bi bi-hammer p-2" style={{ transform: 'rotate(-20deg)', background: '#fff'}}></i>
                Разработчик
                </span>
            </div>  */}
            <div className="userInfo card pt-3" style={{ background: '#23282E', marginTop: '60px', }}>
            <div className="regestration" style={styles.regestration}>Регистрация: {regestration}</div>
            <div className="active" style={styles.regestration}>Последняя активность: {regestration}</div>
            <div className="mt-3 text-white" style={{ fontSize: "18px" }}>
                <div>Сообщений: 50</div>
                {/* <div>Публикаций: 50</div> */}
            </div>
            </div>
            </div>
            <div className="rightContainer col-xl-9 p-0 ">
                <div className="nickname float-left text-center" style={styles.nickname}>Vivers</div>
                <div className="rank d-block text-center">{rankList}</div>
                <div className="container bio text-center mt-3 p-3 " style={styles.bio}>
                    Небольшое поле для написания личной активности, как в Дискорде:)
                </div>
                <div className="postCard container mt-5">
                <div className="card" style={{ background: '#242930'}}>
                <div className="card-body p-0" >
                    <textarea placeholder="Что нового?" id="" className="p-3" style={{ background: '#292E39', color: 'white', width: '100%', height: '144px', border: 'none'}}></textarea>
                </div>
                <div className="card-footer">
                    <a href=""><div className="postButton btn btn-success" style={styles.post}>Отправить</div></a>
                </div>
            </div>
            <div className="messages" style={{ marginTop: '50px' }}>
                <div className="card" style={{ border: 'none'}}>
                    <div className="card-header d-flex" style={{ background: '#23282E' }}>
                        <img src={logo} alt="Avatar" style={{ maxWidth: '32px'}} />
                        <div className="nick ml-5 text-white">Vivers</div>
                    </div>
                    <div className="card-body p-3 text-white" style={{ background: '#292E39' }}><p className="m-0">Тестовая запись</p></div>
                </div>
            </div>
                </div>
            </div>
        </div>
        </div>
        <Footer />
        </div>
    )
} 