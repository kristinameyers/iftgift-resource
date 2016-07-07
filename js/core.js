$(function() {
	
	$('.sort').click(function() {
		var cell = $(this).attr('id');
		$.getJSON('../iftgift/process/sorting.php', { cell : cell }, function(data) {
			if (!data.error) {
				location.reload();
			}
		});
	});
	
});

$(function() {
	
	$('.expt').click(function() {
		var wishlist = $(this).attr('id');
		$.getJSON('../iftgift/process/wishlistsorting.php', { wishlist : wishlist }, function(data) {
			if (!data.error) {
				location.reload();
			}
		});
	});
	
});

$(function() {
	
	$('.latest').click(function() {
		var wishlistdesc = $(this).attr('id');
		$.getJSON('../iftgift/process/wishlistsorting.php', { wishlistdesc : wishlistdesc }, function(data) {
			if (!data.error) {
				location.reload();
			}
		});
	});
	
});