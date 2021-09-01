import React from 'react'

const Resetpasswd = () => {
    return (
        <section id="login-user">
            <div className="title-login">
                <h1>Quên mật khẩu</h1>
                <hr />
            </div>
            <div className="check-login">
                <div className="title-reset-passwd">
                    <h2>Phục hồi mật khẩu</h2>
                    <div className="email-user">
                        <input type="text" placeholder="   Email" />
                    </div>
                    <div className="click-login">
                        <div className="button-login">
                            <input className="btn" type="submit" defaultValue="Gửi đi" />
                        </div>
                        <div className="registration-user">
                            <a style={{ margin: '30px 0px' }} href="#/login">
                                <p style={{ margin: '10px 0px', marginLeft: '-40px' }}>
                                    Hủy
            </p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Resetpasswd
