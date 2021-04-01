//localhost/thv2/wp-json/wp/v2/users
function displayLoggedInUserName(object){

    $(".welcome-user").empty().append("<p class='site-title'> Welcome " + object.name + "</p>");
}

function getLoggedInUserName(){
    $(".welcome-user").append(
        '<div class="loader"><img src="JS/spinner.svg" class="ajax-loader"/></div>'
      );
        jso
            .ajax({
                dataType: "json",
                url: RESTROOT + "/wp/v2/users/me",
            })

            .done(function (object) {
                displayLoggedInUserName(object);
              })
          
              .fail(function () {
                console.error("REST error. Nothing returned for AJAX.");
              })
          
              .always(function () {
                $(".loader").remove();
              });
}

if (token !== null) {
    getLoggedInUserName();
  } else {
    window.location.href = "/";
  }