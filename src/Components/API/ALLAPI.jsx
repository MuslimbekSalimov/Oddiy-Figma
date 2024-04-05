import Stol from "../img/Stol.png";
import Divan from "../img/Krovat.png";
import Shkav from "../img/Tumbi.png";
import Shkaf from "../img/Shkaff.png";
import Stul from "../img/Stul.png";

import Bac1 from "../img/Bac1.png";
import Bac2 from "../img/Bac2.png";
import Bac3 from "../img/Bac3.png";
import Bac4 from "../img/Bac4.png";
import Bac5 from "../img/Bac5.png";
import Bac6 from '../img/Bac6.png';
import Bac7 from "../img/Bac7.png";
import Bac8 from "../img/Bac8.png";
import Bac9 from "../img/Bac9.png";
import Bac10 from "../img/Bac10.png";
import Bac11 from "../img/Bac11.png";
import Bac12 from "../img/Bac12.png";

import Buyy from "../img/Buyyingitems.png"

// Pxo
import Pxo1 from "../img/Pxo0.png";
import Pxo2 from "../img/Pxo1.png";
import Pxo3 from "../img/Pxo2.png";
import Pxo4 from "../img/Pxo3.png";
import Yurakcha from "../img/Yurakcha.png";

// Katalog API
import Kat1 from "../img/Katalog1.png";
import Kat2 from "../img/Katalog2.png";
import Kat3 from "../img/Katalog3.png";
import Kat5 from "../img/Katalog5.png";
import Kat6 from "../img/Katalog6.png";
import Kat7 from "../img/Katalog7.png";
import Kat8 from "../img/Katalog8.png";
import Kat9 from "../img/Katalog9.png";
import Kat10 from "../img/Katalog10.png";

// Divanlar API
import Divan1 from "../img/KatalogDivans.png";
import Divan2 from "../img/KatalogDivans1.png";
import Divan3 from "../img/KatalogDivans2.png";
import Divan4 from "../img/KatalogDivans3.png";
import Divan5 from "../img/KatalogDivans4.png";
import Divan6 from "../img/KatalogDivans5.png";
import Divan7 from "../img/KatalogDivans6.png";



const ALLAPI = [
      {
                id:0,
                title:"Столы",
                poster: Stol,
                text:"80шт",
            },
            {
                id:1,
                title:"Кровати", 
                text:"80шт",
                poster: Divan,
    
            },
            {
                id:2,
                title:"Тумбы", 
                poster: Shkav,
            },
            {
                id:3,
                title:"Шкафы", 
                poster: Shkaf,
    
            },
            {
                id:4,
                title:"Стулья", 
                poster: Stul,
            }
]
const mebel = [
    {
        id:0,
        poster: Bac1,
    },

    {
        id:1,
        poster: Bac2,
    },

    {
        id:2,
        poster: Bac3,
    },

    {
        id:3,
        poster: Bac4,
    },

    {
        id:4,
        poster: Bac5,
    },

    {
        id:5,
        poster: Bac6,
    },

    {
        id:6,
        poster: Bac7,
    },

    {
        id:7,
        poster: Bac8,
    },

    {
        id:8,
        poster: Bac9,
    },


    {
        id:9,
        poster: Bac10,
    },
    {
        id:10,
        poster: Bac11,
    },
    {
        id:11,
        poster: Bac12,
    },
    
]
const BuyyingItems = [
    {
        id:0,
        image: Buyy,
        text:"Шкаф-купе 00237",
        zakaz:"Под заказ",
        button:"Заказать просчет",
    },
    {
        id:1,
        image: Buyy,
        text:"Шкаф-купе 00237",
        zakaz:"Под заказ",
        button:"Заказать просчет",
    },
    {
        id:2,
        image: Buyy,
        text:"Шкаф-купе 00237",
        zakaz:"Под заказ",
        button:"Заказать просчет",
    },
    {
        id:3,
        image: Buyy,
        text:"Шкаф-купе 00237",
        zakaz:"Под заказ",
        button:"Заказать просчет",
    },
    {
        id:4,
        image: Buyy,
        text:"Шкаф-купе 00237",
        zakaz:"Под заказ",
        button:"Заказать просчет",
    },
    {
        id:5,
        image: Buyy,
        text:"Шкаф-купе 00237",
        zakaz:"Под заказ",
        button:"Заказать просчет",
    },
    {
        id:6,
        image: Buyy,
        text:"Шкаф-купе 00237",
        zakaz:"Под заказ",
        button:"Заказать просчет",
    },
    {
        id:7,
        image: Buyy,
        text:"Шкаф-купе 00237",
        zakaz:"Под заказ",
        button:"Заказать просчет",
    },
    {
        id:8,
        image: Buyy,
        text:"Шкаф-купе 00237",
        zakaz:"Под заказ",
        button:"Заказать просчет",
    },
    {
        id:9,
        image: Buyy,
        text:"Шкаф-купе 00237",
        zakaz:"Под заказ",
        button:"Заказать просчет",
    },
    {
        id:10,
        image: Buyy,
        text:"Шкаф-купе 00237",
        zakaz:"Под заказ",
        button:"Заказать просчет",
    },
    {
        id:11,
        image: Buyy,
        text:"Шкаф-купе 00237",
        zakaz:"Под заказ",
        button:"Заказать просчет",
    },


]
const TagNaems = [
    {
        id:0,
        head:"Дизайн Интерьера   →",
        zakaz:"Мебель под заказ в Харькове →",
        alfa:"Дизайн детской комнаты Alfa 10 →",
        krovat:"Кровати →",
        korzina:"Моя Корзина →",
    }
]
const Tovar = [
    {
        id:0,
        pxo: Pxo1,
        about:'Диван "Ergonomic Rubber Shoes”',
        cost: "35 990 ₽",
        minuscost:"75 430 ₽",
        yurak:Yurakcha,
    },
    {
        id:1,
        pxo: Pxo2,
        about:'Диван "Ergonomic Rubber Shoes”',
        cost: "35 990 ₽",
        minuscost:"75 430 ₽",
        yurak:Yurakcha,
    },
    {
        id:2,
        pxo: Pxo3,
        about:'Диван "Ergonomic Rubber Shoes”',
        cost: "35 990 ₽",
        minuscost:"75 430 ₽",
        yurak:Yurakcha,
    },
    {
        id:3,
        pxo: Pxo4,
        about:'Диван "Ergonomic Rubber Shoes”',
        cost: "35 990 ₽",
        minuscost:"75 430 ₽",
        yurak:Yurakcha,
    }
]
const Katalog = [
    {
        id:0,
        poster:Kat1,
        title:"Диваны и кресла",
    },
    {
        id:1,
        poster:Kat2,
        title:"Шкафы и стеллажи",
    },
    {
        id:2,
        poster:Kat3,
        title:"Стенки и прихожие",
    },
    {
        id:3,
        poster:Kat5,
        title:"Кровати и матрасы",
    },
    {
        id:4,
        poster:Kat6,
        title:"Столы и стулья",
    },
    {
        id:5,
        poster:Kat7,
        title:"Кухонная мебель",
    },
    {
        id:6,
        poster:Kat8,
        title:"Тумбы и комоды",
    },
    {
        id:7,
        poster:Kat9,
        title:"Свет",
    },
    {
        id:8,
        poster:Kat10,
        title:"Товары для дома  ",
    },
]
const ModalItems = [
    {
        id:0,
        poster: Divan1,
        title:"Диваны прямые",
    },
    {
        id:1,
        poster: Divan2,
        title:"Диваны угловые",
    },
    {
        id:2,
        poster: Divan3,
        title:"Диваны модульные",
    },
    {
        id:3,
        poster: Divan4,
        title:"Диваны детские",
    },
    {
        id:4,
        poster: Divan5,
        title:"Диваны прямые",
    },
    {
        id:5,
        poster: Divan6,
        title:"Диваны угловые",
    },
    {
        id:6,
        poster: Divan7,
        title:"Диваны модульные",
    },
    {
        id:7,
        poster: Divan7,
        title:"Диваны детские",
    },
    {
        id:8,
        poster: Divan7,
        title:"Диваны прямые",
    },
]

export { ALLAPI, mebel, BuyyingItems, TagNaems, Tovar, Katalog, ModalItems };