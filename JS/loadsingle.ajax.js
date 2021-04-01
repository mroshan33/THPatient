// http://127.0.0.1:5500/single.html?prescription=101

var urlParams = new URLSearchParams(window.location.search);
const CURRENTID = urlParams.get('prescription');
console.info('Prescription ID:', CURRENTID);

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
    function generatephysioname(name){
        console.info(name);
        var prescribedby = '<div class="prescription-date" "prescription-meta" > Prescribed by: ' + name  + '</div>';
        return prescribedby;
    }

function getPhysioName(id){
   $name = "";
    jso
      .ajax({
        dataType: "json",
        url: RESTROOT + "/wp/v2/users/" + id,
      })
  
      .done(function (object) {
         name = object.name;
        
      })
  
      .fail(function () {
        console.error("REST error. Nothing returned for AJAX.");
      })
  
      .always(function () {
        
      });
      return name;
}


function createPrescription(object){
    $('.single-prescription').empty().append( '<article class="prescription"></article>');

    var prescription=
    '<h2 class="prescription-title">' + object.title.rendered + '</h2>' +
    '<div class="prescription-date" "prescription-meta" >' + getDate(object) + '</div>' +
    '<div class="prescription-date" "prescription-meta" > Prescribed by: ' + getPhysioName(object.author) + '</div> <br>' +
    '<div class="prescription-sub"> Description:' + object.content.rendered + '</div>' 
    +
    '<div class="prescription-sub"> Please Watch the following videos: <div>' + object.cmb2.prescriptionbook_metabox.prescriptionbook_videos + '</div></div>';


    
    $('.single-prescription article').append(prescription);
    
}

function getPrescription(prescriptionRoute) {
    $(".main-area").append(
      '<div class="loader"><img src="JS/spinner.svg" class="ajax-loader"/></div>'
    );
  
    jso
      .ajax({
        dataType: "json",
        url: prescriptionRoute,
      })
  
      .done(function (object) {
          console.info(object);
        createPrescription(object);
      })
  
      .fail(function () {
        console.error("REST error. Nothing returned for AJAX.");
      })
  
      .always(function () {
        $(".loader").remove();
      });
  }

if(CURRENTID !== null){
    let prescriptionRoute = RESTROUTE + CURRENTID;
    console.info('prescriptionRoute: ', prescriptionRoute);
    getPrescription(prescriptionRoute);
} else {
    window.location.href = "/prescriptionlist.html";
}

