(this["webpackJsonpweather-app"] = this["webpackJsonpweather-app"] || []).push([[0], { 13: function (e, t, a) { e.exports = { ciudad: "Ciudad_ciudad__2AwgF", container: "Ciudad_container__3KWMN", df: "Ciudad_df__V3mlu", card__title: "Ciudad_card__title__3Y5lQ", card__info: "Ciudad_card__info__3UETk" } }, 14: function (e, t, a) { e.exports = { top: "Nav_top__3bqAQ", top__rigth: "Nav_top__rigth__17hD6", top__links: "Nav_top__links__2InTh", top__title: "Nav_top__title__1mPgL", top__img: "Nav_top__img__3Ymsd", top__grados: "Nav_top__grados__1lAtX" } }, 17: function (e, t, a) { e.exports = { cont: "About_cont__147SM", container: "About_container__1JUpk", df: "About_df__3skeL", card__title: "About_card__title__vZjHz", card__info: "About_card__info__1jB0q" } }, 24: function (e, t, a) { e.exports = { search: "SearchBar_search__2VskN", search__input: "SearchBar_search__input__1S8HV", search__button: "SearchBar_search__button__hOek8" } }, 38: function (e, t, a) { e.exports = { cards: "Cards_cards__1wa0p" } }, 45: function (e, t, a) { }, 57: function (e, t, a) { "use strict"; a.r(t); var c = a(1), n = a.n(c), i = a(20), r = a.n(i), s = (a(45), a(5)), d = a(12), o = a(35), _ = a(39), u = a(15), l = "[Saving] Guardando ciudad", j = "[Del] Borrando ciudad", b = "[Change measure] Cambiano medida de temp", m = { cities: [], grados: !1 }, p = Object(d.c)({ wh: function () { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m, t = arguments.length > 1 ? arguments[1] : void 0; switch (t.type) { case l: return Object(u.a)(Object(u.a)({}, e), {}, { cities: [].concat(Object(_.a)(e.cities), [t.payload]) }); case j: return Object(u.a)(Object(u.a)({}, e), {}, { cities: e.cities.filter((function (e) { return e.id !== t.payload })) }); case b: return Object(u.a)(Object(u.a)({}, e), {}, { grados: !e.grados }); default: return e } } }), h = "undefined" !== typeof window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || d.d, O = Object(d.e)(p, h(Object(d.a)(o.a))), x = a(11), f = a(4), g = a(17), v = a.n(g), N = a(2), w = function () { return Object(N.jsx)("div", { className: v.a.cont, children: Object(N.jsxs)("div", { className: v.a.container, children: [Object(N.jsx)("div", { className: v.a.df, children: Object(N.jsx)("span", { className: v.a.card__title, children: "About:" }) }), Object(N.jsxs)("div", { className: v.a.card__info, children: [Object(N.jsx)("div", { children: "Bienvenidos a esta app, realizada con la tecnologia de React." }), Object(N.jsx)("div", { children: "Ahora que estoy estudiando react he visto la facilidad que es realizar una pagina con lo ultimo en tecnologia. Por ello, aprovechando al maximo esta libreria, y con la ayuda de Henry, se hizo esta App que nos muestra la temperatura y algunos datos del clima de una ciudad a vuestra eleccion." })] })] }) }) }, C = a(13), y = a.n(C), k = a(22), A = a(36), S = a(30), M = function () { var e = Object(s.c)((function (e) { return e.wh })), t = e.cities, a = e.grados, c = Object(f.f)().id, n = t.find((function (e) { return e.id === Number.parseInt(c) })), i = { pais: n.sys.country, min: Math.round(n.main.temp_min), max: Math.round(n.main.temp_max), img: n.weather[0].icon, id: n.id, wind: n.wind.speed, temp: n.main.temp, name: n.name, weather: n.weather[0].main, clouds: n.clouds.all, latitud: n.coord.lat, longitud: n.coord.lon }; return Object(N.jsx)("div", { className: y.a.ciudad, children: Object(N.jsxs)("div", { className: y.a.container, children: [Object(N.jsxs)("div", { className: y.a.df, children: [Object(N.jsx)("span", { className: y.a.card__title, children: i.name }), Object(N.jsx)("img", { className: y.a.card__bandera, src: "https://www.countryflags.io/".concat(i.pais, "/shiny/64.png"), alt: "{ciudad.name}" })] }), Object(N.jsxs)("div", { className: y.a.card__info, children: [Object(N.jsxs)("div", { children: [Object(N.jsx)(k.b, {}), " Temperatura: ", function (e, t) { return e ? Math.floor(9 * t / 5 + 32) + "\xb0F" : Math.floor(t) + "\xb0C" }(a, i.temp)] }), Object(N.jsxs)("div", { children: [Object(N.jsx)(k.a, {}), " Clima: ", i.weather] }), Object(N.jsxs)("div", { children: [Object(N.jsx)(k.c, {}), " Viento: ", i.wind, " km/h"] }), Object(N.jsxs)("div", { children: [Object(N.jsx)(A.a, {}), " Cantidad de nubes: ", i.clouds] }), Object(N.jsxs)("div", { children: [Object(N.jsx)(S.a, {}), " Latitud: ", i.latitud, "\xba"] }), Object(N.jsxs)("div", { children: [Object(N.jsx)(S.a, {}), " Longitud: ", i.longitud, "\xba"] })] })] }) }) }, L = a(40), B = a(31), I = a.n(B), T = a(37), D = a(23), E = a.n(D), H = function (e, t) { return !!t.find((function (t) { return t.id === e })) }, q = function (e) { return { type: l, payload: e } }, V = a(24), P = a.n(V); function U() { var e = Object(c.useState)(""), t = Object(L.a)(e, 2), a = t[0], n = t[1], i = Object(s.c)((function (e) { return e.wh })).cities, r = Object(s.b)(); return Object(N.jsx)("div", { className: P.a.search, children: Object(N.jsxs)("form", { onSubmit: function (e) { e.preventDefault(), r(function (e, t) { return function () { var a = Object(T.a)(I.a.mark((function a(c) { var n, i; return I.a.wrap((function (a) { for (; ;)switch (a.prev = a.next) { case 0: return a.prev = 0, a.next = 3, fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(e, "&appid=").concat("4ae2636d8dfbdc3044bede63951a019b", "&units=metric")); case 3: return n = a.sent, a.next = 6, n.json(); case 6: 200 === (i = a.sent).cod ? (i.date = (new Date).toLocaleTimeString("en-US"), H(i.id, t) ? E.a.fire("La ciudad ya esta guardada", "", "success") : (c(q(i)), E.a.fire("Ciudad encontrada!", "", "success"))) : E.a.fire("Ciudad no encontrada", i.msg, "error"), a.next = 13; break; case 10: a.prev = 10, a.t0 = a.catch(0), console.log(a.t0); case 13: case "end": return a.stop() } }), a, null, [[0, 10]]) }))); return function (e) { return a.apply(this, arguments) } }() }(a, i)), n("") }, children: [Object(N.jsx)("input", { className: P.a.search__input, type: "text", id: "ciudad", placeholder: "Ciudad...", onChange: function (e) { n(e.target.value) }, value: a }), Object(N.jsx)("button", { className: P.a.search__button, type: "submit", children: "Agregar" })] }) }) } var W = a(14), z = a.n(W), F = function () { var e = Object(s.c)((function (e) { return e.wh })).grados, t = Object(s.b)(); return Object(N.jsxs)("div", { className: z.a.top, children: [Object(N.jsxs)(x.b, { to: "/", className: z.a.top__title, children: [Object(N.jsx)("img", { className: z.a.top__img, src: "https://i.pinimg.com/originals/ba/66/18/ba6618ac635ea544ce59862296674d3b.png", alt: "clima" }), "Henry - Weather app"] }), Object(N.jsxs)("div", { className: z.a.top__rigth, children: [Object(N.jsx)(x.b, { className: z.a.top__links, to: "/about", children: "About" }), Object(N.jsxs)("div", { onClick: function () { t({ type: b }) }, className: z.a.top__grados, children: ["Ver en \xb0", e ? "C" : "F"] }), Object(N.jsx)(U, {})] })] }) }, G = a(38), J = a.n(G), X = a(9), Q = a.n(X), R = function () { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0; return e <= 10 ? { backgroundImage: 'url("https://i.ibb.co/HCLCWrG/image.jpg")' } : e > 10 && e <= 20 ? { backgroundImage: 'url("https://i.ibb.co/mDWbbBS/10.jpg")' } : e > 20 && e <= 30 ? { backgroundImage: 'url("https://i.ibb.co/g98sgBx/20.jpg")' } : { backgroundImage: 'url("https://i.ibb.co/pKj1HsT/30.jpg")' } }; function K(e) { var t = e.city, a = Object(s.c)((function (e) { return e.wh })).grados, c = Object(s.b)(), n = { pais: t.sys.country, min: Math.round(t.main.temp_min), max: Math.round(t.main.temp_max), img: t.weather[0].icon, id: t.id, wind: t.wind.speed, temp: t.main.temp, name: t.name, weather: t.weather[0].main, clouds: t.clouds.all, latitud: t.coord.lat, longitud: t.coord.lon, time: t.date }, i = function (e, t) { return e ? Math.floor(9 * t / 5 + 32) + "\xb0F" : Math.floor(t) + "\xb0C" }, r = function (e) { c(function (e) { return { type: j, payload: e } }(e)) }; return Object(N.jsxs)("div", { className: Q.a.card, style: R(n.temp), children: [Object(N.jsx)(x.b, { to: "/ciudad/".concat(n.id), className: Q.a.card__title, children: Object(N.jsx)("span", { className: Q.a.city, children: n.name }) }), Object(N.jsxs)("div", { className: Q.a.col2, children: [Object(N.jsx)("button", { className: Q.a.button, onClick: function () { return r(n.id) }, children: "X" }), Object(N.jsxs)("div", { className: Q.a.card__data, children: [Object(N.jsx)("div", { className: Q.a.temp__number, children: "Temp:" }), Object(N.jsxs)("div", { children: ["Min: ", i(a, n.min)] }), Object(N.jsxs)("div", { children: ["Max: ", i(a, n.max), "  "] }), Object(N.jsx)("div", { className: Q.a.icon, children: Object(N.jsx)("img", { className: Q.a.icon__image, src: "https://openweathermap.org/img/wn/".concat(n.img, "@2x.png"), alt: n.name }) })] }), Object(N.jsxs)("div", { className: Q.a.temp, children: [Object(N.jsx)("div", { className: Q.a.temp__temp, children: i(a, n.temp) }), Object(N.jsx)("div", { className: Q.a.temp__time, children: n.time })] })] })] }) } function Y() { var e = Object(s.c)((function (e) { return e.wh })), t = e.cities; e.grados; return Object(N.jsx)("div", { className: J.a.cards, children: null === t || void 0 === t ? void 0 : t.map((function (e) { return Object(N.jsx)(K, { city: e }, e.id) })) }) } var Z = function () { return Object(N.jsxs)(x.a, { children: [Object(N.jsx)(F, {}), Object(N.jsxs)(f.c, { children: [Object(N.jsx)(f.a, { path: "/about", children: Object(N.jsx)(w, {}) }), Object(N.jsx)(f.a, { path: "/ciudad/:id", children: Object(N.jsx)(M, {}) }), Object(N.jsx)(f.a, { exact: !0, path: "/", children: Object(N.jsx)(Y, {}) })] })] }) }; function $() { return Object(N.jsx)(s.a, { store: O, children: Object(N.jsx)(Z, {}) }) } r.a.render(Object(N.jsx)(n.a.StrictMode, { children: Object(N.jsx)($, {}) }), document.getElementById("root")) }, 9: function (e, t, a) { e.exports = { card: "Card_card__35rAA", card__title: "Card_card__title__3Pe1A", city: "Card_city__Lt5Rt", button: "Card_button__2rsHB", card__data: "Card_card__data__3AGAv", icon: "Card_icon__3Lhkb", icon__image: "Card_icon__image__13Lik", temp__number: "Card_temp__number__ysnxP", col2: "Card_col2__304bQ", temp: "Card_temp__jgJNi", temp__temp: "Card_temp__temp__3bUhh", temp__time: "Card_temp__time__2WgrG" } } }, [[57, 1, 2]]]);
//# sourceMappingURL=main.3bac51dc.chunk.js.map