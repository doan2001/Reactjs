import React from 'react'
import { Redirect, Route } from 'react-router'
import { isAuthenticated } from '.'

const PrivateRoute = ({children}) => {
    return (
       <Route render={() =>{
       return isAuthenticated() ? children : <Redirect to={{pathname:"/signin"}}/>//check nếu isAuthen có tồn tại token thì return về children
    //nếu không sẽ về signin
    }}/>
    )
}

export default PrivateRoute
