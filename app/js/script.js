 $.getJSON("https://galvanize-eats-api.herokuapp.com/menu", function(data) {
	$.each(data.menu,addMenuItem);
});
function addMenuItem(index,obj) {
	var html = '<option value=\'{\"name\":\"' + obj.name + '\",\"price\":' + obj.price + '}\'>' + obj.name + ' ' + obj.price + '</option>';
	if (obj.type === 'burger') {
		$('.burger').append(html);
	}
	if (obj.type === 'pizza') {
		$('.pizza').append(html);
	}
}

var order = {  
   // "name":"jon",
   // "phone":12312,
   // "address":"",
   "items":[]
};

$('#add_button').click(addItem);
function addItem() {
	if ($('option:selected') === []) {
		return;
	} else {
		var obj = JSON.parse($('option:selected').attr('value'));
		var html = '<p class=\'a_left\'>' + obj.name + '</p><p class=\'a_right\'>' + obj.price + '</p><div style=\"clear: both;\"></div>';
		var count = $('#quant')[0].value;
		for (i=0 ; i < count ; i++) {
			$('#list').append(html);
			var subtotal = Number( $('#subtotal').text() ) + obj.price;
			$('#subtotal').text(subtotal.toFixed(2));
			$('#tax').text((subtotal*0.07).toFixed(2));
			$('#grandtotal').text((subtotal*1.07).toFixed(2));
			order.items.push(obj.name);
		}
	}
}


$('#deliver_button').click(sendPost);

function sendPost() {
	order.name = $('#name').val();
	order.phone = $('#phone').val();
	order.address = $('#address').val();
	$.post("https://galvanize-eats-api.herokuapp.com/orders", order, function(data){
		console.log(data);
		$('#cong').text(data);
		$('#overlay').css('display','inline');
	});
}