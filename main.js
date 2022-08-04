"use strict"

$(() => {
    let start = true;

    $(document).click(() => {
        if (start){
            
            start = false;

            setTimeout(async () => {
                const audio = await new Audio("./audio.mp3");
                audio.muted = true;
                await audio.play();
                audio.muted = false;
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
        project = $(".project"),
        zoomProject = $(".zoom_project");

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

    project.click(e =>{
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