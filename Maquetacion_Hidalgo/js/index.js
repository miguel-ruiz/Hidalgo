//FUNCION PARA AUTOCOMPLIT DE REGISTRO DE SOLICITUD

$(document).ready(function(){
//$('#DataTables_Table_0_length').css('display',"none");
	$("#submenu").hide();
	$("#submenu2").hide();
//ALBOL DE ARCHIVOS
$(".browser").treeview();
$('#cerrar').click(function(){
	 $("#submenu").hide(400);
});
$('#cerrar2').click(function(){
	 $("#submenu2").hide(400);
});
$('#op1').click(function(){
	 $("#submenu").show(500);
	 $("#submenu2").hide();
});
$('#op2').click(function(){
	 $("#submenu2").show(500);
	$("#submenu").hide();
});


});
