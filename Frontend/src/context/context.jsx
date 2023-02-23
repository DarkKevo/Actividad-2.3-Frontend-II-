import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const dataContext = createContext();

export function DataContextProvider(props) {
  function CreateUser(user, password, icon) {
    axios
      .post('http://localhost:3000/CreateUser/send', {
        icon: icon,
        user: user,
        pwd: password,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function Login(user, password) {
    axios
      .post('http://localhost:3000/Login/send', {
        user: user,
        pwd: password,
      })
      .then(function (response) {
        if (response.data.message == false) {
          alert('No iniciaste');
        } else {
          console.log(response.data);
          let Session = {
            user: user,
            icon: response.data.icon,
            token: response.data.token,
            id: response.data.id,
          };
          localStorage.setItem('Sesion', JSON.stringify(Session));
          window.location.href = '/inicio';
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function LogOut() {
    window.location.href = '/';
    localStorage.removeItem('Sesion');
  }

  function CargarImagen(descripcion, categoria, id, img, token) {
    const formdata = new FormData();
    formdata.append('image', img);
    formdata.append('categoria', categoria);
    formdata.append('description', descripcion);
    formdata.append('IdUser', id);
    let config = {
      headers: {
        Authorization: `Bearer dgderdgdrg`,
        'Content-Type': 'multipart/form-data',
      },
    };
    axios
      .post('http://localhost:3000/Images/send', formdata, config)
      .then(function (response) {
        console.log(response);
        if (response.data.message == false) {
          alert('Tu Token de Seguridad ha Expirado por favor inicia sesion nuevamente');
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function hola() {
    alert('hi');
  }

  return <dataContext.Provider value={{ hola, CreateUser, Login, LogOut, CargarImagen }}>{props.children}</dataContext.Provider>;
}
