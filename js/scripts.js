$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var firstNameInput = $("input#firstName").val();
    var lastNameInput = $("input#lastName").val();
    var addressOneInput = $("input#address1").val();
    var addressTwoInput = $("input#address2").val();

    $(".firstName").text(firstNameInput);
    $(".lastName").text(lastNameInput);
    $(".address1").text(addressOneInput);
    $(".address2").text(addressTwoInput);

    $("#story").show();

    event.preventDefault();

  });
});
