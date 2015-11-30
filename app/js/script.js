 

$.getJSON("https://galvanize-eats-api.herokuapp.com/menu", function(data) {
	$.each(data.menu,addItem);
});

function addItem(index,obj) {
	//console.log(index);
	//console.log(obj);
	var html = '<option value=\'{\"name\":\"' + obj.name + '\",\"price\":' + obj.price + '}\'>' + obj.name + ' ' + obj.price + '</option>';
	console.log(html);
	if (obj.type === 'burger') {
		console.log('b');
		$('.burger').append(html);
	}
	if (obj.type === 'pizza') {
		$('.pizza').append(html);
	}

}