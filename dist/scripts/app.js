!function(e){"use strict";var r=e.querySelector("#app");r.baseUrl="/",r.limitToFirst=0,r.limitToLast=0,r.startAt="",r.endAt="",r.addEventListener("dom-change",function(){}),window.addEventListener("WebComponentsReady",function(){var o=e.querySelector("paper-scroll-header-panel"),t=e.querySelector("#scrollThreshold"),n=e.querySelector("#arrowUp"),a=(e.querySelector("#firebaseLogin"),e.querySelector(".container"),e.querySelector("#headerBg")),l=e.querySelector("#condensedHeaderBg");a.style.backgroundImage="url("+r.baseUrl+"images/header.jpg)",l.style.backgroundImage="url("+r.baseUrl+"images/header2.jpg)",t.scrollTarget=o.scroller,n.hidden=!0,o.addEventListener("content-scroll",function(){t._scrollTop>192?n.hidden=!1:n.hidden=!0})}),window.addEventListener("paper-header-transform",function(r){var o=Polymer.dom(e).querySelector("#mainToolbar .app-name"),t=Polymer.dom(e).querySelector("#mainToolbar .middle-container"),n=(Polymer.dom(e).querySelector("#mainToolbar .bottom-container"),r.detail),a=n.height-n.condensedHeight,l=Math.min(1,n.y/a),i=.5,s=a-n.y,c=a/(1-i),u=Math.max(i,s/c+i);Polymer.Base.transform("scale("+u+") translateZ(0)",t),t.style.opacity=1-l,Polymer.Base.transform("scale("+u+") translateZ(0)",o)}),r.closeDrawer=function(){r.$.paperDrawerPanel.closeDrawer()},r.refreshApp=function(){location.reload()},r.scrollPageToTop=function(){r.$.headerPanelMain.scrollToTop(!0)},r.showArrow=function(){this.async(function(){scrollThreshold.clearTriggers()})},r.openSearchDialog=function(){r.$.searchDialog.open()},r.error=null,r.signIn=function(){this.error=null,this.$.auth.signInWithPopup()},r.signOut=function(){this.error=null,this.$.auth.signOut()},r.showError=function(e){this.error=e.detail,r.toggleAuthErrorToast()},r.loginTap=function(e){r.user?r.signOut():r.signIn()},r.toggleAuthErrorToast=function(){this.$.authErrorToast.fitInto=this.$.pagesContainer,this.$.authErrorToast.toggle()},r._loadMoreData=function(){}}(document);