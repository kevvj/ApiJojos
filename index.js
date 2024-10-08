const express = require('express')
const app = express()
const cors = require('cors')
app.use(express.json())

app.use(cors())

app.get('/',(request, response) => {
    allStands() 
    response.json(allS)
})

app.get('/part/:part',(request, response) => {
    const id = Number(request.params.part)
    const stand = fetchStands(id)
    response.json(stand)
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})


function fetchStands(part) {
    switch(part) {

        case 3:return standspart3
            
        case 4:return standspart4
            
        case 5:return standspart5
          
        case 6:return standspart6
        
        case 7:return standspart7

        case 8:return standspart8
           
        default:allStands() 
        return allS
        
    }
}

let allS = []

const isRepeat = (value) => {
    for (let indice in allS) {
        if (allS[indice].name === value) {
            return true
        }
    }
    return false
}

const fillout = (partJojo) => {
    for (let indice in partJojo) {
        const value = partJojo[indice].name
        if (!isRepeat(value)) {
            allS.push(partJojo[indice])
        }
    }
}


function allStands() {
    fillout(standspart3)
    fillout(standspart4)
    fillout(standspart5)
    fillout(standspart6)
    fillout(standspart7)
    fillout(standspart8)
}


let standspart3 = [
    {name:'Star Platinum',user: 'Jotaro Kujo', part: 'Stardust Crusaders', address: './img/StarPlatinum.png', reference: ['La Estrella (carta del tarot)'], link: ['https://www.lanacion.com.ar/horoscopo/tarot-una-por-una-estas-son-las-78-cartas-nid14102022/']},
    {name:'The World',user: 'DIO', part: 'Stardust Crusaders', address: './img/TheWord.webp', reference: ['El Mundo (carta del tarot)', 'Holy Diver (canciones de DIO)'], link: ['https://en.wikipedia.org/wiki/El_Mundo_(Tarot)','https://open.spotify.com/intl-es/track/3MO8bZe6fOMsn78q83m8Rw?si=8528faa08f6c4e39']},
    {name:'Hermit Purple',user: 'Joseph Joestar', part: 'Stardust Crusaders', address: './img/HermitPurple.webp', reference: ['El Ermitaño (carta del tarot)'], link: ['https://www.lanacion.com.ar/horoscopo/tarot-una-por-una-estas-son-las-78-cartas-nid14102022/']},
    {name:'Hierophant Green',user: 'Noriaki Kakyoin', part: 'Stardust Crusaders', address: './img/HierophantGreen.png', reference: ['El Hierofante (carta del tarot)'], link: ['https://www.lanacion.com.ar/horoscopo/tarot-una-por-una-estas-son-las-78-cartas-nid14102022/']},
    {name:'Ebony Devil',user: 'Devo', part: 'Stardust Crusaders', address: './img/EbonyDevil.webp', reference: ['El Diablo (carta del tarot)'], link: ['https://www.lanacion.com.ar/horoscopo/tarot-una-por-una-estas-son-las-78-cartas-nid14102022/']},
    {name:'Silver Chariot',user: 'Jean Pierre Polnareff', part: 'Stardust Crusaders', address: './img/SilverChariot.png', reference: ['El Carro (carta del tarot)'], link: ['https://www.lanacion.com.ar/horoscopo/tarot-una-por-una-estas-son-las-78-cartas-nid14102022/']},
    {name:'Cream',user: 'Vanilla Ice', part: 'Stardust Crusaders', address: './img/Cream.png', reference: ['Cream (banda británica)'], link: ['https://www.lanacion.com.ar/horoscopo/tarot-una-por-una-estas-son-las-78-cartas-nid14102022/']},
    {name:'Anubis',user: 'Caravan Serai (usuario original)', part: 'Stardust Crusaders', address: './img/anubis.webp', reference: ['Anubis (deidad egipcia)'], link: ['https://www.lanacion.com.ar/horoscopo/tarot-una-por-una-estas-son-las-78-cartas-nid14102022/']},
    {name:"Magician's Red",user: 'Muhammad Avdol', part: 'Stardust Crusaders', address: "./img/Magician's Red.png", reference: ['El Mago (carta del tarot)'], link: ['https://www.lanacion.com.ar/horoscopo/tarot-una-por-una-estas-son-las-78-cartas-nid14102022/']},
    {name:"The Fool",user: 'Iggy', part: 'Stardust Crusaders', address: "./img/The_Fool.webp", reference: ['El Loco (carta del tarot)'], link: ['https://www.lanacion.com.ar/horoscopo/tarot-una-por-una-estas-son-las-78-cartas-nid14102022/']},
    {name:"Tower of Gray",user: 'Gray Fly', part: 'Stardust Crusaders', address: "./img/Tower_of_Gray_Infobox_Manga.png", reference: ['La Torre (carta de tarot)'], link: ['https://www.lanacion.com.ar/horoscopo/tarot-una-por-una-estas-son-las-78-cartas-nid14102022/']},
    {name:"Dark Blue Moon",user: 'Capitán Tennille Impostor', part: 'Stardust Crusaders', address: "./img/Dark_Blue_Moon.webp", reference: ['La Luna (carta de tarot)','Blue Moon (canción de Rodgers y Hart)'], link: ['https://www.lanacion.com.ar/horoscopo/tarot-una-por-una-estas-son-las-78-cartas-nid14102022/', 'https://open.spotify.com/intl-es/track/1sjlyw4Ql963gAiWsoDGOx']},
    {name:"Strength",user: 'Forever', part: 'Stardust Crusaders', address: "./img/Strength.jpg", reference: ['La Fuerza (carta del tarot)'], link: ['https://www.lanacion.com.ar/horoscopo/tarot-una-por-una-estas-son-las-78-cartas-nid14102022/', 'https://open.spotify.com/intl-es/track/1sjlyw4Ql963gAiWsoDGOx']},
    {name:"Ebony Devil",user: 'Devo', part: 'Stardust Crusaders', address: "./img/400px-Ebony_Devil_Infobox_Anime.png", reference: ['El Diablo (carta del tarot)'], link: ['https://www.lanacion.com.ar/horoscopo/tarot-una-por-una-estas-son-las-78-cartas-nid14102022/']},
    {name:"Yellow Temperance",user: 'Rubber Soul', part: 'Stardust Crusaders', address: "./img/YellowTemperance.jpg", reference: ['La Templanza (carta del tarot)'], link: ['https://www.lanacion.com.ar/horoscopo/tarot-una-por-una-estas-son-las-78-cartas-nid14102022/']},
    {name:"Hanged Man",user: 'J. Geil', part: 'Stardust Crusaders', address: "./img/400px-Hanged_Man_Infobox_Manga.png", reference: ['El Colgado (carta del tarot)'], link: ['https://www.lanacion.com.ar/horoscopo/tarot-una-por-una-estas-son-las-78-cartas-nid14102022/']},
    {name:"Emperor",user: 'Hol Horse', part: 'Stardust Crusaders', address: "./img/400px-Emperor_Infobox_Anime.png", reference: ['El Emperador (carta del tarot)'], link: ['https://www.lanacion.com.ar/horoscopo/tarot-una-por-una-estas-son-las-78-cartas-nid14102022/']},
    {name:"Wheel of Fortune",user: 'Wheel of Fortune', part: 'Stardust Crusaders', address: "./img/Wheel_of_Fortune.webp", reference: ['La Rueda de la Fortuna (carta del tarot)'], link: ['https://www.lanacion.com.ar/horoscopo/tarot-una-por-una-estas-son-las-78-cartas-nid14102022/']},
    {name:"Justice",user: 'Enya Geil', part: 'Stardust Crusaders', address: "./img/200px-Justice_Appearance.png", reference: ['La Justicia (carta del tarot)'], link: ['https://www.lanacion.com.ar/horoscopo/tarot-una-por-una-estas-son-las-78-cartas-nid14102022/']},
    {name:"Lovers",user: 'Steely Dan', part: 'Stardust Crusaders', address: "./img/Lovers.webp", reference: ['Los Amantes (carta del tarot)','Vigilante(álbum)'], link: ['https://www.lecturas.com/horoscopo/astrologia/enamorados-tarot-significado-numero-y-que-signo-representa_140305','https://open.spotify.com/intl-es/album/0gNCmEbPNV1OJ6JIcExTB7?si=JQ0sST6sS9ukdLF35ZugkQ']},
    {name:"Sun",user: 'Arabia Fats', part: 'Stardust Crusaders', address: "./img/Sun.webp", reference: ['El Sol (carta del tarot)'], link: ['https://tarotdetiziana.com/el-sol-y-su-iluminado-mensaje-en-el-tarot/']},
    {name:"Death Thirteen",user: 'Mannish Boy', part: 'Stardust Crusaders', address: "./img/Death Thirteen.jpeg", reference: ['La Muerte (carta del tarot)'], link: ['https://tarotdetiziana.com/la-muerte-y-su-fuerte-mensaje-en-el-tarot/']},
    {name:"Judgement",user: 'Mannish Boy', part: 'Stardust Crusaders', address: "./img/Judgment_AnimeAV.webp", reference: ['El Juicio (carta del Tarot)'], link: ['https://tarotdetiziana.com/el-juicio-y-su-explicacion-en-el-tarot/']},
    {name:"High Priestess",user: 'Midler', part: 'Stardust Crusaders', address: "./img/400px-High_Priestess_Infobox_Anime.png", reference: ['La Sacerdotisa (carta de tarot)'], link: ['https://tarotdetiziana.com/la-sacerdotisa-en-las-cartas-de-tarot/']},
    {name:"Geb",user: "N'Doul", part: 'Stardust Crusaders', address: "./img/Geb_AnimeAV.webp", reference: ['Geb (deidad egipcia)'], link: ['https://mitologia.fandom.com/es/wiki/Geb#:~:text=Geb%20era%20el%20dios%20egipcio,%C3%A9l%20permit%C3%ADa%20crecer%20los%20cultivos.']},
    {name:"Khnum",user: 'Oingo', part: 'Stardust Crusaders', address: "./img/400px-Khnum_Infobox_Anime.png", reference: ['Khnum (deidad egipcia)'], link: ['https://es.wikipedia.org/wiki/Jnum']},
    {name:"Tohth",user: 'Boingo', part: 'Stardust Crusaders', address: "./img/400px-Tohth_Infobox_Anime.png", reference: ['Tot (deidad egipcia)'], link: ['https://es.wikipedia.org/wiki/Thot_(dios_egipcio)']},
    {name:"Bastet",user: 'Mariah', part: 'Stardust Crusaders', address: "./img/Bastet.jpeg", reference: ['Bastet (deidad egipcia)'], link: ['https://es.wikipedia.org/wiki/Bastet']},
    {name:"Sethan",user: 'Alessi', part: 'Stardust Crusaders', address: "./img/Sethansummon.webp", reference: ['Seth (deidad egipcia)'], link: ['https://es.wikipedia.org/wiki/Seth']},
    {name:"Osiris",user: "Daniel J. D'Arby", part: 'Stardust Crusaders', address: "./img/Osiris_AnimeAV.webp", reference: ['Osiris (deidad egipcia)'], link: ['https://es.wikipedia.org/wiki/Osiris']},
    {name:"Sethan",user: 'Alessi', part: 'Stardust Crusaders', address: "./img/Sethansummon.webp", reference: ['Seth (deidad egipcia)'], link: ['https://es.wikipedia.org/wiki/Seth']},
    {name:"Horus",user: 'Pet Shop', part: 'Stardust Crusaders', address: "./img/Horus_AnimeAV.webp", reference: ['Horus (deidad egipcia)'], link: ['https://es.wikipedia.org/wiki/Horus']},
    {name:"Atum",user: "Telence T. D'Arby", part: 'Stardust Crusaders', address: "./img/Ttdarbystand.webp", reference: ['Atum (deidad egipcia)'], link: ['https://es.wikipedia.org/wiki/Atum']},
    {name:"Tenore Sax",user: "Kenny G.", part: 'Stardust Crusaders', address: "./img/Tenore_Sax.webp", reference: ['Saxofón tenor(instrumento musical)'], link: ['https://es.wikipedia.org/wiki/Saxof%C3%B3n_tenor']},
];

let standspart4 = [
    {name:'Killer Queen',user: 'Yoshikage Kira', part: 'Diamond Is Unbreakable', address: './img/KillerQueen.webp', reference: ['Killer Queen (canción de Queen)'], link: ['https://open.spotify.com/intl-es/track/300YN8ebGB90nDuzgz0f3O?si=e01eb3fcf5414348']},
    {name:'Star Platinum',user: 'Jotaro Kujo', part: 'Stardust Crusaders', address: './img/StarPlatinum.png', reference: ['La Estrella (carta del tarot)'], link: ['https://www.lanacion.com.ar/horoscopo/tarot-una-por-una-estas-son-las-78-cartas-nid14102022/']},
    {name:'Crazy Diamond',user: 'Josuke Higashikata', part: 'Diamond Is Unbreakabl', address: './img/CrazyDiamond.png', reference: ['La Estrella (carta del tarot)'], link: ['https://www.lanacion.com.ar/horoscopo/tarot-una-por-una-estas-son-las-78-cartas-nid14102022/']},
    {name:'Echoes',user: 'Koichi Hirose', part: 'Diamond Is Unbreakabl', address: './img/Echoes.webp', reference: ['Echoes (canción de Pink Floyd)'], link: ['https://www.lanacion.com.ar/horoscopo/tarot-una-por-una-estas-son-las-78-cartas-nid14102022/']},
    {name:'Hermit Purple',user: 'Joseph Joestar', part: 'Stardust Crusaders', address: './img/HermitPurple.webp', reference: ['El Ermitaño (carta del tarot)'], link: ['https://www.lanacion.com.ar/horoscopo/tarot-una-por-una-estas-son-las-78-cartas-nid14102022/']},
    {name:"Heaven's Door",user: 'Rohan Kishibe', part: 'Diamond Is Unbreakabl', address: './img/HeavenDoor.png', reference: ["Knockin' on Heaven's Door (canción de Bob Dylan)"], link: ['https://www.lanacion.com.ar/horoscopo/tarot-una-por-una-estas-son-las-78-cartas-nid14102022/']},
    {name:"The Hand",user: 'Okuyasu Nijimura', part: 'Diamond Is Unbreakabl', address: './img/Hand.png', reference: ['The Band (banda canadiense)'], link: ['https://www.lanacion.com.ar/horoscopo/tarot-una-por-una-estas-son-las-78-cartas-nid14102022/']},
    {name:"Cheap Trick",user: 'Masazo Kinoto', part: 'Diamond Is Unbreakabl', address: './img/CheapTrick.webp', reference: ['Cheap Trick (banda de rock estadounidense)'], link: ['https://www.lanacion.com.ar/horoscopo/tarot-una-por-una-estas-son-las-78-cartas-nid14102022/']},
];

let standspart5 = [
    {name:'King Crimson',user: 'Diavolo/Doppio', part: 'Vento Aureo', address: './img/KingCrimson.png', reference: ['King Crimson','In the Court of the Crimson King','Epitaph'], link: ['https://open.spotify.com/intl-es/artist/7M1FPw29m5FbicYzS2xdpi?si=StWbi01nQA6yCKy7DWHzog','https://open.spotify.com/search/In%20the%20Court%20of%20the%20Crimson%20King','https://open.spotify.com/intl-es/track/5j4fSU12bw4G6JDVPU7JTB?si=006fbc740d1342b9']},
    {name:'Gold Experience',user: 'Giorno Giovanna', part: 'Vento Aureo', address: './img/GoldenExp.webp', reference: ['The Gold Experience (álbum de Prince)'], link: ['https://www.lanacion.com.ar/horoscopo/tarot-una-por-una-estas-son-las-78-cartas-nid14102022/']},
    {name:'Chariot Requiem',user: 'Jean Pierre Polnareff', part: 'Vento Aureo', address: './img/ChariotRequiem.png', reference: ['Silver Chariot (forma anterior)El Carro (carta del Tarot)Réquiem (composición de Mozart)'], link: ['https://www.lanacion.com.ar/horoscopo/tarot-una-por-una-estas-son-las-78-cartas-nid14102022/']},
    {name:'Echoes',user: 'Koichi Hirose', part: 'Diamond Is Unbreakabl', address: './img/Echoes.webp', reference: ['Echoes (canción de Pink Floyd)'], link: ['https://www.lanacion.com.ar/horoscopo/tarot-una-por-una-estas-son-las-78-cartas-nid14102022/']},
    {name:'Purple Haze',user: 'Pannacotta Fugo', part: 'Vento Aureo', address: './img/PurpleHaze.png', reference: ['Purple Haze (canción de Jimi Hendrix)'], link: ['https://www.lanacion.com.ar/horoscopo/tarot-una-por-una-estas-son-las-78-cartas-nid14102022/']},
    {name:'Spice Girl',user: 'Trish Una', part: 'Vento Aureo', address: './img/SpiceGirl.png', reference: ['Spice Girls (banda británica)'], link: ['https://www.lanacion.com.ar/horoscopo/tarot-una-por-una-estas-son-las-78-cartas-nid14102022/']},
    {name:'Silver Chariot',user: 'Jean Pierre Polnareff', part: 'Stardust Crusaders', address: './img/SilverChariot.png', reference: ['El Carro (carta del tarot)'], link: ['https://www.lanacion.com.ar/horoscopo/tarot-una-por-una-estas-son-las-78-cartas-nid14102022/']},
    {name:'Gold Experience Requiem',user: 'Giorno Giovanna', part: 'Vento Aureo', address: './img/GoldenExpRequiem.png', reference: ['Gold Experience (forma anterior)The Golden Experience (álbum de Prince)Requiem (composición de Mozart)'], link: ['https://www.lanacion.com.ar/horoscopo/tarot-una-por-una-estas-son-las-78-cartas-nid14102022/']},
];

let standspart6 = [
    {name:'Star Platinum',user: 'Jotaro Kujo', part: 'Stardust Crusaders', address: './img/StarPlatinum.png', reference: ['La Estrella (carta del tarot)'], link: ['https://www.lanacion.com.ar/horoscopo/tarot-una-por-una-estas-son-las-78-cartas-nid14102022/']},
    {name:'Made in Heaven',user: 'Enrico Pucci', part: 'Stone Ocean', address: './img/MadeInHeaven.png', reference: ['Made in Heaven (canción de Freddie Mercury y álbum de Queen)'], link: ['https://open.spotify.com/intl-es/track/4NTMIFWtDXnWN4hDSBlKOf?si=c8fcc8b8b38a41b4']},
    {name:'C-Moon',user: 'Enrico Pucci', part: 'Stone Ocean', address: './img/C-MOON.png', reference: ['Made in Heaven (canción de Freddie Mercury y álbum de Queen)'], link: ['https://open.spotify.com/intl-es/track/6r6qv2faxlb5TOfVp8p44x?si=28e5a388e9ed4de6']},
    {name:'Whitesnake',user: 'Enrico Pucci', part: 'Stone Ocean', address: './img/Whitesnake.png', reference: ['Whitesnake(Banda)'], link: ['https://www.google.com/search?q=Whitesnake+banda&sca_esv=6917f8fced87079d&sxsrf=ACQVn0-NrWG7vfXqLIS6KGwkglMvoaEWiw%3A1709151720289&ei=6JXfZaCYEb2NwbkP_OKeqAY&ved=0ahUKEwigrJ6p7s6EAxW9RjABHXyxB2UQ4dUDCBA&uact=5&oq=Whitesnake+banda&gs_lp=Egxnd3Mtd2l6LXNlcnAiEFdoaXRlc25ha2UgYmFuZGEyBRAAGIAEMgUQABiABDIGEAAYFhgeMgYQABgWGB4yCBAAGBYYHhgKSMswUL4dWPgucAZ4AZABAJgB2wGgAeIMqgEGMC4xMC4xuAEDyAEA-AEC-AEBmAIQoAKsDMICChAAGEcY1gQYsAPCAgQQABgewgIGEAAYCBgewgIIEAAYgAQYywHCAggQLhiABBjLAcICCxAuGIMBGLEDGIAEwgIKEAAYgAQYFBiHAsICBRAuGIAEwgIaEC4YgwEYsQMYgAQYlwUY3AQY3gQY4ATYAQHCAggQLhjLARiABMICFBAuGIAEGJcFGNwEGN4EGOAE2AEBmAMAiAYBkAYIugYGCAEQARgUkgcFNi45LjGgB7Fw&sclient=gws-wiz-serp']},
    {name:'Stone Free',user: 'Jolyne Cujoh', part: 'Stone Ocean', address: './img/StoneFree.png', reference: ['Stone Free(Canción de Jimi Hendrix)'], link: ['https://open.spotify.com/intl-es/track/544FmlHVkzNrnkmCfYHLVb?si=5810d3d67f934882']},
    {name:'Weather Report',user: 'Emporio Alniño', part: 'Stone Ocean', address: './img/WeatherReport.png', reference: ['Weather Report(Banda)'], link: ['https://open.spotify.com/intl-es/artist/162DCkd8aDKwvjBb74Gu8b?si=W9MhmgIgTOa1uQnqYQBYNw']},
    {name:'Diver Down',user: 'Narciso Anasui', part: 'Stone Ocean', address: './img/DivePanausi.webp', reference: ['Diver Down(album)'], link: ['https://open.spotify.com/intl-es/album/6Ft0JILsEo5ZP2ddjECznc?si=-sRZanm2TZOD5ryAkj9tng']},
    {name:'Bohemian Rhapsody',user: 'Ungalo', part: 'Stone Ocean', address: './img/cualquiera.webp', reference: ['Bohemian Rhapsody(Canción de Queen)'], link: ['https://open.spotify.com/intl-es/track/1BvDpRRJj7aYJfYUrxyH5N?si=7328bb348913485d']},
];

let standspart7 = [
    {name:'Dirty Deeds Done Dirt Cheap',user: 'Funny Valentine', part: 'Steel Ball Run', address: './img/Dirty.webp', reference: ['Dirty Deeds Done Dirt Cheap(Cancion y album de AC/DC)', "Love Train(Canción de The O'Jays)"], link: ['https://open.spotify.com/intl-es/track/2d4e45fmUnguxh6yqC7gNT?si=02ca8cfe397c4a1b', 'https://open.spotify.com/intl-es/track/5QlxJMuPUxn2J2rcudSK9Z?si=59a4d85a975d4e3f']},
    {name:'Tusk',user: 'Johnny Joestar', part: 'Steel Ball Run', address: './img/Tusk.webp', reference: ['Tusk(Cancion y album)'], link: ['https://open.spotify.com/intl-es/track/0iINibMKtoS8duvexsqnm5?si=c9eefae474d0402f']},
    {name:'Scary Monsters',user: 'Diego Brando, Dr. Ferdinand', part: 'Steel Ball Run', address: './img/ScaryMonsters.webp', reference: ['Scary Monsters(Album)'], link: ['https://open.spotify.com/intl-es/album/5fxvWHvIDPIALfTfRiwyB0?si=skba-MvbTkqUBy0X_D1eMA']},
    {name:'Ball Breaker',user: 'Gyro Zeppeli', part: 'Steel Ball Run', address: './img/BallBreaker.png', reference: ['Ballbreaker(Album y cancion de AC/DC)'], link: ['https://open.spotify.com/intl-es/track/1TJX5KxBVqwqPPUPH16MFL?si=ad7e6feb30cb4960']},
    {name:'The Word',user: 'Diego Brando de Otro Universo', part: 'Steel Ball Run', address: './img/THEWORLD.jpg', reference: ['THE WORD'], link: ['https://jojo.fandom.com/es/wiki/The_World']},
    {name:'Catch the Rainbow',user: 'Blackmore', part: 'Steel Ball Run', address: './img/AtrapaunArcoiris.webp', reference: ['Catch the Rainbow(Cancion de rainbow)'], link: ['https://open.spotify.com/intl-es/track/1ZmUyiAn3nqzFaNQHpPp7z?si=c4f312f1860d458c']},
    {name:'Mandom',user: 'Ringo Roadagain', part: 'Steel Ball Run', address: './img/Mandom.webp', reference: ['Mandom-Lovers of the World'], link: ['https://open.spotify.com/intl-es/track/5JJsXhjV0yQss1dAv28sSU?si=c31ddb026adc4068']},
    {name:'Hey Ya!',user: 'Pocoloco', part: 'Steel Ball Run', address: './img/HeyYoAv.webp', reference: ['Hey Ya!(Cancion de Outkast)'], link: ['https://open.spotify.com/intl-es/track/4lgacVkp03sUCDEItoksAS?si=c4a451a2ad9a41a3']},
];

let standspart8 = [
    {name:'Wonder of U',user: 'Tooru', part: 'JoJolion ', address: './img/wonderofyou.png', reference: ['The Wonder of You(Cancion de Elvis Presley)'], link: ['https://open.spotify.com/intl-es/track/0LfJkvPNCNEMLpZJgDQiV1?si=9f3abffdc8474148']},
    {name:'Soft & Wet',user: 'Josefumi Kujo', part: 'JoJolion ', address: './img/Soft&Wet.png', reference: ['Soft and We'], link: ['https://open.spotify.com/intl-es/track/0GDM5mJEisxmmyYGuC6Cla?si=e35dde1ced2f4588']},
    {name:'Tusk',user: 'Johnny Joestar', part: 'Steel Ball Run', address: './img/Tusk.webp', reference: ['Tusk(Cancion y album)'], link: ['https://open.spotify.com/intl-es/track/0iINibMKtoS8duvexsqnm5?si=c9eefae474d0402f']},
    {name:'Killer Queen',user: 'Yoshikage Kira', part: 'Diamond Is Unbreakable', address: './img/Kq.jpg', reference: ['Killer Queen (canción de Queen)'], link: ['https://open.spotify.com/intl-es/track/300YN8ebGB90nDuzgz0f3O?si=e01eb3fcf5414348']},
    {name:'Born This Way',user: 'Kei Nijimura', part: 'JoJolion ', address: './img/Bornthisway.webp', reference: ['Born This Way(Cancion de lady gaga)'], link: ['https://open.spotify.com/intl-es/track/6OGNsH3GjnEZOc6mAqljrB?si=4ca68b9273c244b5']},
    {name:'Speed King',user: 'Jobin Higashikata', part: 'JoJolion ', address: './img/SpeedKing.png', reference: ['Speed King(Cancion de Deep Purple)'], link: ['https://open.spotify.com/intl-es/track/3RDB2QvuBEGv7DTK2SnMwO?si=05ce62dad7654359']},
    {name:'Nut King Call',user: 'Joshu Higashikata', part: 'JoJolion ', address: './img/NutKingCall.webp', reference: ['Nat King Cole'], link: ['https://open.spotify.com/intl-es/artist/7v4imS0moSyGdXyLgVTIV7?si=3F4UZladR4-9Ag4ibsvCdw']},
    {name:'King Nothing',user: 'Norisuke Higashikata IV', part: 'JoJolion ', address: './img/KingNothing.png', reference: ['King Nothing'], link: ['https://open.spotify.com/intl-es/track/30RKGpKHqr7ytcTljw436k?si=a9253661fe6e4018']},
];
