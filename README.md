![](https://i.imgur.com/PRfsYKP.png)

Wrapper oficial de [Wezz API](https://www.weez.pw "Wezz API")

Weez es un Application Programming Interface (API) con una base de datos de imagenes y funciones de edición de plantillas, está pensado para el uso en Bots de Discord, pero cualquier aplicación puede hacer uso de las funciones por medio de pedidos HTTP


Si quieres ver una documentación más avanzada y ver ejemplos de cada función, visita https://api.weez.pw

# Instalación
Para poder usar el Wrapper necesitamos una clave, si no la tienes, registrate [aquí](https://www.weez.pw "aquí")

Para instalar simplemente hacemos

```bash
npm install weez
```



# USO

```js
var Weez = require("weez");
var weez = new Weez.WeezAPI("TU-CLAVE");
```
## Listado de todos las funciones
Todos devuelven una **Promesa**
```js
// edicion de imagenes
weez.trump("Texto de la nueva ley")
weez.basura("Imagen URL")
weez.drake("URL sí", "URL no")
weez.coche("URL sí", "URL no")
weez.rainbow("Imagen URL")
weez.gru("texto1, texto2, texto3")
weez.estoes("avatar, texto")
weez.logro("texto")
weez.cerebro("texto1, texto2, texto3, texto4")
weez.susto("avatar")
weez.wasted("avatar")
weez.bob("avatar")
weez.eyes("texto1, texto2, texto3")
weez.triggered("avatar") // <-- Animado
weez.psicopata("avatar")
weez.elegante("texto1","texto2")
weez.bart("avatar")
weez.olvido("avatar")
weez.arte("avatar")

// Misc
weez.letra("canción")

// imagenes random
weez.randomLoli()
weez.randomTrap()
weez.randomBoys()
weez.randomPat()
weez.randomBeso()
weez.randomAbrazo()
weez.randomEdgy()
weez.randomMeme()

//Bienvenida (constructor)
weez.Bienvenida()

```

## Ejemplo de Uso

**Drake**
```js
var Weez = require("weez");
var weez = new Weez.WeezAPI("TU-CLAVE");
  
// Obtengo una de las imágenes por mención
 let member = message.mentions.users.first()

let img = await weez.drake(message.author.displayAvatarURL, member.displayAvatarURL)

message.channel.send({files: [img]})
```
Resultado:

![](https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-LSlbQwSYkL8QUnuee99%2F-LTDD6OQnCVaMq5lh92E%2F-LTDDvBjUqF_Gird1PwI%2Frsz_1drakee.jpg?alt=media&token=cd357e32-9eb6-4d73-b380-44cb63fcfd14)


**Random Loli**
```js
var Weez = require("weez");
var weez = new Weez.WeezAPI("TU-CLAVE");
  
let link = await weez.randomLoli()

//Preferible mandarlo en un Embed ya que la respuesta es un link
let embed = new Discord.RichEmbed()
.setImage(link);
message.channel.send(embed)
```
Resultado:

![](https://i.gyazo.com/87e511c0efee8e804b8c3ff7b63cd169.png)

**Bienvenida**

```js

const Weez = require('weez')

let weez = new Weez.WeezAPI("TU-CLAVE")

  let bienvenida = new Weez.Bienvenida()
  .avatar(member.user.displayAvatarURL)
  .fondo("https://i.imgur.com/0YrfJgx.jpg")
  .textoTitulo(`Bienvenido ${member.user.username}`)
  .textoDesc("Disfruta de tu tiempo aqui!")
  .textoColor('ffffff') 
  .acceso(weez)

let img = await Weez.bienvenidaRender(bienvenida)

member.guild.channels.get("ID del canal").send({files: [img]})
```

Resultado:

![](https://cdn.discordapp.com/attachments/496311867929788416/526612479514509327/file.jpg)


**Letra**

```js

const Weez = require('weez')

let weez = new Weez.WeezAPI("TU-CLAVE")

 let song = await weez.letra("El sensei - Las pastillas del Abuelo")

 console.log(song.letra) // <--- la letra de la canción, en ella hay \n separando la indentación

 console.log(song.imagen) // <--- link a la portada de la canción

 // Obviamente se puede mandar en un embed, message.channel.send() y en donde quieran
 // digo por las dudads.

 // Si no encuentra letra, se va a crear la propiedad .mensaje la cual va a decir que no la encontro,
 // puedes simplemente hacer:
 // if(song.mensaje) return console.log('No se encontro la letra')
 //  y listo
```
