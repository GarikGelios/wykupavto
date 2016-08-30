$('#myAffix').affix({
  offset: {
    top: 200,
    bottom: function () {
      return (this.bottom = $('.footer').outerHeight(true))
    }
  }
})
$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Заявка была принята. Спасибо!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});