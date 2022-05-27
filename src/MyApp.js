import React from 'react'
import { Provider } from 'react-redux'

import MenuCard from './components/MenuCard'
import RegisterCard from './components/RegisterCard'
import store from './state/store'
import "./styles/App.css"

const MyApp = () => {
    return (
        <Provider store={store}>
            <div className='app_container'>
                <MenuCard/>
                <RegisterCard/>
            </div>
        </Provider>
    )
}

export default MyApp

