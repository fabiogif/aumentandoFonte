
var elemento = $(".acessibilidade");
var tamanho = elemento.css('font-size');


function addfonte(e){
	var elemento = $(".acessibilidade");
	var tamanho = elemento.css('font-size');
	if (e == 'a') {
        elemento.css("fontSize", parseInt(tamanho) + 1);
        
	} else if('d'){
		elemento.css("fontSize", parseInt(tamanho) - 1);
    }
    
    salvaStorage(tamanho);
}


if (localStorage.getItem('fonte')) {
    items = localStorage.getItem('fonte');
    elemento.css("fontSize", items);
} else {
    items = [];
  }

function salvaStorage(tamanho){
   localStorage.setItem('fonte', tamanho);
}