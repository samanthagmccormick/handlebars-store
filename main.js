$(document).on('ready', function() {

	// Product List
	var productTemplateSource = $('#product-template').html();

	var templateFunction = Handlebars.compile(productTemplateSource);

	// Map over your productsData.productsList, and return each product's info
	var productHTML = productsData.productsList.map(function(product) {
	  return  templateFunction(product);
	});

	$('#product-container').append(productHTML);


	// ADD ITEM TO WISHLIST
	$(document).on('click', '.btn-primary', function(){
		// console.log('you clicked the button');

		// Find the closest title
		var thisTitle = $(this).closest('.product').find('h4').text();

		// HANDLEBARS MAGIC...
		var wishlistTemplateSource = $('#wishlist-template').html();
		var templateFunction2 = Handlebars.compile(wishlistTemplateSource);
		// Pass the title into the wishlist template
		var wishlistHTML = templateFunction2(thisTitle);
		$('#wishlist').append(wishlistHTML);
    });

	// REMOVE ITEM FROM WISHLIST
    $(document).on('click', '.btn-danger', function() {
    	console.log('remove this item');
    	$(this).closest('li').remove();
    });




});