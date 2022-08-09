
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
            utter.text = 'hola, cual es tu nombre?';
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
       /*'Direccion': function () {
            utter.text = 'Estamos ubicados en la avenida panamericana norte, Provincia de Napo,  Sector archidona kilometro doce';
            utter.voice = voices[2];
            window.speechSynthesis.speak(utter);
        },
        'Informacion': function () {
            utter.text = 'Somos Zoocriadero, es una reserva de especies portegidas, entre las cuales contamos con especies Mamiferos, anfibios, reptiles,aves, peces';
            utter.voice = voices[2];
            window.speechSynthesis.speak(utter);
        },
        'Reptil': function () {
            utter.text = 'Los reptiles,son un grupo de animales vertebrados provistos de escamas epidérmicas de queratina.';
            utter.voice = voices[2];
            window.speechSynthesis.speak(utter);
        },
        'mamifero': function () {
            chistes = ['Los mamíferos son una clase de animales vertebrados amniotas homeotermos que poseen glándulas mamarias productoras de leche con las que alimentan a las crías',
                'Los mamíferos son una clase de animales vertebrados amniotas homeotermos que poseen glándulas mamarias productoras de leche con las que alimentan a las crías',
                'Los mamíferos son una clase de animales vertebrados amniotas homeotermos que poseen glándulas mamarias productoras de leche con las que alimentan a las crías',
                'Los mamíferos son una clase de animales vertebrados amniotas homeotermos que poseen glándulas mamarias productoras de leche con las que alimentan a las crías'
            ];
            utter.text = chistes[Math.floor(Math.random() * chistes.length)]
            utter.voice = voices[2];
            window.speechSynthesis.speak(utter);
        },
        'aves': function () {
            chistes = ['Las aves son una clase de animales vertebrados y de sangre caliente, cuyo cuerpo recubierto de plumas de distintos colores y cuyos huesos livianos les permiten en la mayoría de los casos volar, saltar o al menos mantenerse en el aire',
                'Las aves son una clase de animales vertebrados y de sangre caliente, cuyo cuerpo recubierto de plumas de distintos colores y cuyos huesos livianos les permiten en la mayoría de los casos volar, saltar o al menos mantenerse en el aire',
                'Las aves son una clase de animales vertebrados y de sangre caliente, cuyo cuerpo recubierto de plumas de distintos colores y cuyos huesos livianos les permiten en la mayoría de los casos volar, saltar o al menos mantenerse en el aire',
                'Las aves son una clase de animales vertebrados y de sangre caliente, cuyo cuerpo recubierto de plumas de distintos colores y cuyos huesos livianos les permiten en la mayoría de los casos volar, saltar o al menos mantenerse en el aire'
            ];
            utter.text = chistes[Math.floor(Math.random() * chistes.length)]
            utter.voice = voices[2];
            window.speechSynthesis.speak(utter);
        },
        'peces': function () {
            chistes = ['Los peces son animales vertebrados primariamente acuáticos, generalmente ectotérmicos  y con respiración por branquias',
                'Los peces son animales vertebrados primariamente acuáticos, generalmente ectotérmicos  y con respiración por branquias',
                'Los peces son animales vertebrados primariamente acuáticos, generalmente ectotérmicos  y con respiración por branquias',
                'Los peces son animales vertebrados primariamente acuáticos, generalmente ectotérmicos  y con respiración por branquias'
            ];
            utter.text = chistes[Math.floor(Math.random() * chistes.length)]
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
        'cuentame un chiste': function () {
            chistes = ['Por qué las focas del circo miran siempre hacia arriba?   Porque es donde están los focos.',
                'Estas obsesionado con la comida!   No se a que te refieres croquetamente.',
                'Por que estás hablando con esas zapatillas?   Porque pone "converse"',
                'Buenos dias, me gustaria alquilar "Batman Forever".   No es posible, tiene que devolverla tomorrow.'
            ];
            utter.text = chistes[Math.floor(Math.random() * chistes.length)]
            utter.voice = voices[2];
            window.speechSynthesis.speak(utter);
        }*/
    };

    annyang.addCommands(commands);

    annyang.setLanguage("es~MX");

    annyang.start({ autoRestart: false, continuous: true});

}