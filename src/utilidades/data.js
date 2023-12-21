const productos = [
    {
        id: 'abc123',
        nombre: 'Remera',
        description:'asdasd',
        precio: 12000,
        talle: 'xl',
        image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ2q9ovHgMKEUGu7vuhx102gZUxjiJbmPJrI7aK413XnyM5k9CJfXqQ8DDu79BEAzLBUrBWPJbwHLIp499LaFYtGp6DRCkDUkrsQx15Qledd6Bwe7i9pakj6vU&usqp=CAE',
    },
    {
        id: 'abc456',
        nombre: 'Pantalon',
        description:'asdasd',
        precio: 20000,
        talle: 'l',
        image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ8_eNViAS9rCVLJsdCiQ4DmbYozSRQYW25XEQuNpwbOdiJa9WsBpaSXTToQoZww0twxoENh49rvlovJzAz7oV0ZMxI3eYqTihPT-rKchM6QjacsmWgyrwW&usqp=CAE',
    },
    {
        id: 'abc789',
        nombre: 'Campera',
        description:'asdasd',
        precio: 25000,
        talle: 'm',
        image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQc_DGnIYSHpl-GNwWYQf0gO4fS4DM69RMKyNuXudSS-29hpnJfDaW3HTGscRMntdN7JBICykBMnbRZUuLPvHiRIDXa_nkGJ72wC9MSAlCjkY0dv4YMlEzPEA&usqp=CAE',
    },

]

const obtenerProductos = new Promise ((resolve, reject)=>{
    setTimeout(()=>{
        resolve(productos);
    }, 2000)
 }
)

export default obtenerProductos