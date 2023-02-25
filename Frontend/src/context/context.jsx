import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const dataContext = createContext();

export function DataContextProvider(props) {
  const [imagenes, setImagenes] = useState('');

  function TraerImagenes() {
    axios
      .get('http://localhost:3000/Images')
      .then((response) => {
        let data = response.data;
        setImagenes(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function EliminarImagen(Id, token) {
    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    };
    axios
      .delete(`http://localhost:3000/Delete/${Id}`, config)
      .then((res) => {
        setImagenes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

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

  function Favorite(Id, user, token) {
    console.log(Id, user, token);
    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .post(
        'http://localhost:3000/Favorite',
        {
          Id: Id,
          user: user,
        },
        config
      )
      .then(function (response) {
        console.log(response);
        if (response.data.message == false) {
          alert('Tu Token de Seguridad ha Expirado por favor inicia sesion nuevamente');
        } else {
          TraerImagenes();
        }
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
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    };
    axios
      .post('http://localhost:3000/Images/send', formdata, config)
      .then(function (response) {
        console.log(response);
        if (response.data.message == false) {
          alert('Tu Token de Seguridad ha Expirado por favor inicia sesion nuevamente');
        } else {
          TraerImagenes();
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function EditImage(descripcion, categoria, id, img, token) {
    const formdata = new FormData();
    formdata.append('image', img);
    formdata.append('categoria', categoria);
    formdata.append('description', descripcion);
    formdata.append('id', id);
    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    };
    axios
      .put('http://localhost:3000/Edit', formdata, config)
      .then(function (response) {
        console.log(response);
        if (response.data.message == false) {
          alert('Tu Token de Seguridad ha Expirado por favor inicia sesion nuevamente');
        } else {
          TraerImagenes();
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function hola() {
    alert('hi');
  }

  useEffect(() => {
    TraerImagenes();
  }, []);

  return (
    <dataContext.Provider value={{ hola, CreateUser, Login, LogOut, CargarImagen, imagenes, EliminarImagen, EditImage, Favorite }}>
      {props.children}
    </dataContext.Provider>
  );
}
