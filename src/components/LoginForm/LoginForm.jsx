import React, {useEffect, useState} from 'react';
import './LoginForm.css';
import Button from "../Button/Button";
import {useTelegram} from "../../hooks/useTelegram";

const LoginForm = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const {tg} = useTelegram();

    useEffect(()=>{
        tg.MainButton.setParams({
            text: 'Войти'
        })
    }, []);

    useEffect(() => {
        if (!login || !password) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }, [login, password])

    const onChangeLogin = (e) => {
        setLogin(e.target.value)
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const sendLoginData = async () => {
        let data = {
            request: 'login',
            login: login,
            password: password
        }

        let response = await fetch('https://show.doczilla.pro/request.json', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(data)
        })

        console.log(await response.json())
    }

    return (
        <div className={'loginForm'}>
            <h3>Авторизация</h3>
            <input
                className={'input'}
                type="text"
                placeholder={'Логин'}
                value={login}
                onChange={onChangeLogin}
            />
            <input
                className={'input'}
                type="password"
                placeholder={'Пароль'}
                value={password}
                onChange={onChangePassword}
            />
            <Button onClick={sendLoginData}>Войти</Button>
        </div>
    );
};

export default LoginForm;