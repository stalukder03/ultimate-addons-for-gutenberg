(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[38],{236:function(e,t,n){"use strict";var a=n(14),o=n.n(a)()((function(e){return e[1]}));o.push([e.i,'/*#######################################################################################*/\n/**\r\n * google-material-color v1.2.6\r\n * https://github.com/danlevan/google-material-color\r\n */\n.rfipbtn--default {\n  background-color: #ffffff;\n  border: 1px solid #e0e0e0; }\n  .rfipbtn--default:active, .rfipbtn--default:focus {\n    box-shadow: 0 1.5px 4px rgba(0, 0, 0, 0.24), 0 1.5px 6px rgba(0, 0, 0, 0.12);\n    border: 1px solid #bdbdbd; }\n  .rfipbtn--default .rfipbtn__button {\n    border: 0 none transparent;\n    border-left: 1px solid #e0e0e0;\n    background-color: #f5f5f5;\n    color: #424242; }\n    .rfipbtn--default .rfipbtn__button:hover {\n      background-color: #bdbdbd; }\n    .rfipbtn--default .rfipbtn__button:active {\n      box-shadow: inset 0 0 10px 0 #e0e0e0; }\n  .rfipbtn--default .rfipbtn__icon {\n    border: 1px solid #eeeeee;\n    color: #424242; }\n    .rfipbtn--default .rfipbtn__icon--empty {\n      color: #e0e0e0; }\n  .rfipbtn--default .rfipbtn__del {\n    background-color: #eeeeee; }\n    .rfipbtn--default .rfipbtn__del:hover {\n      background-color: #e0e0e0; }\n    .rfipbtn--default .rfipbtn__del:focus, .rfipbtn--default .rfipbtn__del:active {\n      outline: 1px solid #e0e0e0; }\n\n.rfipdropdown--default {\n  box-shadow: 0 15px 24px rgba(0, 0, 0, 0.22), 0 19px 76px rgba(0, 0, 0, 0.3);\n  color: #424242;\n  background-color: #ffffff;\n  border: 1px solid #e0e0e0; }\n  .rfipdropdown--default input,\n  .rfipdropdown--default select {\n    color: #424242; }\n  .rfipdropdown--default .rfipcategory select {\n    background-color: #ffffff;\n    border: 0 none;\n    border-bottom: 1px solid #bdbdbd;\n    transition: box-shadow 250ms, border 250ms; }\n    .rfipdropdown--default .rfipcategory select:focus, .rfipdropdown--default .rfipcategory select:active {\n      border-bottom-color: #9e9e9e;\n      box-shadow: 0 1px 0 0 #9e9e9e;\n      outline: 0 none; }\n  .rfipdropdown--default .rfipicons__cp {\n    border: 0 none;\n    border-bottom: 1px solid #bdbdbd;\n    transition: box-shadow 250ms, border 250ms; }\n    .rfipdropdown--default .rfipicons__cp:focus, .rfipdropdown--default .rfipicons__cp:active {\n      border-bottom-color: #9e9e9e;\n      box-shadow: 0 1px 0 0 #9e9e9e;\n      outline: 0 none; }\n  .rfipdropdown--default .rfipicons__left, .rfipdropdown--default .rfipicons__right {\n    background-color: #eeeeee;\n    border: 1px solid #eeeeee;\n    color: #424242; }\n    .rfipdropdown--default .rfipicons__left:hover, .rfipdropdown--default .rfipicons__right:hover {\n      background-color: #bdbdbd;\n      border: 1px solid #bdbdbd; }\n    .rfipdropdown--default .rfipicons__left:focus, .rfipdropdown--default .rfipicons__left:active, .rfipdropdown--default .rfipicons__right:focus, .rfipdropdown--default .rfipicons__right:active {\n      border: 1px solid #bdbdbd; }\n  .rfipdropdown--default .rfipicons__ibox {\n    background-color: #f5f5f5;\n    border: 1px solid #f5f5f5;\n    color: #424242; }\n    .rfipdropdown--default .rfipicons__ibox:hover {\n      background-color: #bdbdbd;\n      border: 1px solid #bdbdbd; }\n    .rfipdropdown--default .rfipicons__ibox:focus, .rfipdropdown--default .rfipicons__ibox:active {\n      border: 1px solid #bdbdbd; }\n    .rfipdropdown--default .rfipicons__ibox--error {\n      color: #ef9a9a; }\n  .rfipdropdown--default .rfipsearch input {\n    border: 0 none;\n    border-bottom: 1px solid #bdbdbd;\n    transition: box-shadow 250ms, border 250ms; }\n    .rfipdropdown--default .rfipsearch input:focus, .rfipdropdown--default .rfipsearch input:active {\n      border-bottom-color: #9e9e9e;\n      box-shadow: 0 1px 0 0 #9e9e9e;\n      outline: 0 none; }\n\n.rfipbtn,\n.rfipdropdown {\n  margin: 0;\n  padding: 0;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",\r "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",\r "Helvetica Neue", sans-serif;\n  font-size: 14px;\n  line-height: 1.71429;\n  vertical-align: baseline;\n  box-sizing: border-box; }\n  .rfipbtn *,\n  .rfipdropdown * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0; }\n  .rfipbtn input,\n  .rfipbtn select,\n  .rfipdropdown input,\n  .rfipdropdown select {\n    font-size: 14px; }\n\n.rfip {\n  position: relative;\n  display: inline-block;\n  margin: 8px;\n  vertical-align: middle;\n  width: 100%; }\n\n.rfipbtn {\n  width: 100%;\n  display: flex;\n  flex-flow: row nowrap;\n  min-height: 50px;\n  border-radius: 2px;\n  cursor: pointer;\n  transition: box-shadow 250ms, border-color 250ms;\n  outline: 0 none;\n  user-select: none; }\n  .rfipbtn--open {\n    border-radius: 2px 2px 0 0; }\n  .rfipbtn__button {\n    width: 48px;\n    margin-left: auto;\n    display: flex;\n    align-items: center;\n    /* x axis center */\n    justify-content: center;\n    /* y axis center */\n    height: auto;\n    /* auto height to fix the flex */\n    transition: background 250ms, box-shadow 250ms; }\n    .rfipbtn__button i {\n      font-size: 32px;\n      transition: transform 250ms; }\n    .rfipbtn__button--open i {\n      transform: rotate(-180deg); }\n  .rfipbtn__current {\n    display: flex;\n    flex-flow: row nowrap;\n    align-items: center;\n    justify-content: center;\n    flex: 0 0 86px;\n    padding: 2px; }\n  .rfipbtn--multi {\n    width: 258px; }\n    .rfipbtn--multi .rfipbtn__current {\n      flex-flow: row wrap;\n      justify-content: flex-start;\n      flex-basis: 212px;\n      align-content: center; }\n  .rfipbtn__icon {\n    margin: 2px;\n    padding: 0;\n    height: 28px;\n    width: 48px;\n    display: flex;\n    flex-flow: row nowrap;\n    align-items: center;\n    justify-content: space-between;\n    border-radius: 2px; }\n    .rfipbtn__icon--empty {\n      font-size: 14px;\n      line-height: 16px;\n      margin-left: 8px;\n      text-align: center;\n      text-transform: lowercase;\n      font-style: italic; }\n  .rfipbtn__elm {\n    display: flex;\n    height: 28px;\n    width: 28px;\n    align-items: center;\n    justify-content: center;\n    font-size: 18px; }\n    .rfipbtn__elm img,\n    .rfipbtn__elm svg {\n      height: 18px;\n      width: auto; }\n  .rfipbtn__del {\n    width: 18px;\n    display: flex;\n    height: 28px;\n    align-items: center;\n    justify-content: center;\n    transition: background-color 250ms;\n    cursor: pointer; }\n\n.rfipcategory {\n  width: 100%;\n  margin: 0 0 8px;\n  position: relative; }\n  .rfipcategory select {\n    width: 100%;\n    display: block;\n    height: 32px;\n    line-height: 32px;\n    border-radius: 0;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    /* remove default arrow */\n    transition: border 250ms, box-shadow 250ms;\n    background-color: transparent !important; }\n  .rfipcategory i {\n    position: absolute;\n    right: 2px;\n    top: 0;\n    font-size: 16px;\n    line-height: 32px;\n    z-index: -1; }\n\n.rfipdropdown {\n  width: 352px;\n  position: absolute;\n  left: 0;\n  margin-top: -1px;\n  z-index: 100000001;\n  border-radius: 0 1px 4px 4px; }\n  .rfipdropdown__selector {\n    overflow: hidden;\n    padding: 16px; }\n  .rfipdropdown.fipappear-enter-active .rfipdropdown__selector, .rfipdropdown.fipappear-exit-active .rfipdropdown__selector {\n    transition: max-height 300ms ease-out, padding 300ms ease-out;\n    padding: 16px; }\n\n.rfipicons__pager {\n  display: flex;\n  flex-flow: row nowrap;\n  height: 24px;\n  line-height: 24px;\n  align-items: center;\n  margin-bottom: 8px; }\n\n.rfipicons__num {\n  width: 100px;\n  margin-right: auto; }\n\n.rfipicons__cp {\n  width: 32px;\n  margin-right: 8px;\n  height: 24px;\n  line-height: 24px;\n  text-align: right; }\n\n.rfipicons__sp {\n  margin-right: 8px; }\n\n.rfipicons__tp {\n  margin-right: 8px; }\n\n.rfipicons__arrow {\n  margin-left: auto;\n  width: 56px;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-end;\n  align-items: center;\n  height: 24px;\n  user-select: none; }\n\n.rfipicons__right {\n  margin-left: auto; }\n\n.rfipicons__left, .rfipicons__right {\n  cursor: pointer;\n  width: 24px;\n  height: 24px;\n  position: relative;\n  transition: background-color 250ms, border 250ms;\n  outline: 0 none;\n  border-radius: 2px;\n  font-size: 18px; }\n\n.rfipicons__label {\n  height: 22px;\n  width: 22px;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n  .rfipicons__label img {\n    height: 18px;\n    width: 18px; }\n\n.rfipicons__selector {\n  display: flex;\n  flex: 1 1 20%;\n  flex-flow: row wrap;\n  align-content: center;\n  justify-content: flex-start; }\n\n.rfipicons__ibox {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  width: 100%;\n  transition: background-color 250ms, border 250ms;\n  border-radius: 2px;\n  outline: 0 none;\n  font-size: 20px; }\n  .rfipicons__ibox img,\n  .rfipicons__ibox svg {\n    max-height: 24px;\n    width: auto; }\n  .rfipicons__ibox > * {\n    transform: scale(1);\n    transition: transform 250ms;\n    transform-origin: center; }\n  .rfipicons__ibox:hover > * {\n    transform: scale(1.8); }\n  .rfipicons__ibox--error {\n    text-transform: lowercase;\n    font-style: italic; }\n\n.rfipicons__icon {\n  width: 20%;\n  height: 64px;\n  padding: 1px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer; }\n  .rfipicons__icon--error {\n    display: block;\n    padding: 16px;\n    text-align: center;\n    font-size: 24px;\n    width: 100%;\n    line-height: 1; }\n\n.rfipsearch {\n  width: 100%;\n  margin: 0 0 8px; }\n  .rfipsearch input {\n    width: 100%;\n    display: block;\n    height: 32px;\n    line-height: 32px; }\n\n.components-panel .rfipdropdown,\n.components-panel .rfipdropdown.rfipdropdown--default.fipappear-enter-done {\n  left: 0;\n  width: 100%; }\n\n.components-panel .rfipicons__ibox {\n  font-size: 15px; }\n\n.components-panel .rfipicons__icon {\n  height: 40px; }\n\n.components-panel .rfipicons__ibox:hover > * {\n  -webkit-transform: scale(1.45);\n  -ms-transform: scale(1.45);\n  transform: scale(1.45); }\n\n.rfipdropdown--default .rfipicons__icon--selected .rfipicons__ibox svg {\n  fill: #007cba; }\n\n.rfipbtn--default .rfipbtn__icon {\n  color: #424242;\n  height: 40px;\n  border: 0; }\n\n.rfipbtn--default .rfipbtn__del {\n  height: 7px;\n  background-color: #007cba33;\n  color: #007cba;\n  font-weight: bold;\n  padding: 8px 8px 10px 8px;\n  border-radius: 100%;\n  margin-left: 10px; }\n\n.rfipdropdown--default .rfipicons__ibox,\n.rfipdropdown--default .rfipicons__ibox:focus,\n.rfipdropdown--default .rfipicons__ibox:active,\n.rfipdropdown--default .rfipicons__ibox:hover {\n  color: #424242;\n  background-color: transparent;\n  border: 0; }\n\n.rfipdropdown--default .rfipicons__icon--selected .rfipicons__ibox svg {\n  fill: #007cba; }\n\n.rfipicons__ibox img,\n.rfipicons__ibox svg {\n  width: 16px;\n  height: 16px;\n  max-height: 24px; }\n\n.rfipicons__ibox svg {\n  fill: #585858; }\n\n/* Override default CSS - UAG */\n.uag-icon-picker .rfip {\n  margin: 4px 0 0; }\n\n.uag-icon-picker .uag-control-label {\n  padding-bottom: 4px;\n  display: block; }\n',""]),t.a=o},237:function(e,t,n){"use strict";var a,o=n(81),l=n.n(o),i=n(1),r=n.n(i),b=n(13),d=n.n(b),u=n(236),c=0,g={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},s={};s.locals=u.a.locals||{},s.use=function(){return c++||(a=d()(u.a,g)),s},s.unuse=function(){c>0&&!--c&&(a(),a=null)};var p=s,f=n(10),m=n(2);t.a=function(e){return Object(i.useLayoutEffect)((function(){return p.use(),function(){p.unuse()}}),[]),r.a.createElement("div",{className:"components-base-control uag-icon-picker"},r.a.createElement("span",{className:"uag-control-label"},(null==e?void 0:e.label)||Object(m.__)("Icon","ultimate-addons-for-gutenberg")),r.a.createElement(l.a,{icons:(null==e?void 0:e.icons)||wp.UAGBSvgIcons,renderFunc:f.a,theme:"default",value:e.value,onChange:e.onChange,isMulti:e.isMulti||!1,noSelectedPlaceholder:e.noSelectedPlaceholder||Object(m.__)("Select Icon","ultimate-addons-for-gutenberg")}))}},373:function(e,t,n){"use strict";n.r(t);var a=n(237),o=n(79),l=n(52),i=n(1),r=n.n(i),b=n(2),d=n(16),u=n(15),c=n(78),g=n(34),s=n(39),p=n(10),f=n(44),m=n(80),h=n(17),_=n(5),v=n(4);function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var y=function(e){var t,n,i,y,O,j=e=e.parentProps,w=j.attributes,F=j.categoriesList,T=j.setAttributes,C=j.taxonomyList,S=w.headingColor,E=w.subHeadingColor,M=w.backgroundColor,H=w.separatorColor,z=w.separatorFillColor,L=w.separatorBg,k=w.separatorBorder,P=w.borderFocus,B=w.headingTag,A=w.headFontSizeType,I=w.headFontSize,Y=w.headFontSizeTablet,U=w.headFontSizeMobile,G=w.headFontFamily,W=w.headFontWeight,D=w.headFontSubset,V=w.headLineHeightType,N=w.headLineHeight,R=w.headLineHeightTablet,J=w.headLineHeightMobile,Q=w.headLoadGoogleFonts,q=w.timelinAlignment,K=w.arrowlinAlignment,X=w.subHeadFontSizeType,Z=w.subHeadFontSize,$=w.subHeadFontSizeTablet,ee=w.subHeadFontSizeMobile,te=w.subHeadFontFamily,ne=w.subHeadFontWeight,ae=w.subHeadFontSubset,oe=w.subHeadLineHeightType,le=w.subHeadLineHeight,ie=w.subHeadLineHeightTablet,re=w.subHeadLineHeightMobile,be=w.subHeadLoadGoogleFonts,de=w.headSpace,ue=w.separatorwidth,ce=w.borderwidth,ge=w.connectorBgsize,se=w.authorSpace,pe=w.contentSpace,fe=w.authorColor,me=w.authorFontSizeType,he=w.authorFontSize,_e=w.authorFontSizeTablet,ve=w.authorFontSizeMobile,xe=w.authorFontFamily,ye=w.authorFontWeight,Oe=w.authorFontSubset,je=w.authorLineHeightType,we=w.authorLineHeight,Fe=w.authorLineHeightTablet,Te=w.authorLineHeightMobile,Ce=w.authorLoadGoogleFonts,Se=w.dateBottomspace,Ee=w.displayPostDate,Me=w.displayPostExcerpt,He=w.displayPostAuthor,ze=w.displayPostImage,Le=w.displayPostLink,ke=w.align,Pe=w.order,Be=w.orderBy,Ae=w.categories,Ie=w.postsToShow,Ye=w.imageSize,Ue=w.readMoreText,Ge=w.ctaBackground,We=w.icon,De=w.iconColor,Ve=w.dateColor,Ne=w.ctaColor,Re=w.dateFontsizeType,Je=w.dateFontsize,Qe=w.dateFontsizeTablet,qe=w.dateFontsizeMobile,Ke=w.dateFontFamily,Xe=w.dateFontWeight,Ze=w.dateFontSubset,$e=w.dateLineHeightType,et=w.dateLineHeight,tt=w.dateLineHeightTablet,nt=w.dateLineHeightMobile,at=w.dateLoadGoogleFonts,ot=w.ctaFontSizeType,lt=w.ctaFontSize,it=w.ctaFontSizeTablet,rt=w.ctaFontSizeMobile,bt=w.ctaFontFamily,dt=w.ctaFontWeight,ut=w.ctaFontSubset,ct=w.ctaLineHeightType,gt=w.ctaLineHeight,st=w.ctaLineHeightTablet,pt=w.ctaLineHeightMobile,ft=w.ctaLoadGoogleFonts,mt=w.iconSize,ht=w.exerptLength,_t=w.borderRadius,vt=(w.bgPadding,w.contentPadding),xt=w.iconFocus,yt=w.iconBgFocus,Ot=w.stack,jt=w.linkTarget,wt=w.postType,Ft=w.taxonomyType,Tt=w.dateFormat,Ct=w.excludeCurrentPost,St=w.topMargin,Et=w.rightMargin,Mt=w.bottomMargin,Ht=w.leftMargin,zt=w.topMarginTablet,Lt=w.rightMarginTablet,kt=w.bottomMarginTablet,Pt=w.leftMarginTablet,Bt=w.topMarginMobile,At=w.rightMarginMobile,It=w.bottomMarginMobile,Yt=w.leftMarginMobile,Ut=w.marginUnit,Gt=w.mobileMarginUnit,Wt=w.tabletMarginUnit,Dt=w.marginLink,Vt=w.topPadding,Nt=w.rightPadding,Rt=w.bottomPadding,Jt=w.leftPadding,Qt=w.topPaddingTablet,qt=w.rightPaddingTablet,Kt=w.bottomPaddingTablet,Xt=w.leftPaddingTablet,Zt=w.topPaddingMobile,$t=w.rightPaddingMobile,en=w.bottomPaddingMobile,tn=w.leftPaddingMobile,nn=w.paddingUnit,an=w.mobilePaddingUnit,on=w.tabletPaddingUnit,ln=w.paddingLink,rn=[],bn=[{value:"",label:Object(b.__)("All","ultimate-addons-for-gutenberg")}];if(""!=C&&Object.keys(C).map((function(e){return rn.push({value:C[e].name,label:C[e].label})})),""!=F&&Object.keys(F).map((function(e){return bn.push({value:F[e].id,label:F[e].name})})),1==Q){var dn={google:{families:[G+(W?":"+W:"")]}};t=r.a.createElement(l.a,{config:dn})}if(1==be){var un={google:{families:[te+(ne?":"+ne:"")]}};n=r.a.createElement(l.a,{config:un})}if(1==at){var cn={google:{families:[Ke+(Xe?":"+Xe:"")]}};i=r.a.createElement(l.a,{config:cn})}if(1==Ce){var gn={google:{families:[xe+(ye?":"+ye:"")]}};y=r.a.createElement(l.a,{config:gn})}if(1==ft){var sn={google:{families:[bt+(dt?":"+dt:"")]}};O=r.a.createElement(l.a,{config:sn})}var pn,fn,mn=new Date;return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.BlockControls,null,r.a.createElement(v.BlockAlignmentToolbar,{value:ke,onChange:function(e){T({align:e})},controls:["center","left","right"]})),r.a.createElement(v.InspectorControls,null,r.a.createElement(c.a,null,r.a.createElement(g.b,g.a.general,r.a.createElement(_.PanelBody,{title:Object(b.__)("Query","ultimate-addons-for-gutenberg"),initialOpen:!0},r.a.createElement(_.SelectControl,{label:Object(b.__)("Post Type","ultimate-addons-for-gutenberg"),value:wt,onChange:function(e){return function(e){T({postType:e}),T({categories:""})}(e)},options:uagb_blocks_info.post_types}),""!=C&&r.a.createElement(_.SelectControl,{label:Object(b.__)("Taxonomy","ultimate-addons-for-gutenberg"),value:Ft,onChange:function(e){return function(e){T({taxonomyType:e}),T({categories:""})}(e)},options:rn}),""!=F&&r.a.createElement(r.a.Fragment,null,r.a.createElement(_.SelectControl,{label:C[Ft].label,value:Ae,onChange:function(e){return T({categories:e})},options:bn})),r.a.createElement(_.ToggleControl,{label:Object(b.__)("Exclude Current Post","ultimate-addons-for-gutenberg"),checked:Ct,onChange:function(){return T({excludeCurrentPost:!Ct})}}),r.a.createElement(_.QueryControls,{order:Pe,orderBy:Be,numberOfItems:Ie,onNumberOfItemsChange:function(e){return T({postsToShow:e})}}),r.a.createElement(s.a,{setAttributes:T,label:Object(b.__)("Order By","ultimate-addons-for-gutenberg"),data:{value:Be,label:"orderBy"},className:"uagb-multi-button-alignment-control",options:[{value:"date",label:Object(b.__)("Date","ultimate-addons-for-gutenberg")},{value:"title",label:Object(b.__)("Title","ultimate-addons-for-gutenberg")},{value:"rand",label:Object(b.__)("Random","ultimate-addons-for-gutenberg")},{value:"menu_order",label:Object(b.__)("Menu Order","ultimate-addons-for-gutenberg")}],showIcons:!1}),r.a.createElement(s.a,{setAttributes:T,label:Object(b.__)("Order","ultimate-addons-for-gutenberg"),data:{value:Pe,label:"order"},className:"uagb-multi-button-alignment-control",options:[{value:"desc",label:Object(b.__)("Descending","ultimate-addons-for-gutenberg")},{value:"asc",label:Object(b.__)("Ascending","ultimate-addons-for-gutenberg")}],showIcons:!1})),r.a.createElement(_.PanelBody,{title:Object(b.__)("Layout","ultimate-addons-for-gutenberg"),initialOpen:!1},r.a.createElement(s.a,{setAttributes:T,label:Object(b.__)("Orientation","ultimate-addons-for-gutenberg"),data:{value:q,label:"timelinAlignment"},className:"uagb-multi-button-alignment-control",options:[{value:"left",icon:r.a.createElement(_.Icon,{icon:Object(p.a)("fa fa-align-left")}),tooltip:Object(b.__)("Left","ultimate-addons-for-gutenberg")},{value:"center",icon:r.a.createElement(_.Icon,{icon:Object(p.a)("fa fa-align-center")}),tooltip:Object(b.__)("Center","ultimate-addons-for-gutenberg")},{value:"right",icon:r.a.createElement(_.Icon,{icon:Object(p.a)("fa fa-align-right")}),tooltip:Object(b.__)("Right","ultimate-addons-for-gutenberg")}],showIcons:!0}),r.a.createElement(s.a,{setAttributes:T,label:Object(b.__)("Arrow Alignment","ultimate-addons-for-gutenberg"),data:{value:K,label:"arrowlinAlignment"},className:"uagb-multi-button-alignment-control",options:[{value:"top",label:Object(b.__)("Top","ultimate-addons-for-gutenberg"),tooltip:Object(b.__)("Top","ultimate-addons-for-gutenberg")},{value:"bottom",label:Object(b.__)("Bottom","ultimate-addons-for-gutenberg"),tooltip:Object(b.__)("Bottom","ultimate-addons-for-gutenberg")},{value:"center",label:Object(b.__)("Center","ultimate-addons-for-gutenberg"),tooltip:Object(b.__)("Center","ultimate-addons-for-gutenberg")}],showIcons:!1}),r.a.createElement(s.a,{setAttributes:T,label:Object(b.__)("Stack On","ultimate-addons-for-gutenberg"),data:{value:Ot,label:"stack"},className:"uagb-multi-button-alignment-control",options:[{value:"none",label:"None",tooltip:Object(b.__)("None","ultimate-addons-for-gutenberg")},{value:"tablet",label:"Tablet",tooltip:Object(b.__)("Tablet","ultimate-addons-for-gutenberg")},{value:"mobile",label:"Mobile",tooltip:Object(b.__)("Mobile","ultimate-addons-for-gutenberg")}],showIcons:!1,help:Object(b.__)("Note: Choose on what breakpoint the Content Timeline will stack. It will be visible on front end only.","ultimate-addons-for-gutenberg")})),r.a.createElement(_.PanelBody,{title:Object(b.__)("Image","ultimate-addons-for-gutenberg"),initialOpen:!1},r.a.createElement(_.ToggleControl,{label:Object(b.__)("Display Featured Image","ultimate-addons-for-gutenberg"),checked:ze,onChange:function(){return T({displayPostImage:!ze})}}),ze&&r.a.createElement(_.SelectControl,{label:Object(b.__)("Featured Image Style","ultimate-addons-for-gutenberg"),options:uagb_blocks_info.image_sizes,value:Ye,onChange:function(t){return e.setAttributes({imageSize:t})}})),r.a.createElement(_.PanelBody,{title:Object(b.__)("Content","ultimate-addons-for-gutenberg"),initialOpen:!1},r.a.createElement(s.a,{setAttributes:T,label:Object(b.__)("Heading Tag","ultimate-addons-for-gutenberg"),data:{value:B,label:"headingTag"},options:[{value:"h1",label:Object(b.__)("H1","ultimate-addons-for-gutenberg")},{value:"h2",label:Object(b.__)("H2","ultimate-addons-for-gutenberg")},{value:"h3",label:Object(b.__)("H3","ultimate-addons-for-gutenberg")},{value:"h4",label:Object(b.__)("H4","ultimate-addons-for-gutenberg")},{value:"h5",label:Object(b.__)("H5","ultimate-addons-for-gutenberg")},{value:"h6",label:Object(b.__)("H6","ultimate-addons-for-gutenberg")},{value:"span",label:Object(b.__)("Span","ultimate-addons-for-gutenberg")},{value:"p",label:Object(b.__)("P","ultimate-addons-for-gutenberg")}]}),r.a.createElement(_.ToggleControl,{label:Object(b.__)("Display Post Author","ultimate-addons-for-gutenberg"),checked:He,onChange:function(){return T({displayPostAuthor:!He})}}),r.a.createElement(_.ToggleControl,{label:Object(b.__)("Display Post Date","ultimate-addons-for-gutenberg"),checked:Ee,onChange:function(){return T({displayPostDate:!Ee})}}),Ee&&r.a.createElement(_.SelectControl,{label:Object(b.__)("Date Format","ultimate-addons-for-gutenberg"),value:Tt,onChange:function(e){return T({dateFormat:e})},options:[{value:"M j, Y",label:Object(h.dateI18n)("M j, Y",mn)},{value:"F j, Y",label:Object(h.dateI18n)("F j, Y",mn)},{value:"m/d/Y",label:Object(h.dateI18n)("m/d/Y",mn)},{value:"m-d-Y",label:Object(h.dateI18n)("m-d-Y",mn)},{value:"m.d.Y",label:Object(h.dateI18n)("m.d.Y",mn)},{value:"d M Y",label:Object(h.dateI18n)("d M Y",mn)},{value:"d F Y",label:Object(h.dateI18n)("d F Y",mn)},{value:"d-m-Y",label:Object(h.dateI18n)("d-m-Y",mn)},{value:"d.m.Y",label:Object(h.dateI18n)("d.m.Y",mn)},{value:"d/m/Y",label:Object(h.dateI18n)("d/m/Y",mn)},{value:"Y-m-d",label:Object(h.dateI18n)("Y-m-d",mn)},{value:"Y.m.d",label:Object(h.dateI18n)("Y.m.d",mn)},{value:"Y/m/d",label:Object(h.dateI18n)("Y/m/d",mn)},{value:"M, Y",label:Object(h.dateI18n)("M, Y",mn)},{value:"M Y",label:Object(h.dateI18n)("M Y",mn)},{value:"F, Y",label:Object(h.dateI18n)("F, Y",mn)},{value:"F Y",label:Object(h.dateI18n)("F Y",mn)}]}),r.a.createElement(_.ToggleControl,{label:Object(b.__)("Display Post Excerpt","ultimate-addons-for-gutenberg"),checked:Me,onChange:function(){return T({displayPostExcerpt:!Me})}}),Me&&r.a.createElement(u.a,{label:Object(b.__)("Excerpt Length","ultimate-addons-for-gutenberg"),setAttributes:T,value:ht,onChange:function(e){return T({exerptLength:e})},min:1,max:50,displayUnit:!1}),r.a.createElement(_.ToggleControl,{label:Object(b.__)("Display Continue Reading Link","ultimate-addons-for-gutenberg"),checked:Le,onChange:function(){return T({displayPostLink:!Le})}}),Le&&r.a.createElement(r.a.Fragment,null,r.a.createElement(_.TextControl,{label:Object(b.__)("CTA Text","ultimate-addons-for-gutenberg"),value:Ue,onChange:function(e){return T({readMoreText:e})}})),r.a.createElement(_.ToggleControl,{label:Object(b.__)("Open links in New Tab","ultimate-addons-for-gutenberg"),checked:jt,onChange:function(){return T({linkTarget:!jt})}})),r.a.createElement(_.PanelBody,{title:Object(b.__)("Connector","ultimate-addons-for-gutenberg"),initialOpen:!1},r.a.createElement(a.a,{label:Object(b.__)("Icon","ultimate-addons-for-gutenberg"),value:We,onChange:function(t){e.setAttributes({icon:t})}}),We&&r.a.createElement(u.a,{label:Object(b.__)("Icon Size","ultimate-addons-for-gutenberg"),setAttributes:T,value:mt,onChange:function(e){return T({iconSize:e})},min:0,max:30,displayUnit:!1}),r.a.createElement(u.a,{label:Object(b.__)("Icon Background Size","ultimate-addons-for-gutenberg"),setAttributes:T,value:ge,onChange:function(e){return T({connectorBgsize:e})},min:25,max:90,displayUnit:!1}),r.a.createElement(u.a,{label:Object(b.__)("Border Width","ultimate-addons-for-gutenberg"),setAttributes:T,value:ce,onChange:function(e){return T({borderwidth:e})},min:1,max:10,displayUnit:!1}),r.a.createElement(u.a,{label:Object(b.__)("Connector Width","ultimate-addons-for-gutenberg"),setAttributes:T,value:ue,onChange:function(e){return T({separatorwidth:e})},min:1,max:10,displayUnit:!1}))),r.a.createElement(g.b,g.a.style,r.a.createElement(_.PanelBody,{title:Object(b.__)("Title","ultimate-addons-for-gutenberg"),initialOpen:!0},r.a.createElement(d.a,{label:Object(b.__)("Color","ultimate-addons-for-gutenberg"),colorValue:S||"",onColorChange:function(e){return T({headingColor:e})}}),r.a.createElement(o.a,{label:Object(b.__)("Typography","ultimate-addons-for-gutenberg"),attributes:e.attributes,setAttributes:T,loadGoogleFonts:{value:Q,label:"headLoadGoogleFonts"},fontFamily:{value:G,label:"headFontFamily"},fontWeight:{value:W,label:"headFontWeight"},fontSubset:{value:D,label:"headFontSubset"},fontSizeType:{value:A,label:"headFontSizeType"},fontSize:{value:I,label:"headFontSize"},fontSizeMobile:{value:U,label:"headFontSizeMobile"},fontSizeTablet:{value:Y,label:"headFontSizeTablet"},lineHeightType:{value:V,label:"headLineHeightType"},lineHeight:{value:N,label:"headLineHeight"},lineHeightMobile:{value:J,label:"headLineHeightMobile"},lineHeightTablet:{value:R,label:"headLineHeightTablet"}})),r.a.createElement(_.PanelBody,{title:Object(b.__)("Author","ultimate-addons-for-gutenberg"),initialOpen:!1},He&&r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{label:Object(b.__)("Color","ultimate-addons-for-gutenberg"),colorValue:fe||"",onColorChange:function(e){return T({authorColor:e})}}),He&&r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,{label:Object(b.__)("Typography","ultimate-addons-for-gutenberg"),attributes:w,setAttributes:T,loadGoogleFonts:{value:Ce,label:"authorLoadGoogleFonts"},fontFamily:{value:xe,label:"authorFontFamily"},fontWeight:{value:ye,label:"authorFontWeight"},fontSubset:{value:Oe,label:"authorFontSubset"},fontSizeType:{value:me,label:"authorFontSizeType"},fontSize:{value:he,label:"authorFontSize"},fontSizeMobile:{value:ve,label:"authorFontSizeMobile"},fontSizeTablet:{value:_e,label:"authorFontSizeTablet"},lineHeightType:{value:je,label:"authorLineHeightType"},lineHeight:{value:we,label:"authorLineHeight"},lineHeightMobile:{value:Te,label:"authorLineHeightMobile"},lineHeightTablet:{value:Fe,label:"authorLineHeightTablet"}})))),r.a.createElement(_.PanelBody,{title:Object(b.__)("Content","ultimate-addons-for-gutenberg"),initialOpen:!1},Me&&r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{label:Object(b.__)("Color","ultimate-addons-for-gutenberg"),colorValue:E||"",onColorChange:function(e){return T({subHeadingColor:e})}}),Me&&r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,{label:Object(b.__)("Typography","ultimate-addons-for-gutenberg"),attributes:e.attributes,setAttributes:T,loadGoogleFonts:{value:be,label:"subHeadLoadGoogleFonts"},fontFamily:{value:te,label:"subHeadFontFamily"},fontWeight:{value:ne,label:"subHeadFontWeight"},fontSubset:{value:ae,label:"subHeadFontSubset"},fontSizeType:{value:X,label:"subHeadFontSizeType"},fontSize:{value:Z,label:"subHeadFontSize"},fontSizeMobile:{value:ee,label:"subHeadFontSizeMobile"},fontSizeTablet:{value:$,label:"subHeadFontSizeTablet"},lineHeightType:{value:oe,label:"subHeadLineHeightType"},lineHeight:{value:le,label:"subHeadLineHeight"},lineHeightMobile:{value:re,label:"subHeadLineHeightMobile"},lineHeightTablet:{value:ie,label:"subHeadLineHeightTablet"}})))),r.a.createElement(_.PanelBody,{title:Object(b.__)("Date","ultimate-addons-for-gutenberg"),initialOpen:!1},Ee&&r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{label:Object(b.__)("Color","ultimate-addons-for-gutenberg"),colorValue:Ve||"",onColorChange:function(e){return T({dateColor:e})}}),Ee&&r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,{label:Object(b.__)("Typography","ultimate-addons-for-gutenberg"),attributes:e.attributes,setAttributes:T,loadGoogleFonts:{value:at,label:"dateLoadGoogleFonts"},fontFamily:{value:Ke,label:"dateFontFamily"},fontWeight:{value:Xe,label:"dateFontWeight"},fontSubset:{value:Ze,label:"dateFontSubset"},fontSizeType:{value:Re,label:"dateFontsizeType"},fontSize:{value:Je,label:"dateFontsize"},fontSizeMobile:{value:qe,label:"dateFontsizeMobile"},fontSizeTablet:{value:Qe,label:"dateFontsizeTablet"},lineHeightType:{value:$e,label:"dateLineHeightType"},lineHeight:{value:et,label:"dateLineHeight"},lineHeightMobile:{value:nt,label:"dateLineHeightMobile"},lineHeightTablet:{value:tt,label:"dateLineHeightTablet"}})))),r.a.createElement(_.PanelBody,{title:Object(b.__)("CTA","ultimate-addons-for-gutenberg"),initialOpen:!1},Le&&r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{label:Object(b.__)("Color","ultimate-addons-for-gutenberg"),colorValue:Ne||"",onColorChange:function(e){return T({ctaColor:e})}}),r.a.createElement(d.a,{label:Object(b.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:Ge||"",onColorChange:function(e){return T({ctaBackground:e})}}),Le&&r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,{label:Object(b.__)("Typography","ultimate-addons-for-gutenberg"),attributes:w,setAttributes:T,loadGoogleFonts:{value:ft,label:"ctaLoadGoogleFonts"},fontFamily:{value:bt,label:"ctaFontFamily"},fontWeight:{value:dt,label:"ctaFontWeight"},fontSubset:{value:ut,label:"ctaFontSubset"},fontSizeType:{value:ot,label:"ctaFontSizeType"},fontSize:{value:lt,label:"ctaFontSize"},fontSizeMobile:{value:rt,label:"ctaFontSizeMobile"},fontSizeTablet:{value:it,label:"ctaFontSizeTablet"},lineHeightType:{value:ct,label:"ctaLineHeightType"},lineHeight:{value:gt,label:"ctaLineHeight"},lineHeightMobile:{value:pt,label:"ctaLineHeightMobile"},lineHeightTablet:{value:st,label:"ctaLineHeightTablet"}})))),r.a.createElement(_.PanelBody,{title:Object(b.__)("Background","ultimate-addons-for-gutenberg"),initialOpen:!1},r.a.createElement(d.a,{label:Object(b.__)("Color","ultimate-addons-for-gutenberg"),colorValue:M||"",onColorChange:function(e){return T({backgroundColor:e})}})),(pn=r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{label:Object(b.__)("Line Color","ultimate-addons-for-gutenberg"),colorValue:H||"",onColorChange:function(e){return T({separatorColor:e})}}),r.a.createElement(d.a,{label:Object(b.__)("Icon Color","ultimate-addons-for-gutenberg"),colorValue:De||"",onColorChange:function(e){return T({iconColor:e})}}),r.a.createElement(d.a,{label:Object(b.__)("Icon Background Color","ultimate-addons-for-gutenberg"),colorValue:L||"",onColorChange:function(e){return T({separatorBg:e})}}),r.a.createElement(d.a,{label:Object(b.__)("Border Color","ultimate-addons-for-gutenberg"),colorValue:k||"",onColorChange:function(e){return T({separatorBorder:e})}})),fn=r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{label:Object(b.__)("Line Color","ultimate-addons-for-gutenberg"),colorValue:z||"",onColorChange:function(e){return T({separatorFillColor:e})}}),r.a.createElement(d.a,{label:Object(b.__)("Icon Color","ultimate-addons-for-gutenberg"),colorValue:xt||"",onColorChange:function(e){return T({iconFocus:e})}}),r.a.createElement(d.a,{label:Object(b.__)("Icon Background Color","ultimate-addons-for-gutenberg"),colorValue:yt||"",onColorChange:function(e){return T({iconBgFocus:e})}}),r.a.createElement(d.a,{label:Object(b.__)("Border Color","ultimate-addons-for-gutenberg"),colorValue:P||"",onColorChange:function(e){return T({borderFocus:e})}})),r.a.createElement(_.PanelBody,{title:Object(b.__)("Connector","ultimate-addons-for-gutenberg"),initialOpen:!1},r.a.createElement(f.a,{tabs:[{name:"normal",title:Object(b.__)("Normal","ultimate-addons-for-gutenberg")},{name:"focus",title:Object(b.__)("Focus","ultimate-addons-for-gutenberg")}],normal:pn,focus:fn,disableBottomSeparator:!0}))),r.a.createElement(_.PanelBody,{title:Object(b.__)("Spacing","ultimate-addons-for-gutenberg"),initialOpen:!1},r.a.createElement(u.a,{label:Object(b.__)("Rounded Corners","ultimate-addons-for-gutenberg"),setAttributes:T,value:_t,onChange:function(e){return T({borderRadius:e})},min:0,max:50,displayUnit:!1}),r.a.createElement(u.a,{label:Object(b.__)("Content Padding","ultimate-addons-for-gutenberg"),setAttributes:T,value:vt,onChange:function(e){return T({contentPadding:e})},min:1,max:50,displayUnit:!1}),r.a.createElement(u.a,{label:Object(b.__)("Heading Bottom Spacing","ultimate-addons-for-gutenberg"),setAttributes:T,value:de,onChange:function(e){return T({headSpace:e})},min:0,max:100,displayUnit:!1}),He&&r.a.createElement(u.a,{label:Object(b.__)("Author Bottom Spacing","ultimate-addons-for-gutenberg"),setAttributes:T,value:se,onChange:function(e){return T({authorSpace:e})},min:0,max:50,displayUnit:!1}),Me&&Le&&r.a.createElement(u.a,{label:Object(b.__)("Content Bottom Spacing","ultimate-addons-for-gutenberg"),setAttributes:T,value:pe,onChange:function(e){return T({contentSpace:e})},min:0,max:50,displayUnit:!1}),Ee&&"center"!==q&&r.a.createElement(u.a,{label:Object(b.__)("Date Bottom Spacing","ultimate-addons-for-gutenberg"),setAttributes:T,value:Se,onChange:function(e){return T({dateBottomspace:e})},min:0,max:50,displayUnit:!1}),r.a.createElement(m.a,x({},e,{label:Object(b.__)("Content Padding","ultimate-addons-for-gutenberg"),valueTop:{value:Vt,label:"topPadding"},valueRight:{value:Nt,label:"rightPadding"},valueBottom:{value:Rt,label:"bottomPadding"},valueLeft:{value:Jt,label:"leftPadding"},valueTopTablet:{value:Qt,label:"topPaddingTablet"},valueRightTablet:{value:qt,label:"rightPaddingTablet"},valueBottomTablet:{value:Kt,label:"bottomPaddingTablet"},valueLeftTablet:{value:Xt,label:"leftPaddingTablet"},valueTopMobile:{value:Zt,label:"topPaddingMobile"},valueRightMobile:{value:$t,label:"rightPaddingMobile"},valueBottomMobile:{value:en,label:"bottomPaddingMobile"},valueLeftMobile:{value:tn,label:"leftPaddingMobile"},unit:{value:nn,label:"paddingUnit"},mUnit:{value:an,label:"mobilePaddingUnit"},tUnit:{value:on,label:"tabletPaddingUnit"},attributes:e,setAttributes:T,link:{value:ln,label:"paddingLink"}})),r.a.createElement(m.a,x({},e,{label:Object(b.__)("Margin","ultimate-addons-for-gutenberg"),valueTop:{value:St,label:"topMargin"},valueRight:{value:Et,label:"rightMargin"},valueBottom:{value:Mt,label:"bottomMargin"},valueLeft:{value:Ht,label:"leftMargin"},valueTopTablet:{value:zt,label:"topMarginTablet"},valueRightTablet:{value:Lt,label:"rightMarginTablet"},valueBottomTablet:{value:kt,label:"bottomMarginTablet"},valueLeftTablet:{value:Pt,label:"leftMarginTablet"},valueTopMobile:{value:Bt,label:"topMarginMobile"},valueRightMobile:{value:At,label:"rightMarginMobile"},valueBottomMobile:{value:It,label:"bottomMarginMobile"},valueLeftMobile:{value:Yt,label:"leftMarginMobile"},unit:{value:Ut,label:"marginUnit"},mUnit:{value:Gt,label:"mobileMarginUnit"},tUnit:{value:Wt,label:"tabletMarginUnit"},attributes:e,setAttributes:T,link:{value:Dt,label:"marginLink"}})))),r.a.createElement(g.b,g.a.advance))),t,n,i,y,O)};t.default=r.a.memo(y)}}]);