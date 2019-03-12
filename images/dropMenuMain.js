<!--
function MM_findObj(n, d) { //v3.0
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document); return x;
}
function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}
function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_preloadImages() { //v3.0
 var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
   var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
   if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}
function fwLoadMenus() {
  if (window.fw_menu_0) return;
	window.fw_menu_1 = new Menu("root",200,18,"Arial Narrow, Arial, Helvetica, sans-serif",12,"#c0ba9c","#ffffff","#350909","#350909");
	fw_menu_1.addMenuItem("MATERIALS COMPARISON CHART","location='materials.html'");
	fw_menu_1.addMenuItem("OUR INSTALLATION PROCESS","location='process.html'");
	fw_menu_1.addMenuItem("COMPUTER IMAGING","location='imaging.html'");
	fw_menu_1.hideOnMouseOut=true;
	window.fw_menu_2 = new Menu("root",400,400,"Arial Narrow, Arial, Helvetica, sans-serif",22,"#c0ba9c","#ffffff","#350909","#350909");
	fw_menu_2.addMenuItem("images/webdev.jpg","location='#'");
	fw_menu_2.hideOnMouseOut=true;
	window.fw_menu_3 = new Menu("root",300,218,"Arial Narrow, Arial, Helvetica, sans-serif",12,"#c0ba9c","#ffffff","#350909","#350909");
	fw_menu_3.addMenuItem("JESS dweCKS","location='pooldecks.html'");
	fw_menu_3.addMenuItem("DRIVEWAYS","location='driveways.html'");
	fw_menu_3.addMenuItem("PATIOS","location='patios.html'");
	fw_menu_3.addMenuItem("PATHS","location='paths.html'");
	fw_menu_3.addMenuItem("WALLS","location='walls.html'");
	fw_menu_3.hideOnMouseOut=true;
    window.fw_menu_3_1 = new Menu("GMP Synthesis",200,17,"Arial, Helvetica, sans-serif",10,"#005596","#ced7e7","#cdd7e3","#005596");
	window.fw_menu_4 = new Menu("root",110,17,"Arial, Helvetica, sans-serif",10,"#005596","#ced7e7","#cdd7e3","#005596");
	fw_menu_4.addMenuItem("","location=''");
	fw_menu_4.addMenuItem("","location=''");
	fw_menu_4.addMenuItem("","location=''");
    fw_menu_4.hideOnMouseOut=true;
    window.fw_menu_5_1 = new Menu("",160,17,"Arial, Helvetica, sans-serif",10,"#005596","#ced7e7","#cdd7e3","#005596");
    fw_menu_5_1.addMenuItem("","location=''");
    fw_menu_5_1.addMenuItem("","location=''");
    fw_menu_5_1.addMenuItem("","location=''");
    fw_menu_5_1.hideOnMouseOut=true;
    window.fw_menu_5 = new Menu("root",145,17,"Arial, Helvetica, sans-serif",10,"#005596","#ced7e7","#cdd7e3","#005596");
    fw_menu_5.addMenuItem("","location=''");
    fw_menu_5.addMenuItem("","location=''");
    fw_menu_5.addMenuItem(fw_menu_5_1,"location='#'");
    fw_menu_5.hideOnMouseOut=true;
    fw_menu_5.childMenuIcon="spacer.gif";
    fw_menu_4.writeMenus();
}
-->
