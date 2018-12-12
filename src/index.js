const requester = require("node-superfetch");

class WeezAPI {
    constructor(token) {
        this.token = token;
    }
    
    async trump(text) {
        let res = await requester.get(`http://weez.pw/api/trump?texto=${text}`).set("clave", this.token)
        if (res.body.mensaje) return new Error(res.body.mensaje)
        return res.body
    }
    async basura(url) {
        let res = await requester.get(`http://weez.pw/api/basura?avatar=${url}`).set("clave", this.token)
        if (res.body.mensaje) return new Error(res.body.mensaje)
        return res.body
    }
    async drake(yes, no) {
        let res = await requester.get(`http://weez.pw/api/drake?si=${yes}&no=${no}`).set("clave", this.token)
        if (res.body.mensaje) return new Error(res.body.mensaje)
        return res.body
    }
    async rainbow(url) {
        let res = await requester.get(`http://weez.pw/api/rainbow?avatar=${url}`).set("clave", this.token)
        if (res.body.mensaje) return new Error(res.body.mensaje)
        return res.body
    }
    async coche(yes, no) {
        let res = await requester.get(`http://weez.pw/api/coche?si=${yes}&no=${no}`).set("clave", this.token)
        if (res.body.mensaje) return new Error(res.body.mensaje)
        return res.body
    }
    async gru(txt1, txt2, txt3) {
        let res = await requester.get(`http://weez.pw/api/gru?op1=${txt1}&op2=${txt2}&op3=${txt3}`).set("clave", this.token)
        if (res.body.mensaje) return new Error(res.body.mensaje)
        return res.body
    }
    
    ///////////////////////////
    //
    // RANDOM
    //
    //////////////////////////

    async randomLoli() {
        let res = await requester.get(`http://weez.pw/api/random/loli`).set("clave", this.token)
        if (res.body.success == "false") return new Error(body.mensaje)
         return res.body.link
    }
    async randomTrap() {
        let res = await requester.get(`http://weez.pw/api/random/trap`).set("clave", this.token)
        if (res.body.success == "false") return new Error(body.mensaje)
         return res.body.link
    }
    async randomBoys() {
        let res = await requester.get(`http://weez.pw/api/random/boys`).set("clave", this.token)
        if (res.body.success == "false") return new Error(body.mensaje)
         return res.body.link
    }
    async randomPat() {
        let res = await requester.get(`http://weez.pw/api/random/pat`).set("clave", this.token)
        if (res.body.success == "false") return new Error(body.mensaje)
         return res.body.link
    }
    async randomBeso() {
        let res = await requester.get(`http://weez.pw/api/random/beso`).set("clave", this.token)
        if (res.body.success == "false") return new Error(body.mensaje)
         return res.body.link
    }
    async randomAbrazo() {
        let res = await requester.get(`http://weez.pw/api/random/abrazo`).set("clave", this.token)
        if (res.body.success == "false") return new Error(body.mensaje)
         return res.body.link
    }
    async randomEdgy() {
        let res = await requester.get(`http://weez.pw/api/random/edgy`).set("clave", this.token)
        if (res.body.success == "false") return new Error(body.mensaje)
         return res.body.link
    }
    async randomMeme() {
        let res = await requester.get(`http://weez.pw/api/random/meme`).set("clave", this.token)
        if (res.body.success == "false") return new Error(body.mensaje)
         return res.body.link
    }
    
}
module.exports = WeezAPI;
