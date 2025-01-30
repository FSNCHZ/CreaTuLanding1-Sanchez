#Proyecto ReactJS CoderHouse

Este proyecto consta de un e-commerce desarrollado utilizando ReactJS como entorno de programación.
Se utilizó Firestore para utilizar como base de datos, y realizar operaciones con la misma.
El e-commerce es de vestimenta, los productos fueron creados por mí, y las imagenes fueron sacadas de internet.
Consta de 3 páginas principales, Home, Productos y Contacto.
En Home solamente se puede ver un mensaje de bienvenida, al igual que en Contacto solo se puede ver un mensaje de "Contactanos" y un número falso.
En el apartado Productos, podremos desplegar un menú que nos llevará a distintas páginas, las cuales se acceden a traves del router de React.
En "Todos los productos" podremos ver todos los productos listados. Y en las distintas categorias tendremos productos listados según la categoria que se elija.
Cada producto posee un boton de "Detalle del producto" el cual nos mostrará una breve descripción del producto y la posibilidad de elegir la cantidad de productos que se quiera almacenar en el carrito.
En el carrito se mostrarán los productos que se hayan guardado en el mismo, los datos de los productos(precio unitario y precio total) y podremos vaciarlo enteramente o completar la compra.
En el checkout podremos ingresar nuestros datos, los cuales una vez que apretemos el boton de "Enviar", enviará los datos a Firestore y los almacenará. La página nos devolverá un mensaje diciendo que la compra se ha realizado, y nos dará el codigo de la compra.