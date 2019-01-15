
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([[2,1],".",[1],"content { text-align: center; font-size: ",[0,30],"; margin-top: ",[0,150],"; }\n",],undefined,{path:"./pages/product-show/product-show.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/product-show/product-show.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      