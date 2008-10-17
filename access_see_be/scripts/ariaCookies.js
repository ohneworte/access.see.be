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
 * Component: ariaCookie.js 
 * Based on EasyCookie v0.2.1 <http://pablotron.org/software/easy_cookie>
 *
 *--------------------------------------------------------------------------*/

var AriaCookie=Class.create();AriaCookie.prototype={initialize:function(){this.EPOCH="Thu, 01-Jan-1970 00:00:01 GMT";this.RATIO=1000*60*60*24;this.KEYS=["expires","path","domain"];this.esc=escape;this.un=unescape;this.doc=document;this.me;this.enabled=false},get_now:function(){var A=new Date();A.setTime(A.getTime());return A},cookify:function(D,G){var C,B,F,E=[],A=(arguments.length>2)?arguments[2]:{};E.push(this.esc(D)+"="+this.esc(G));for(C=0;C<this.KEYS.length;C++){B=this.KEYS[C];if(F=A[B]){E.push(B+"="+F)}}if(A.secure){E.push("secure")}return E.join("; ")},alive:function(){var B="__EC_TEST__",A=new Date();A=A.toGMTString();this.set(B,A);this.enabled=(this.remove(B)==A);return this.enabled},set:function(E,H){var D=(arguments.length>2)?arguments[2]:{},C=this.get_now(),B,A={};if(D.expires){D.expires*=this.RATIO;A.expires=new Date(C.getTime()+D.expires);A.expires=A.expires.toGMTString()}var G=["path","domain","secure"];for(i=0;i<G.length;i++){if(D[G[i]]){A[G[i]]=D[G[i]]}}var F=this.cookify(E,H,A);this.doc.cookie=F;return H},has:function(B){B=this.esc(B);var E=this.doc.cookie,D=E.indexOf(B+"="),A=D+B.length+1,C=E.substring(0,B.length);return((!D&&B!=C)||D<0)?false:true},get:function(C){C=this.esc(C);var F=this.doc.cookie,E=F.indexOf(C+"="),A=E+C.length+1,D=F.substring(0,C.length),B;if((!E&&C!=D)||E<0){return null}B=F.indexOf(";",A);if(B<0){B=F.length}return this.un(F.substring(A,B))},remove:function(A){var C=this.get(A),B={expires:this.EPOCH};this.doc.cookie=this.cookify(A,new String(),B);return C},keys:function(){var E=this.doc.cookie,D=E.split("; "),A,C,B=[];for(A=0;A<D.length;A++){C=D[A].split("=");B.push(this.un(C.first()))}return B},all:function(){var E=this.doc.cookie,D=E.split("; "),A,C,B=[];for(A=0;A<D.length;A++){C=D[A].split("=");B.push([this.un(C.first()),this.un(C[1])])}return B}};