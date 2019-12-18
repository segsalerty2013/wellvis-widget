!function() {
  const isDesktop = window.matchMedia("(min-width: 768px)").matches;
  let btn, overlay, iframe;
  
  const buildCloseBtn = function(cb) {
    const btn = document.createElement("button");
    btn.textContent = "\u00D7";
    btn.style.border = "none";
    btn.style.outline = "none";
    btn.style.borderRadius = "50%";
    btn.style.boxShadow = "0px 0px 12px 0px rgba(0,0,0,0.2)";
    btn.style.color = "black";
    btn.style.backgroundColor = "white";
    btn.style.position = "absolute";
    btn.style.top = "-20px";
    btn.style.left = "-20px"; 
    btn.style.fontWeight = 100;
    btn.style.fontSize = "2rem";
    btn.addEventListener("pointerdown", (e) => {
      cb && cb(e)
      overlay.remove();
    })
    return btn
  }
  
  const buildFrame = function() {
    frame = document.createElement("iframe");

    frame.frameBorder = "0";
    frame.style.top = "0";
    frame.style.left = "0";
    frame.style.overflow = "hidden";
    frame.style.margin = "0px";
    frame.style.padding = "0px";
    frame.style.width = "100%";
    frame.style.height = "100%";
    frame.style.position = "absolute";
    frame.src = "https://staging.wellvis.org/#/chat/home"

    return frame;
  };

  const buildOverlay = function(frame) {
    overlay = document.createElement("div");
    overlay.className = "opay-overlay";
    overlay.style.overflow = "visible";
    overlay.style.zIndex = "999";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    overlay.style.position = "absolute";
    overlay.style.width = "100%";
    overlay.style.height = "100%";

    if (isDesktop) {
      overlay.style.position = "fixed";
      overlay.style.width = "300px";
      overlay.style.height = "500px";  
      overlay.style.bottom = "0";
      overlay.style.right = "0";  
    } else {
      overlay.style.top = "0";
      overlay.style.left = "0";
    }

    overlay.appendChild(frame);

    return overlay;
  };
  
  const buildButton = function(cb) {
    const btn = document.createElement("button");
    btn.textContent = "W"
    btn.style.fontFamily = "cursive";
    btn.style.border = "none";
    btn.style.outline = "none";
    btn.style.borderRadius = "50%";
    btn.style.padding = "15px 20px";
    btn.style.boxShadow = "0px 0px 12px 0px rgba(0,0,0,0.2)";
    btn.style.color = "white";
    btn.style.backgroundColor = "rgb(201, 140, 49)";
    btn.style.position = "fixed";
    btn.style.bottom = "70px";
    btn.style.right = "40px"; 
    btn.style.fontWeight = 800; 
    btn.style.fontSize = "1.3rem";
    btn.addEventListener("pointerdown", (e) => {
      cb(e)
      btn.remove();
    })
    return btn
  }
  
  const showFrame = function() {
    iframe = buildFrame();
    overlay = buildOverlay(iframe);
    const closeBtn = buildCloseBtn(function () {
      closeBtn.remove();
    })
    overlay.appendChild(closeBtn)
    document.body.appendChild(overlay)
  }
  
 window.Wellvis = {
   open() {
    showFrame()
   },
   showButton() {
     btn = buildButton(showFrame)
     document.body.appendChild(btn)
   }
 } 
}()
