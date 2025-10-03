import React, { Component } from "react";



class User extends React.Component {

    componentWillUnmount() {
        alert("Пользователь удалён");
    }

    render() {
        return (
            <div>
                <ul>
                    <li>Name: Anna</li>
                    <li>Email: anna@mail.ru</li>
                    <li>Contect: +7 999 123-23-23</li>
                </ul>
            </div>
        )
    }
}

export default User;