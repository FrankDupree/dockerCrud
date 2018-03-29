//Add a user
$("form[name='add']").on('submit',function(e){
    e.preventDefault();
    $.ajax({
        type     : "POST",
        url      : $(this).attr('action'),
        data     : $(this).serialize(),
        success  : function(data) {
        	alert("success");
            window.location.replace("/");
        }
    });

});

//Update a user
$('form').on('submit',function(e){
    e.preventDefault();
    $.ajax({
        type     : "PUT",
        url      : $(this).attr('action'),
        data     : $(this).serialize(),
        success  : function(data) {
        	alert("success");
            window.location.replace("/");
        }
    });

});


//Delete a user
function deleteUser(id){
    var choice = window.confirm("Are you sure?");
    if (choice) {
	    //delete the user
		$.ajax({
	        type     : "DELETE",
	        url      : "users/"+id,
	        success  : function(data) {
	        	console.log(data);
	            location.reload();
	        }
	    });

	} else {
	    //do nothing
	}
}
