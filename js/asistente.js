
if(annyang){
    var voices;

    var utter = new SpeechSynthesisUtterance();
    utter.rate = 1;
    utter.pitch = 0.5;
    utter.lang = 'es~MX';

    window.speechSynthesis.onvoiceschanged = function () {
        voices = window.speechSynthesis.getVoices();
        console.log(voices);
    };

    var commands = {
        'hola quira ': function () {
            utter.text = 'Hola Chucha de tu madre, que putas quieres';
            utter.voice = voices[2];
            window.speechSynthesis.speak(utter);
        },
        'como estas': function () {
            utter.text = 'y a ti que Chuchas te importa, que hijeputas que eres';
            utter.voice = voices[2];
            window.speechSynthesis.speak(utter);
        },

        'hola': function () {
            utter.text = 'hola te Saluda Kira tu asistente virtual, cual es tu nombre?';
            utter.voice = voices[2];
            window.speechSynthesis.speak(utter);
            //Guarda el nombre que le decimos por voz.
            annyang.addCallback('result', function (phrases) {
                //Imprime el nombre por consola.
                console.log("Nombre: ", phrases[0]);
                //Para el evento result.
                annyang.removeCallback('result');
                //Nos dice hola + el nombre que le digamos por voz.
                utter.text = 'Hola, bienvenido ' + phrases[0];
                window.speechSynthesis.speak(utter);
            });
        },
        //Array que devuelve aleatoriamente un elemento del array, en este caso un chiste.
       'Direccion': function () {
            utter.text = 'Estamos ubicados en la avenida panamericana norte, Provincia de Napo,  Sector archidona kilometro doce';
            utter.voice = voices[2];
            window.speechSynthesis.speak(utter);
        },
        'Informacion': function () {
            utter.text = 'Somos Zoocriadero, es una reserva de especies portegidas, entre las cuales contamos con especies Mamiferos, anfibios, reptiles,aves, peces';
            utter.voice = voices[2];
            window.speechSynthesis.speak(utter);
        },

        'Turismo': function () {
            utter.text = 'En nuestras instalaciones contamos con: Cenderos para la visita de todas nuestras especies rescatadas, vista y entrada al rio del lugar, contamos con canchas, estacionamiento, piscina,restaurantes y hospedaje';
            utter.voice = voices[2];
            window.speechSynthesis.speak(utter);
        },
        'Clima': function () {
            utter.text = 'El  Clima en la reserva El Arca, los veranos son largos, cálidos y nublados; los inviernos son cortos, calurosos y parcialmente nublados y está mojado durante todo el año. Durante el transcurso del año, la temperatura generalmente varía de 22 grados centigrados a 31 grados centigrados y rara vez baja a menos de 20 grados centigrados o sube a más de 33 grados centigrados.';
            utter.voice = voices[2];
            window.speechSynthesis.speak(utter);
        },
        'Reptil': function () {
            utter.text = 'Los reptiles,son un grupo de animales vertebrados provistos de escamas epidérmicas de queratina.';
            utter.voice = voices[2];
            window.speechSynthesis.speak(utter);
        },

        'anfibio': function () {
            utter.text = 'Los anfibios son una clase de animales vertebrados anamniotas, tetrápodos, ectotérmicos, con respiración branquial durante la fase larvaria y pulmonar al alcanzar el estado adulto.​';
            utter.voice = voices[2];
            window.speechSynthesis.speak(utter);
        },
        'horario': function () {
            chistes = ['todos los dias de Lunes a Domingo, de 9 de la mañana a cindo de la tarde',
                'todos los dias de Lunes a Domingo, de 9 de la mañana a cindo de la tarde',
                'todos los dias de Lunes a Domingo, de 9 de la mañana a cindo de la tarde',
                'todos los dias de Lunes a Domingo, de 9 de la mañana a cindo de la tarde'
            ];
            utter.text = chistes[Math.floor(Math.random() * chistes.length)]
            utter.voice = voices[2];
            window.speechSynthesis.speak(utter);
        },

        'precio': function () {
            chistes = ['La entrada tiene un valor de cinco dollares los menores, siete dollares los adultos y dies dollares extranjeros',
                'La entrada tiene un valor de cinco dollares los menores, siete dollares los adultos y dies dollares extranjeros',
                'La entrada tiene un valor de cinco dollares los menores, siete dollares los adultos y dies dollares extranjeros',
                'La entrada tiene un valor de cinco dollares los menores, siete dollares los adultos y dies dollares extranjeros'
            ];
            utter.text = chistes[Math.floor(Math.random() * chistes.length)]
            utter.voice = voices[2];
            window.speechSynthesis.speak(utter);
        },
        'tigre': function () {
            utter.text = 'Mamífero felino de unos 250 a 400 cm de longitud (cola incluida), de pelaje amarillo leonado con rayas transversales oscuras o negras en el lomo, la cabeza y la cola, blancuzco en el vientre; tiene cuerpo robusto, cola larga y uñas fuertes que usa para cazar; es muy fiero, ágil y veloz, y vive solitario en la India y otras zonas de Asia.';
            utter.voice = voices[2];
            window.speechSynthesis.speak(utter);
        },
        'leon': function () {
            utter.text = 'Mamífero felino de 250 a 350 cm de longitud (cola incluida), pelaje pardo claro, cabeza grande, cola larga terminada en un mechón y uñas fuertes que usa para cazar; el macho es mayor que la hembra y tiene una larga melena que le cubre la nuca y el cuello; es carnívoro y habita en manada en desiertos y estepas de África y la India.';
            utter.voice = voices[2];
            window.speechSynthesis.speak(utter);
        },
        'capibara': function () {
            utter.text = 'Mamífero roedor de unos 120 cm de largo y 50 cm de alto, cuerpo algo rechoncho, pelo cerdoso de color pardo, y patas y orejas cortas; tiene hábitos semiacuáticos, se alimenta de peces y hierbas, y se domestica con facilidad; vive en regiones cálidas de América, a orillas de ríos y lagos. ';
            utter.voice = voices[2];
            window.speechSynthesis.speak(utter);
        },
        'tucan': function () {
            utter.text = 'Ave trepadora de plumaje negro con manchas de colores muy vivos en el pecho y en el cuello, con el pico también coloreado, ancho y alto como la cara, casi tan largo como el cuerpo, y algo curvado; se domestica fácilmente y vive en estado natural en América Central y del Sur; hay varias especies, de color, forma y tamaño muy diversos';
            utter.voice = voices[2];
            window.speechSynthesis.speak(utter);
        },
        'loro': function () {
            utter.text = 'Ave trepadora de 30 a 40 cm de longitud, con el plumaje de colores muy vistosos y variados, y el pico fuerte, grueso y curvo; es capaz de imitar la voz humana; es propio de los bosques de los países tropicales, pero en domesticidad puede vivir en climas templados.';
            utter.voice = voices[2];
            window.speechSynthesis.speak(utter);
        },
        'pirania': function () {
            utter.text = 'Pez de agua dulce, de 15 a 40 cm de largo, cuerpo chato, cabeza ancha y dientes muy fuertes y afilados; es voraz y carnívoro y, aunque se nutre básicamente de peces, ataca a cualquier tipo de animales; habita en los grandes ríos de las zonas tropicales de América del Sur, como el Amazonas y el Orinoco, formando grupos muy numerosos; existen varias especies.';
            utter.voice = voices[2];
            window.speechSynthesis.speak(utter);
        },
        'boa': function () {
            utter.text = 'Serpiente de gran tamaño y colores vivos que se alimenta de animales a los que mata por asfixia rodeándolos con su cuerpo; vive en los árboles del centro y el sur de América.';
            utter.voice = voices[2];
            window.speechSynthesis.speak(utter);
        },
        'caiman': function () {
            utter.text = 'Reptil muy similar al cocodrilo en forma y color, pero de hocico más corto, menor tamaño y membranas interdigitales poco desarrolladas; es carnívoro y habita en el centro y el sur de América.';
            utter.voice = voices[2];
            window.speechSynthesis.speak(utter);
        },

        'cocodrilo': function () {
            utter.text = 'Reptil de gran tamaño (de 3 a 10 m de largo, según las especies), de color marrón verdoso y piel cubierta de escamas muy duras; sus patas tienen una membrana entre los dedos para nadar, la cola es larga, aplanada lateralmente y con dos crestas de poca altura en su parte superior, los dientes fuertes y afilados, y el hocico alargado; es carnívoro y muy temible por su voracidad; habita en los grandes ríos de las regiones intertropicales.';
            utter.voice = voices[2];
            window.speechSynthesis.speak(utter);
        },

        'jaguar': function () {
            utter.text = 'Mamífero felino de 160 a 260 cm de longitud (cola incluida), de pelaje amarillo rojizo con grupos de manchas negras arracimadas en torno a una oscura, blancuzco en el vientre; tiene cuerpo esbelto y fuerte, cola larga y potentes zarpas que usa para cazar; es rápido, ágil y fiero, y habita en bosques y selvas tropicales de América.';
            utter.voice = voices[2];
            window.speechSynthesis.speak(utter);
        },

        'puma': function () {
            utter.text = 'Mamífero felino de unos 190 cm de longitud (cola incluida), pelaje suave de color pardo rojizo o grisáceo, blancuzco en el vientre, cuerpo esbelto, patas cortas, cola larga y uñas fuertes que usa para cazar; es muy veloz, ágil y fiero pero se adapta fácilmente a la cautividad; vive solitario en toda América.';
            utter.voice = voices[2];
            window.speechSynthesis.speak(utter);
        },

        'tortuga': function () {
            utter.text = 'La tortuga terrestre argentina es una tortuga de la familia Testudinidae, endémica de los arbustales y bosques en las regiones áridas y semiáridas del centro-sur y sur de América del Sur. Es el reptil vivo más explotado por el comercio de animales salvajes en America Latina.';
            utter.voice = voices[2];
            window.speechSynthesis.speak(utter);
        },

        'tilapia': function () {
            utter.text = 'La tilapia es principalmente un pez de agua dulce que habita en arroyos poco profundos, estanques, ríos y lagos, y es menos común que viva en aguas salobres es agua dulce, de 10 a 30 cm de longitud, de coloración distinta según las especies; vive en clima tropical, pero está muy extendido como pez de acuario y para el consumo humano.';
            utter.voice = voices[2];
            window.speechSynthesis.speak(utter);
        },

        'pato': function () {
            utter.text = 'Ave palmípeda de plumaje denso, patas cortas y pico más ancho en la punta que en la base, que vive en estado salvaje o domesticada; nada y bucea muy bien pero camina con torpeza; es comestible y muy estimada como pieza de caza; hay muchas especies, que varían en tamaño y color.';
            utter.voice = voices[2];
            window.speechSynthesis.speak(utter);
        },

        'cuy': function () {
            utter.text = 'El Cuy, llamado también cuye, cobaya, cobayo, conejillo de indias, guinea pig, científicamente corresponde a Cavia porcellus, de la familia Caviidae originaria en regiones andinas de America del Sur como Perú, Bolivia, Ecuador y Colombia. El cuerpo de estos pequeños roedores, es ancho y está cubierto de pelos que pueden ser lacios, erizados o pegados al cuerpo, formando remolinos, de varios colores. La cabeza es ancha y grande en comparación al cuerpo y sus orejas son pequeñas y redondeadas. Tiene patas cortas terminadas en finos deditos, cuyo número es variable.';
            utter.voice = voices[2];
            window.speechSynthesis.speak(utter);
        },

        'coral': function () {
            utter.text = 'Una de las serpientes más famosas en todo el mundo es la serpiente de coral, a la que se le distingue de entre todas las demás gracias a sus vibrantes colores, en los que predominan el rojo, el blanco y el negro. Las serpientes de coral son también llamadas serpiente rabo de ají o coralillos, y son un grupo de serpientes venenosas pertenecientes a la familia Elapidae, originarias de las zonas tropicales.';
            utter.voice = voices[2];
            window.speechSynthesis.speak(utter);
        },

        'lechuza': function () {
            utter.text = 'La lechuza en un ave rapaz carnívora y nocturna perteneciente al orden Strigiformes, de donde también el búho típico forma parte, solo que a diferencia de éste, no contiene unas plumas en su cabeza que le dan forma de orejas. Aunque suelen ser en su mayoría solitarios, el nombre colectivo que reciben se llama Parlamento. El tamaño de las lechuzas está entre la de un gorrión y un águila. Tienen importantes características como lo son sus desarrolladas garras, su hermoso y suave plumaje, su silencioso vuelo y fuertes patas. Se caracterizan por tener la forma de un disco sobre la cara a diferencia de otras especies que lo tienen en forma de corazón. ';
            utter.voice = voices[2];
            window.speechSynthesis.speak(utter);
        },

        /*FLORA*/

        'bromelia': function () {
            utter.text = 'Bromelia es un género tropical de plantas de la familia Bromeliaceae que crecen, normalmente, en bosques tropicales o subtropicales húmedos, tomando los nutrientes necesarios del depósito central que poseen o de la humedad ambiental.';
            utter.voice = voices[2];
            window.speechSynthesis.speak(utter);
        },

        'orquidea': function () {
            utter.text = 'La orquídea es una planta que se caracteriza por su flor de tres sépalos: 2 pétalos y un lobelo donde se posa el insecto polinizador. Además, su estructura reproductiva, llamada ginostemo o comúnmente columna, se encuentra descubierta en medio de sus sépalos.';
            utter.voice = voices[2];
            window.speechSynthesis.speak(utter);
        },

        'cactus': function () {
            utter.text = 'Los cactus tienen espinas que salen de una especie de grano, donde crecerá la flor. Las plantas que tienen hojas carnosas y que no tienen espinas o que tienen espinas que no salen de areolas, son llamadas comúnmente suculentas.';
            utter.voice = voices[2];
            window.speechSynthesis.speak(utter);
        },

        'cala': function () {
            utter.text = 'Son plantas monocotiledóneas herbáceas, a veces arborescentes o como lianas (salvo en Lemnoideae, donde el cuerpo vegetativo es reducido y globoso a taloide). Hojas simples, enteras o lobuladas, en ocasiones fenestradas (con el limbo agujereado), a menudo grandes.';
            utter.voice = voices[2];
            window.speechSynthesis.speak(utter);
        },

        'helecho': function () {
            utter.text = 'Los helechos (taxón Filicopsida, Pterophyta, Filicinae o Polypodiophyta) son plantas vasculares sin semilla (pteridofitas), cuyas características morfológicas más sobresalientes son sus hojas grandes ("megafilos" o "frondes"), usualmente pinadas y con prefoliación circinada.';
            utter.voice = voices[2];
            window.speechSynthesis.speak(utter);
        },

        'hepatica': function () {
            utter.text = 'Los musgos o hepaticas (División: Briofitas) son plantas pequeñas que carecen de tejido vascular o leñoso. Requieren de un ambiente temporalmente saturado de agua para completar su ciclo de vida (Delgadillo, 2003a). Son el segundo grupo más importante dentro de las plantas verdes.';
            utter.voice = voices[2];
            window.speechSynthesis.speak(utter);
        },

        'sedro': function () {
            utter.text = 'Tipo de árbol siempre verde de madera fragante y dura que es miembro de la familia del ciprés. El aceite de la madera se usa en jabones, champús, sales de baño, perfumes, aromaterapia y como repelente de insectos. El nombre científico es Juniperus virginiana.';
            utter.voice = voices[2];
            window.speechSynthesis.speak(utter);
        },

        'balsa': function () {
            utter.text = 'Tipo de Arbol que se denomina madera de balsa a la madera del balso (Ochroma pyramidale), árbol que crece en la selva subtropical de Colombia, Ecuador, así como en Centroamérica y en otros países sudamericanos. Las condiciones geográficas y climáticas de la cuenca baja del río Guayas (Ecuador) hacen que el balso ecuatoriano tenga mayor desarrollo y sea de más calidad.';
            utter.voice = voices[2];
            window.speechSynthesis.speak(utter);
        },

        'shonta': function () {
            utter.text = 'El arbol de chonta o corozo, es nativa de las regiones tropicales y subtropicales de América. Se aprovecha su fruto, una drupa de gran valor alimentario, su madera y el cogollo tierno, que se cosecha para extraer palmito. Bactris gasipaes es un vegetal de la familia de las arecáceas (de las palmeras). Se le conoce de forma común como pejibaye, pupuña, pipire, pijuayo, pixbae, chontaduro, cachipay, pifá, pibá, chima, chonta o tembe.';
            utter.voice = voices[2];
            window.speechSynthesis.speak(utter);
        },

        'bambu': function () {
            utter.text = 'La guadua o bambu es una especie forestal representada por esbeltos y modulados tallos que enaltecen el paisaje de los valles interandinos es larga, recta, uniforme en su desarrollo, liviana, hueca, resistente, suave, de rápido crecimiento, de bello color e imperceptiblemente cónica.';
            utter.voice = voices[2];
            window.speechSynthesis.speak(utter);
        },

        'Cobano': function () {
            utter.text = 'Árbol de hasta 25 mts. de altura, con el tronco recto de hasta 1.5 mt. de diámetro a la altura del pecho, presentando contrafuertes bien formados, la copa es frondosa, abierta en forma de abanico; Flores pequeñas de color verde amarillentas, florea de mayo a junio; los frutos son cápsulas leñosas, ovoides de color ..';
            utter.voice = voices[2];
            window.speechSynthesis.speak(utter);
        },

        'almendro': function () {
            utter.text = 'El almendro (Prunus dulcis), es un árbol caducifolio de la familia de las rosáceas. Esta especie pertenece al subgénero Amygdalus del género Prunus. Puede alcanzar de 3 a 5 m de altura. De tallo liso, verde y a veces amarillo cuando es joven, pasa a ser agrietado, escamoso, cremoso y grisáceo cuando es adulto.';
            utter.voice = voices[2];
            window.speechSynthesis.speak(utter);
        },

        'kanela': function () {
            utter.text = 'Se trata de un árbol siempre verde que llega a crecer hasta 13 metros, cuya corteza esun condimento con gran sabor. Las hojas miden de 7 a 25 cm de largo, y de 3 a 8 cm de ancho; son ovaladas,puntiagudas y de color verde brillante en la cara superior.';
            utter.voice = voices[2];
            window.speechSynthesis.speak(utter);
        },

        'topa': function () {
            utter.text = '.';
            utter.voice = voices[2];
            window.speechSynthesis.speak(utter);
        },

        'cuentame un chiste': function () {
            chistes = ['Por qué las focas del circo miran siempre hacia arriba?   Porque es donde están los focos.',
                'Estas obsesionado con la comida!   No se a que te refieres croquetamente.',
                'Por que estás hablando con esas zapatillas?   Porque pone "converse"',
                'Buenos dias, me gustaria alquilar "Batman Forever".   No es posible, tiene que devolverla tomorrow.'
            ];
            utter.text = chistes[Math.floor(Math.random() * chistes.length)]
            utter.voice = voices[2];
            window.speechSynthesis.speak(utter);
        }
    };

    annyang.addCommands(commands);

    annyang.setLanguage("es~MX");

    annyang.start({ autoRestart: false, continuous: true});

}