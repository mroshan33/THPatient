<<<<<<< HEAD
/**
 * Script for loading the prescription list
 * Constant RESTROUTE and variable token inherited from oath.js
 */
function getDate(object){
  let date;
  let options = {
    weekday:  "long",
    year:     "numeric",
    month:    "short",
    day:      "numeric",
    hour:     "2-digit",
    minute:   "2-digit",
  };
  let prescriptionDate = new Date(object.date);
  date = 'Prescribed on <time datetime="' + object.date +'">' + prescriptionDate.toLocaleDateString("en-au", options) +
  '</time>';
  return date;
}

function createPrescriptionList(object) {
  $(".prescription-list").empty().append("<ul></ul>");
  
  if (object.length!==0) {
    $(".site-nav ul li p").empty().append("Your Prescriptions:");
  for (let i = 0; i < object.length; i++) {
    let navListItem =
      '<li>' + 
      '<a href="single.html?prescription=' + object[i].id + '">' +
    '<h2 class="prescription-title">' + object[i].title.rendered + '</h2>' +
    '<div class="prescription-date">' +
      getDate(object[i]) +
    '</div>'+

    '</a>'+
    '</li>';
    $(".prescription-list ul").append(navListItem);
  }
  console.info(object);
}else {
    $(".site-nav ul li p").empty().append("You do not have any prescriptions yet.");

  }
}

function getPrescriptionList() {
  $(".prescription-list").append(
    '<div class="loader"><img src="JS/spinner.svg" class="ajax-loader"/></div>'
  );

  jso
    .ajax({
      dataType: "json",
      url: RESTROUTE,
    })

    .done(function (object) {
      createPrescriptionList(object);
    })

    .fail(function () {
      console.error("REST error. Nothing returned for AJAX.");
    })

    .always(function () {
      $(".loader").remove();
    });
}

if (token !== null) {
  getPrescriptionList();
} else {
  window.location.href = "/";
}
=======
/**
 * Script for loading the prescription list
 * Constant RESTROUTE and variable token inherited from oath.js
 */
function getDate(object){
  let date;
  let options = {
    weekday:  "long",
    year:     "numeric",
    month:    "short",
    day:      "numeric",
    hour:     "2-digit",
    minute:   "2-digit",
  };
  let prescriptionDate = new Date(object.date);
  date = 'Prescribed on <time datetime="' + object.date +'">' + prescriptionDate.toLocaleDateString("en-au", options) +
  '</time>';
  return date;
}

function createPrescriptionList(object) {
  $(".prescription-list").empty().append("<ul></ul>");
  
  if (object.length!==0) {
    $(".site-nav ul li p").empty().append("Your Prescriptions:");
  for (let i = 0; i < object.length; i++) {
    let navListItem =
      '<li>' + 
      '<a href="single.html?prescription=' + object[i].id + '">' +
    '<h2 class="prescription-title">' + object[i].title.rendered + '</h2>' +
    '<div class="prescription-date">' +
      getDate(object[i]) +
    '</div>'+

    '</a>'+
    '</li>';
    $(".prescription-list ul").append(navListItem);
  }
  console.info(object);
}else {
    $(".site-nav ul li p").empty().append("You do not have any prescriptions yet.");

  }
}

function getPrescriptionList() {
  $(".prescription-list").append(
    '<div class="loader"><img src="JS/spinner.svg" class="ajax-loader"/></div>'
  );

  jso
    .ajax({
      dataType: "json",
      url: RESTROUTE,
    })

    .done(function (object) {
      createPrescriptionList(object);
    })

    .fail(function () {
      console.error("REST error. Nothing returned for AJAX.");
    })

    .always(function () {
      $(".loader").remove();
    });
}

if (token !== null) {
  getPrescriptionList();
} else {
  window.location.href = "/";
}
>>>>>>> 7fbb54bda06e43878db5674851d64a74f1b135bf
