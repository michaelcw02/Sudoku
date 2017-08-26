/*
   loriacarlos@gmail
   Spaghetti code flow
*/
// Util
function addZero(s){
		 return  (s.length < 2) ? ("0" + s) : s;
}
// Registro de eventos (onload)
$(document).ready(function(){
	// Simulamos un modelo
	function Model(){
	   this.count = 0;
	   this.results = [];
	   
	};
	Model.prototype.update = function(data){
	  var date = new Date();
	  this.results[this.count++] = "'" + data + "' a las " + date;
	}
	Model.prototype.last = function(){
	  return this.results[this.results.length-1];
	}
	var model = new Model();
	// Controller
	// Onclick request
	$("#requestAjax").click(function(){
	   // Request de Ajax (es una promesa) estilo callback
	   $.ajax({url: '../data/texto.txt', 
			   type:'GET',
			   dataType:'text'

			 }).done(function(result){
					  model.update(result);
					  $("#text h2 span")
						.html(model.last())
						.addClass("big red underline");
					  $("#requestAjax").prop( "disabled", true );
					  setTimeout(
						function(){
						  $("#requests").append("<br/>" + model.count + ". "+ model.last());
						  $("#requestAjax").prop("disabled", false );
						}, 5000);
					})
			  .fail(function(e, msg, excpn){
				     alert('**** AJAX ERROR ' + msg + ' ****');
					});
		}); // onclick
		var timer = setInterval(function(){
		   var date = new Date();
		   var time = [date.getHours(), date.getMinutes(), date.getSeconds()]
					  .map(function(s){return addZero(s.toString());})
					  .join(":");
		   $("#time").text(time)
		}, 10);
});