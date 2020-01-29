!function(widgetId) {

  let widgetFrame = null;

  const isDesktop = window.matchMedia("(min-width: 768px)").matches;
  let btn, overlay, iframe;
  
  const buildCloseBtn = (cb) => {
    const btn = document.createElement("button");
    btn.lineHeight = "41px"
    btn.height = "41px"
    btn.paddingBottom = "4px"
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
    btn.style.paddingLeft = "11px";
    btn.style.paddingRight = "11px";
    btn.style.cursor = "pointer";
    btn.addEventListener("pointerdown", (e) => {
      cb && cb(e)
      overlay.style.height = "0px";
    })
    return btn
  }
  
  const buildFrame = () => {

    if(widgetFrame){
      return widgetFrame;
    } 

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
    frame.src = `https://staging.wellvis.org/#/chat/find/widget/${widgetId}`;

    widgetFrame = frame;
    return frame;
  };

  const buildNavbar = () => {
    navbar = document.createElement("div");

    navbar.style.display= "flex";
    navbar.style.justifyContent= "space-between";
    navbar.style.boxShadow = "0px 4px 6px 0px rgba(0,0,0,0.2)";
    navbar.style.height = "48px";
    navbar.style.width = "100%";
    navbar.style.background = "#EEEEEE";

    return navbar;
  }

  const buildOverlay = (frame) => {
    overlay = document.createElement("div");

    overlay.className = "opay-overlay";
    overlay.style.overflow = "visible";
    overlay.style.zIndex = "999";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    overlay.style.position = "absolute";
    overlay.style.border = "2px solid #CCC";
    overlay.style.boxShadow = "-4px -2px 12px 0px rgba(0,0,0,0.2)";
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
  
  const buildButton = (cb) => {
    const btn = document.createElement("button");
    btn.textContent = "W"
    btn.lineHeight = "41px"
    btn.height = "41px"
    btn.style.fontFamily = "cursive";
    btn.style.border = "none";
    btn.style.outline = "none";
    btn.style.borderRadius = "50%";
    btn.style.padding = "15px 20px";
    btn.style.boxShadow = "0px 0px 12px 0px rgba(0,0,0,0.2)";
    btn.style.color = "transparent";
    btn.style.backgroundColor = "transparent";
    btn.style.background = "url('src/img/icon.png') no-repeat";
    btn.style.backgroundPosition = "center";
    btn.style.backgroundSize = "contain";
    btn.style.cursor = "pointer";
    btn.style.position = "fixed";
    btn.style.bottom = "70px";
    btn.style.right = "40px"; 
    btn.addEventListener("pointerdown", (e) => {
      cb(e)
      btn.remove();
    })
    return btn
  }

  const showButton = () => {
    btn = buildButton(showFrame)
    document.body.appendChild(btn)
  }
  
  const showFrame = () => {
    iframe = buildFrame();
    overlay = buildOverlay(iframe);
    const closeBtn = buildCloseBtn(function () {
      closeBtn.remove();
      showButton();
    })
    overlay.appendChild(closeBtn)
    document.body.appendChild(overlay)
  }
  
  window.Wellvis = {
    showButton,
    open: showFrame
    
  } 
}('5c4ff300-d79a-11e9-8a36-3f1902cff575')
