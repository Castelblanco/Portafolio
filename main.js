"use strict"

$(() => {
    let start = true;

    $(document).click(() => {
        if (start){
            
            start = false;

            setTimeout(async () => {
                await new Audio("./audio.mp3").play();
            }, 400);
    
            setTimeout(() => {
                $("header").css({
                    right: 0,
                    boxShadow: "10px 2px 5px #000"
                });
                $("main").css({ display: "block" });
            }, 1300);
    
            setTimeout(() => $("main").css({ top: 0 }), 2000);
    
            setTimeout(() => {
                $("main").css({ position: "static" });
                $("footer").css({ display: "block" });
            }, 4000);
        }
    });


    let iconImg = $(".tray_img_skills  figure  img"),
        cloudName = $(".cloud"),
        nav = $(".nav_cpu"),
        btnX = $(".x"),
        trayZoomProject = $(".tray_zoom"),
        btnXProject = $(".tray_zoom .x"),
        zoomProject = $(".zoom_project"),
        dataProject = [
            {
                img: {
                    src: "./imgs/galeria-publica.jpg",
                    alt: "Imagen de la Galeria"
                },
                b: "Galeria Publica",
                p: "Esta App esta dividida en dos partes la interfaz y el servidor, la interfaz esta desarrollada con la libreria JQuery.js y el servidor se desarrollo usando Express.js un Framework de Javascript para crear servidores, la base de datos que se uso para guardar las imagenes es MongoDB una base de datos de datos basada en documentos JSON.",
                a: {
                    href: "https://castel-galeria-publica.netlify.app",
                }
            },
            {
                img: {
                    src: "./imgs/clima.jpg",
                    alt: "Imagen de la App del Clima"
                },
                b: "App del Clima",
                p: "Esta pequeña App fue creada usando Vue.js que consume una API que proporciona OpenWeather para obtener los datos del Clima actual en tiempo real.",
                a: {
                    href: "https://castel-clima.netlify.app",
                }
            },
            {
                img: {
                    src: "./imgs/bloc-notes-react.jpg",
                    alt: "Imagen del Bloc de Notas con React.js"
                },
                b: "Bloc de Notas",
                p: "Este bloc de notas esta diseñado en dos partes, la UI programada con React.js y el Servidor programado con Express.js, las notas son guardadas en una base de datos de SQL, crea una cuenta e inicia sesión y empieza a crear tus notas.",
                a: {
                    href: "https://notas-castel.netlify.app/",
                }
            },
            {
                img: {
                    src: "./imgs/bloc-tasks-vue.jpg",
                    alt: "Imagen del bloc de tareas"
                },
                b: "Bloc de Tareas con Vue.js",
                p: "Este bloc de tareas esta diseñado y programado con Vue.js un FrameWork de Javascript para crear interfaces de usuario de una sola página usando componentes, los datos son guardados en el Local Storage.",
                a: {
                    href: "https://block-de-tareas.netlify.app",
                }
            }
        ];

    dataProject.forEach(v =>{
        $(".tray_projects").append(`
            <div class="project">
                <figure>
                    <img src=${v.img.src} alt=${v.img.alt}>
                </figure>
                <b>${v.b}</b>
                <p>${v.p}</p>
                <a href=${v.a.href} target="_blank">Explorar App</a>
            </div>
        `)
    });

    $(".nav_movil").click(() => {
        nav.css({ left: 0 });
    });

    btnX.click(() => {
        nav.css({ left: "100%" });
    });

    btnXProject.click(()=> trayZoomProject.toggle(500));

    iconImg.hover(e => {
        for (let i = 0; i < cloudName.length; i++) {
            const item = cloudName[i];
            if (e.type == "mouseenter") {
                if (e.target.name == item.attributes["name"].value) {
                    item.style.visibility = "visible";
                    item.style.top = "-40px";
                }
            } else {
                item.style.visibility = "hidden";
                item.style.top = "0";
            }
        }
    });

    $(".tray_projects div").click(e =>{
        const [ figure, b, p, a ] = e.currentTarget.children,
              [ img ] = figure.children,
              [ zoomFigure, zoomB, zoomP, zoomA ] = zoomProject[0].children,
              [ zoomImg ] = zoomFigure.children;

        zoomImg.src = img.src;
        zoomImg.alt = img.alt;
        zoomB.innerText = b.innerText;
        zoomP.innerText = p.innerText;
        zoomA.href = a.href;
        trayZoomProject.toggle(500);
    });
});