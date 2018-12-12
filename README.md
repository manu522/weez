![](https://i.imgur.com/PRfsYKP.png)

![](https://travis-ci.org/botsdemanu/weez.svg?branch=master)

Wrapper oficial de [Wezz API](https://www.weez.pw "Wezz API")

Si quieres ver una documentación más avanzada y ver ejemplos de cada función, visita https://api.weez.pw

# Instalación
Para poder usar el Wrapper necesitamos una clave, si no la tienes, registrate [aquí](https://www.weez.pw "aquí")

Para instalar simplemente hacemos

```bash
npm install weez-wrapper
```



# USO

```js
var weezAPI = require("weez-wrapper");
var weez = new weezAPI("TU-CLAVE");
```
## Listado de todos las funciones
Todos devuelven una **Promesa**
```js
weez.trump("Texto de la nueva ley")
weez.basura("Imagen URL")
weez.drake("URL sí", "URL no")
weez.coche("URL sí", "URL no")
weez.rainbow("Imagen URL")
weez.gru("texto1, texto2, texto3")

weez.randomLoli()
weez.randomTrap()
weez.randomBoys()
weez.randomPat()
weez.randomBeso()
weez.randomAbrazo()
weez.randomEdgy()
weez.randomMeme()
```

## Ejemplo de Uso

**Drake**
```js
  var weezAPI = require("weez-wrapper");
  var weez = new weezAPI("Clave");
  
// Obtengo una de las imágenes por mención
 let member = message.mentions.users.first()

let img = await weez.drake(message.author.displayAvatarURL, member.displayAvatarURL)

message.channel.send({files: [img]})
```
Resultado:

![](https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-LSlbQwSYkL8QUnuee99%2F-LTDD6OQnCVaMq5lh92E%2F-LTDDvBjUqF_Gird1PwI%2Frsz_1drakee.jpg?alt=media&token=cd357e32-9eb6-4d73-b380-44cb63fcfd14)


**Random Loli**
```js
var weezAPI = require("weez-wrapper");
var weez = new weezAPI("Clave");
  
let link = await weez.randomLoli()

//Preferible mandarlo en un Embed ya que la respuesta es un link
let embed = new Discord.RichEmbed()
.setImage(link);
message.channel.send(embed)
```
Resultado:

![](https://i.gyazo.com/87e511c0efee8e804b8c3ff7b63cd169.png)
