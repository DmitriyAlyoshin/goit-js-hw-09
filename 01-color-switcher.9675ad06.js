let t={startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]"),body:document.querySelector("body")},e={intervalId:null,isActive:!1,start(){this.isActive||(this.isActive=!0,this.intervalId=setInterval((()=>{t.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3),t.startBtn.disabled=!0)},stop(){clearInterval(this.intervalId),this.isActive=!1,t.startBtn.disabled=!1}};t.startBtn.addEventListener("click",(()=>{e.start()})),t.stopBtn.addEventListener("click",(()=>{e.stop()}));
//# sourceMappingURL=01-color-switcher.9675ad06.js.map
