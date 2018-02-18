const modal = document.getElementById('pairedProgammerModal');
const ex = document.getElementById('close');

$("#submitBtn").on("click", function(e){
  e.preventDefault();
  function validateSurvey(){
    var formCompleted = true;
    //iterate over two inputFields. 
    $('.inputFields').each(function(){
      if($(this).val() === ''){
        formCompleted = false;
  
      }
    });//inputFields
    $('.dropDowns').each(function(){
      if($(this).val() === ''){
        formCompleted = false;
      }
    });//dropDowns
    return formCompleted;
  };//end validateSurvey

  if(validateSurvey()===true){
    var newFriend = {
      name: $("#name").val().trim(),
      photo: $("#photoUrl").val().trim(),
      scores: [
      $('#question1').val(), 
      $('#question2').val(), 
      $('#question3').val(), 
      $('#question4').val(), 
      $('#question5').val(), 
      $('#question6').val(), 
      $('#question7').val(), 
      $('#question8').val(), 
      $('#question9').val(), 
      $('#question10').val()
      ]
    }
    alert(`Thank you, ${newFriend.name}. Your survey is completed`);
    var currentURL = window.location.origin;
    $.post(currentURL+"/api/friends", newFriend, function(data){
      $("#pairProgName").text(data.name);
      $('#pairProgImg').attr("src", data.photo);
      modal.style.display = "block";
    });//end post
  } else {
    alert("Our elite pool of programmers are paired only with those who know how to fill out a survey completely. Try again, Karen.");
  }
  ex.onclick = function() {
    modal.style.display = "none";
  };
  window.onclick = function(e) {
    if (e.target == modal) {
      modal.style.display = "none";
      
    }
  }
});