import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

export const dataContext = createContext();

export function DataContextProvider(props) {
  const [imagenes, setImagenes] = useState('');

  const [target, setTarget] = useState('');

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
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Eliminado',
          showConfirmButton: false,
          timer: 1200,
        });
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
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Token Expirado',
            showConfirmButton: false,
            timer: 1500,
          });
        }
        TraerImagenes();
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
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Datos Invalidos',
            showConfirmButton: false,
            timer: 1500,
          });
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

  function CargarImagen(descripcion, categoria, id, img, token, user) {
    const formdata = new FormData();
    formdata.append('image', img);
    formdata.append('categoria', categoria);
    formdata.append('description', descripcion);
    formdata.append('IdUser', id);
    formdata.append('user', user);
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
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Token Expirado',
            showConfirmButton: false,
            timer: 1500,
          });
        }
        TraerImagenes();
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Imagen Cargada',
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch(function (error) {
        console.log(error);
        TraerImagenes();
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
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Token Expirado',
            showConfirmButton: false,
            timer: 1500,
          });
        }
        TraerImagenes();
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Imagen Cargada',
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function FavoritosMy(user) {
    axios
      .get('http://localhost:3000/Favoritos')
      .then((response) => {
        let a = response.data.filter((element) => element.favorite.includes(user));
        setImagenes(a);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function Perfil(id) {
    axios
      .post('http://localhost:3000/Perfil', {
        id: id,
      })
      .then((response) => {
        let a = response.data;
        setImagenes(a);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function RenderCategoria_Autor(categoria, autor) {
    axios
      .post('http://localhost:3000/Images/search', {
        categoria: categoria,
        autor: autor,
      })
      .then((response) => {
        let a = response.data;
        setImagenes(a);
      })
      .catch((error) => {
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
    <dataContext.Provider
      value={{
        hola,
        CreateUser,
        Login,
        LogOut,
        CargarImagen,
        imagenes,
        EliminarImagen,
        EditImage,
        Favorite,
        target,
        setTarget,
        RenderCategoria_Autor,
        FavoritosMy,
        TraerImagenes,
        Perfil,
      }}
    >
      {props.children}
    </dataContext.Provider>
  );
}
