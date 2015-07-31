/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         $("#Stage_footer").css("background-image", "url(images/dark_wall.png)", "background-repeat", "repeat")
         yepnope({
             load: "http://cdn.edgecommons.org/an/1.0.2/js/min/EdgeCommons.js",
         	callback: function() {
         		EC.centerStage(sym);
         		EC.Parallax.setup(sym);
         	}
         });

      });
      //Edge binding end

      

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'header'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_social_06}", "click", function(sym, e) {
         // insert code for mouse click here
         // Navigate to a new URL in a new window
         // (replace "_blank" with appropriate target attribute)
         window.open("https://co.linkedin.com/in/johanemendezg", "_blank");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_social_01}", "click", function(sym, e) {
         // insert code for mouse click here
         // Navigate to a new URL in a new window
         // (replace "_blank" with appropriate target attribute)
         window.open("https://www.facebook.com/johan.mendez.9847", "_blank");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_social_032}", "click", function(sym, e) {
         // insert code for mouse click here
         // Navigate to a new URL in a new window
         // (replace "_blank" with appropriate target attribute)
         window.open("https://www.pinterest.com/johanmendez9847/", "_blank");
         

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_contact_box}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         // Hide an element 
         sym.$("contact_box").fadeOut();
         

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_social_14}", "click", function(sym, e) {
         // insert code for mouse click here
         // Navigate to a new URL in a new window
         // (replace "_blank" with appropriate target attribute)
         window.open("https://github.com/Johanetox", "_blank");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3700, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_photo-hole2}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         sym.play("img_hover");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_social_032}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         sym.play("img_hover_finish");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_social_14}", "mouseover", function(sym, e) {
         sym.play("img_hover_finish");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_social_06}", "mouseover", function(sym, e) {
         sym.play("img_hover_finish");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_social_01}", "mouseover", function(sym, e) {
         sym.play("img_hover_finish");
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_social_032}", "mouseout", function(sym, e) {
         sym.play("img_hover_finish");

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_social_14}", "mouseout", function(sym, e) {
         sym.play("img_hover_finish");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_social_06}", "mouseout", function(sym, e) {
         sym.play("img_hover_finish");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_photo-hole2}", "click", function(sym, e) {
         
         sym.play("active");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6193, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7207, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_social_56}", "click", function(sym, e) {
         // insert code for mouse click here
         // Navigate to a new URL in a new window
         // (replace "_blank" with appropriate target attribute)
         window.open("mailto:punkeneto1@gmail.com", "_blank");
         

      });
      //Edge binding end

   })("header");
   //Edge symbol end:'header'

   //=========================================================
   
   //Edge symbol: 'header_text'
   (function(symbolName) {   
   
   })("header_text");
   //Edge symbol end:'header_text'

   //=========================================================
   
   //Edge symbol: 'body'
   (function(symbolName) {   
   
   })("body");
   //Edge symbol end:'body'

   //=========================================================
   
   //Edge symbol: 'footer'
   (function(symbolName) {   
   
   })("footer");
   //Edge symbol end:'footer'

   //=========================================================
   
   //Edge symbol: 'rectangles_ani'
   (function(symbolName) {   
   
      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9946, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11995, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_juanText}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         sym.play("juanani");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_juanText}", "click", function(sym, e) {
         // insert code for mouse click here
         // Navigate to a new URL in a new window
         // (replace "_blank" with appropriate target attribute)
         window.open("http://juan.com.co/shop/", "_blank");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13998, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_angelmodaText}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         sym.play("angelmodaani");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_angelmodaText}", "click", function(sym, e) {
         // insert code for mouse click here
         // Navigate to a new URL in a new window
         // (replace "_blank" with appropriate target attribute)
         window.open("http://angeljeansmoda.co/", "_blank");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_lachontaText}", "click", function(sym, e) {
         // insert code for mouse click here
         // Navigate to a new URL in a new window
         // (replace "_blank" with appropriate target attribute)
         window.open("http://development.lachontadiv.divshot.io/", "_blank");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 16000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_lachontaText}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         sym.play("lachontaani");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 18000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_capitalesText}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         sym.play("capitalesani");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_capitalesText}", "click", function(sym, e) {
         // insert code for mouse click here
         // Navigate to a new URL in a new window
         // (replace "_blank" with appropriate target attribute)
         window.open("http://capitales.divshot.io/", "_blank");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 20000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_streetcatText}", "click", function(sym, e) {
         // insert code for mouse click here
         // Navigate to a new URL in a new window
         // (replace "_blank" with appropriate target attribute)
         window.open("http://desktop.divshot.io/", "_blank");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_streetcatText}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         sym.play("streetcatani");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 22000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_citycarText}", "click", function(sym, e) {
         // insert code for mouse click here
         // Navigate to a new URL in a new window
         // (replace "_blank" with appropriate target attribute)
         window.open("http://citycar-plus.com/", "_blank");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_citycarText}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         sym.play("citycarani");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_projectsText}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play("bodyani");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_projectsText}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         sym.play("projectsani");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 23501, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("rectangles_ani");
   //Edge symbol end:'rectangles_ani'

   //=========================================================
   
   //Edge symbol: 'contact_box'
   (function(symbolName) {   
   
   })("contact_box");
   //Edge symbol end:'contact_box'

   //=========================================================
   
   //Edge symbol: 'description_txt'
   (function(symbolName) {   
   
   })("description_txt");
   //Edge symbol end:'description_txt'

})(jQuery, AdobeEdge, "EDGE-53125087");