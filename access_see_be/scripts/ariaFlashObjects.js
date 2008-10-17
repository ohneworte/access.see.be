/* access.see.be - Accessibility-Library for Prototype, www.access-see-be.net, Version 0.5
 * Copyright (C) 2008  diamonddogs web consulting gesmbh, www.diamonddogs.cc
 *  
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation; either version 2
 * of the License, or (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
 *  
 * Component: ariaFlashObject.js 
 * Based on Unobtrusive Flash Objects (UFO) v3.22 <http://www.bobbyvandersluis.com/ufo>
 *
 *--------------------------------------------------------------------------*/

var AriaFlashObject=Class.create();AriaFlashObject.prototype={initialize:function(){},init:function(C,A,E){this.element=C;this.wairole=A;this.widgetOptions=E;elementContainer=new Element("span",{"class":"aria-"+this.wairole+"-box"});$(C).insert({top:elementContainer});elementContainer.style.width=this.widgetOptions.width+"px";elementContainer.style.height=this.widgetOptions.height+"px";var F=new Element("span",{"class":Aria.delimiter+" presentation",id:"aria"+this.wairole.capitalize()+"Flash_"+widgetHash.get(this.wairole)});var D=elementContainer.appendChild(F);D.appendChild(document.createTextNode("flash"));this.widgetOptions.elementFlash=D;initContent(F);F=new Element("span");elementOverlay=elementContainer.appendChild(F);elementOverlay.style.width=this.widgetOptions.width+"px";elementOverlay.style.height=this.widgetOptions.height+"px";!Aria.supports.opera?elementOverlay.style.position="relative":null;elementOverlay.style.backgroundImage="url("+ariaPath+"../images/aria/spacer.gif)";var B={movie:this.widgetOptions.path+this.widgetOptions.status,width:this.widgetOptions.width,height:this.widgetOptions.height};this.setup(B,D.id)},setup:function(A,B){this.FO=A;this.id=B;this.FO.majorversion="6";this.FO.wmode="transparent";this.FO.swliveconnect="true";this.FO.build="40";this.req=["movie","width","height","majorversion","build"];this.opt=["play","loop","menu","quality","scale","salign","wmode","bgcolor","base","flashvars","devicefont","allowscriptaccess","seamlesstabbing","allowfullscreen","allownetworking"];this.optAtt=["id","name","align"];this.optExc=["swliveconnect"];this.ximovie="ufo.swf";this.xiwidth="215";this.xiheight="138";this.ua=navigator.userAgent.toLowerCase();this.pluginType="";this.fv=[0,0];this.foList=[];this.create()},create:function(){if(!this.uaHas("w3cdom")||this.uaHas("ieMac")){return }this.getFlashVersion();this.foList[this.id]=this.updateFO(this.FO);this.createCSS("#"+this.id,"visibility:hidden;");this.domLoad(this.id);if(typeof window.attachEvent!="undefined"&&this.uaHas("ieWin")){window.attachEvent("onunload",this.cleanupIELeaks)}},updateFO:function(){if(typeof this.FO.xi!="undefined"&&this.FO.xi=="true"){if(typeof this.FO.ximovie=="undefined"){this.FO.ximovie=UFO.ximovie}if(typeof this.FO.xiwidth=="undefined"){this.FO.xiwidth=UFO.xiwidth}if(typeof this.FO.xiheight=="undefined"){this.FO.xiheight=UFO.xiheight}}this.FO.mainCalled=false;return this.FO},domLoad:function(){var A=setInterval(function(){if((document.getElementsByTagName("body")[0]!=null||document.body!=null)&&document.getElementById(this.id)!=null){this.main(this.id);clearInterval(A)}}.bind(this),250);if(typeof document.addEventListener!="undefined"){document.addEventListener("DOMContentLoaded",function(){this.main(this.id);clearInterval(A)}.bind(this),null)}},main:function(){var A=this.foList[this.id];if(A.mainCalled){return }this.foList[this.id].mainCalled=true;document.getElementById(this.id).style.visibility="hidden";if(this.hasRequired(this.id)){if(this.hasFlashVersion(parseInt(A.majorversion,10),parseInt(A.build,10))){if(typeof A.setcontainercss!="undefined"&&A.setcontainercss=="true"){this.setContainerCSS(this.id)}this.writeSWF(this.id)}else{if(A.xi=="true"&&this.hasFlashVersion(6,65)){this.createDialog(this.id)}}}document.getElementById(this.id).style.visibility="visible"},createCSS:function(A,E){var D=document.getElementsByTagName("head")[0];var C=this.createElement("style");if(!this.uaHas("ieWin")){C.appendChild(document.createTextNode(A+" {"+E+"}"))}C.setAttribute("type","text/css");C.setAttribute("media","screen");D.appendChild(C);if(this.uaHas("ieWin")&&document.styleSheets&&document.styleSheets.length>0){var B=document.styleSheets[document.styleSheets.length-1];if(typeof B.addRule=="object"){B.addRule(A,E)}}},setContainerCSS:function(){var C=this.foList[this.id];var A=/%/.test(C.width)?"":"px";var B=/%/.test(C.height)?"":"px";this.createCSS("#"+this.id,"width:"+C.width+A+"; height:"+C.height+B+";");if(C.width=="100%"){this.createCSS("body","margin-left:0; margin-right:0; padding-left:0; padding-right:0;")}if(C.height=="100%"){this.createCSS("html","height:100%; overflow:hidden;");this.createCSS("body","margin-top:0; margin-bottom:0; padding-top:0; padding-bottom:0; height:100%;")}},createElement:function(A){return(this.uaHas("xml")&&typeof document.createElementNS!="undefined")?document.createElementNS("http://www.w3.org/1999/xhtml",A):document.createElement(A)},createObjParam:function(B,D,C){var A=this.createElement("param");A.setAttribute("name",D);A.setAttribute("value",C);B.appendChild(A)},uaHas:function(E){var D=this.ua;switch(E){case"w3cdom":return(typeof document.getElementById!="undefined"&&typeof document.getElementsByTagName!="undefined"&&(typeof document.createElement!="undefined"||typeof document.createElementNS!="undefined"));case"xml":var A=document.getElementsByTagName("meta");var C=A.length;for(var B=0;B<C;B++){if(/content-type/i.test(A[B].getAttribute("http-equiv"))&&/xml/i.test(A[B].getAttribute("content"))){return true}}return false;case"ieMac":return/msie/.test(D)&&!/opera/.test(D)&&/mac/.test(D);case"ieWin":return/msie/.test(D)&&!/opera/.test(D)&&/win/.test(D);case"gecko":return/gecko/.test(D)&&!/applewebkit/.test(D);case"opera":return/opera/.test(D);case"safari":return/applewebkit/.test(D);default:return false}},getFlashVersion:function(){if(navigator.plugins&&typeof navigator.plugins["Shockwave Flash"]=="object"){this.pluginType="npapi";var A=navigator.plugins["Shockwave Flash"].description;if(typeof A!="undefined"){A=A.replace(/^.*\s+(\S+\s+\S+$)/,"$1");var B=parseInt(A.replace(/^(.*)\..*$/,"$1"),10);var E=/r/.test(A)?parseInt(A.replace(/^.*r(.*)$/,"$1"),10):0;this.fv=[B,E]}}else{if(window.ActiveXObject){this.pluginType="ax";try{var C=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7")}catch(D){try{var C=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");this.fv=[6,0];C.AllowScriptAccess="always"}catch(D){if(this.fv[0]==6){return }}try{var C=new ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(D){}}if(typeof C=="object"){var A=C.GetVariable("$version");if(typeof A!="undefined"){A=A.replace(/^\S+\s+(.*)$/,"$1").split(",");this.fv=[parseInt(A[0],10),parseInt(A[2],10)]}}}}},hasRequired:function(){var B=this.req.length;for(var A=0;A<B;A++){if(typeof this.foList[this.id][this.req[A]]=="undefined"){return false}}return true},hasFlashVersion:function(B,A){return(this.fv[0]>B||(this.fv[0]==B&&this.fv[1]>=A))?true:false},writeSWF:function(){var F=this.foList[this.id];var H=document.getElementById(this.id);if(this.pluginType=="npapi"){if(this.uaHas("gecko")||this.uaHas("xml")){while(H.hasChildNodes()){H.removeChild(H.firstChild)}var I=this.createElement("object");I.setAttribute("type","application/x-shockwave-flash");I.setAttribute("data",F.movie);I.setAttribute("width",F.width);I.setAttribute("height",F.height);I.setAttribute("id","ariaFlashElement_"+$(this.id).id.split("_")[1]);var E=this.optAtt.length;for(var G=0;G<E;G++){if(typeof F[this.optAtt[G]]!="undefined"){I.setAttribute(UFO.optAtt[G],F[this.optAtt[G]])}}var D=this.opt.concat(this.optExc);var E=D.length;for(var G=0;G<E;G++){if(typeof F[D[G]]!="undefined"){this.createObjParam(I,D[G],F[D[G]])}}H.appendChild(I)}else{var J="";var D=this.opt.concat(this.optAtt).concat(this.optExc);var E=D.length;for(var G=0;G<E;G++){if(typeof F[D[G]]!="undefined"){J+=" "+D[G]+'="'+F[D[G]]+'"'}}H.innerHTML='<embed type="application/x-shockwave-flash" src="'+F.movie+'" width="'+F.width+'" height="'+F.height+'" pluginspage="http://www.macromedia.com/go/getflashplayer"'+J+"></embed>"}}else{if(this.pluginType=="ax"){var C="";var E=this.optAtt.length;for(var G=0;G<E;G++){if(typeof F[this.optAtt[G]]!="undefined"){C+=" "+this.optAtt[G]+'="'+F[this.optAtt[G]]+'"'}}var A="";var E=this.opt.length;for(var G=0;G<E;G++){if(typeof F[this.opt[G]]!="undefined"){A+='<param name="'+this.opt[G]+'" value="'+F[this.opt[G]]+'" />'}}var B=window.location.protocol=="https:"?"https:":"http:";H.innerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+C+' width="'+F.width+'" height="'+F.height+'" codebase="'+B+"//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version="+F.majorversion+",0,"+F.build+',0"><param name="movie" value="'+F.movie+'" />'+A+"</object>"}}},createDialog:function(){var B=this.foList[this.id];this.createCSS("html","height:100%; overflow:hidden;");this.createCSS("body","height:100%; overflow:hidden;");this.createCSS("#xi-con","position:absolute; left:0; top:0; z-index:1000; width:100%; height:100%; background-color:#fff; filter:alpha(opacity:75); opacity:0.75;");this.createCSS("#xi-dia","position:absolute; left:50%; top:50%; margin-left: -"+Math.round(parseInt(B.xiwidth,10)/2)+"px; margin-top: -"+Math.round(parseInt(B.xiheight,10)/2)+"px; width:"+B.xiwidth+"px; height:"+B.xiheight+"px;");var H=document.getElementsByTagName("body")[0];var F=this.createElement("div");F.setAttribute("id","xi-con");var D=this.createElement("div");D.setAttribute("id","xi-dia");F.appendChild(D);H.appendChild(F);var I=window.location;if(this.uaHas("xml")&&this.uaHas("safari")){document.getElementsByTagName("title")[0].firstChild.nodeValue=document.getElementsByTagName("title")[0].firstChild.nodeValue.slice(0,47)+" - Flash Player Installation";var G=document.getElementsByTagName("title")[0].firstChild.nodeValue.slice(0,47)+" - Flash Player Installation"}else{document.title=document.title.slice(0,47)+" - Flash Player Installation";var G=document.title.slice(0,47)+" - Flash Player Installation"}var A=this.pluginType=="ax"?"ActiveX":"PlugIn";var E=typeof B.xiurlcancel!="undefined"?"&xiUrlCancel="+B.xiurlcancel:"";var C=typeof B.xiurlfailed!="undefined"?"&xiUrlFailed="+B.xiurlfailed:"";this.foList["xi-dia"]={movie:B.ximovie,width:B.xiwidth,height:B.xiheight,majorversion:"6",build:"65",flashvars:"MMredirectURL="+I+"&MMplayerType="+A+"&MMdoctitle="+G+E+C};this.writeSWF("xi-dia")},expressInstallCallback:function(){var B=document.getElementsByTagName("body")[0];var A=document.getElementById("xi-con");B.removeChild(A);this.createCSS("body","height:auto; overflow:auto;");this.createCSS("html","height:auto; overflow:auto;")},cleanupIELeaks:function(){var B=document.getElementsByTagName("object");var D=B.length;for(var C=0;C<D;C++){B[C].style.display="none";for(var A in B[C]){if(typeof B[C][A]=="function"){B[C][A]=null}}}}};