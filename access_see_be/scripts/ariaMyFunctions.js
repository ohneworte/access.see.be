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
 * Component: ariaMyFunctions.js
 * Adaption of <http://www.w3.org/WAI/PF/adaptable/HTML4/embedding-20061212.html>
 *
 *--------------------------------------------------------------------------*/

var AriaMyFunction = Class.create();
AriaMyFunction.prototype = {
	preloadArea: 'wizardContent',
		
	initialize: function(wairole) {
		this.wairole = wairole;
	}
};