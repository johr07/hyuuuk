$(function(){
	link();
})
function link(){
	$(document).on("click","a[href='#']",function(e){
		e.preventDefault();
	})
}