# Hackathon-
Hack The Ocean (Especies en peligro de extincion).

El sistema se comunica de la siguiente manera:

![image](https://user-images.githubusercontent.com/99373164/168496337-fea5801f-8ae0-47b3-b82c-ea3683da14ef.png)

El `front-end` contiene 2 componentes (clases) principales `EspeciesComponent` y `HomeComponent`. `HomeComponent` contiene toda la información de la página principal, `EspeciesComponent` llama a los métodos del back-end a través de los endpoint y hace uso de ellos, muestra a las especies en peligro de extinción y su información, la cual, se guarda en una base de datos.

Se hizo un diseño de pantallas para darse de como se quería que quedara el sistema.

![image](https://user-images.githubusercontent.com/99373164/168497475-dd763da1-4e56-4480-8837-fd211792a297.png)   ![image](https://user-images.githubusercontent.com/99373164/168497484-4dbdcb17-c328-45d0-8e33-eabb53fad887.png)   ![image](https://user-images.githubusercontent.com/99373164/168497494-c0a809bd-0908-4c17-8e61-673a4035d440.png)   ![image](https://user-images.githubusercontent.com/99373164/168497524-d3421555-fc54-400b-91ab-7b5c7d1c0d95.png)

El propósito de este sitio web es informar a la población en general acerca de las especies en peligro de extinción con el fin de concientizar y comenzar a tomar acciones para minimizar el riesgo de extinción y aumentar la posibilidad de preservar diferentes especies.


Por ahora, la aplicación solo corre de manera local, para correr el front-end es necesario hacer `npm install` para que se genere una carpeta llamada `node_modules` y para que se actualice el archivo `package-lock.json`. Una vez instaladas las dependencias, se ejecuta el comando `npm run dev`. Por el momento la página luce de esta manera:



https://user-images.githubusercontent.com/99373164/168507885-91a08390-3acd-4994-bc6c-ea4583011862.mp4




Es necesario clonar y correr el proyecto de Back-end para que se muestren las imágenes y la información de las especies sin problema.

Repositorio del Back-end: https://github.com/Julioadriglez/casi-extinto.git


