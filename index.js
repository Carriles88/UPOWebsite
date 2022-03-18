$(".dotContainer").on("click", function(){
    if ($(this).find(".dot").hasClass("dotStatic")) {
        $(this).find(".dot").toggleClass("dotActive").toggleClass("dotStatic")
        $(this).siblings(".dotContainer").find(".dot").removeClass("dotActive").addClass("dotStatic")
        $("#bannerText").removeClass("bannerTextAnimation")
        $("#bannerText").width();
        $("#bannerText").addClass("bannerTextAnimation")
    }
});
$(".dc1").on("click", function(){
    $("header").css("background-image", "url('../images/bg.jpg')")
    $("#bannerText").text("United Professional Organizers")
    $("#bannerText").css("font-size", "80px")
});
$(".dc2").on("click", function(){
    $("header").css("background-image", "url('../images/bg2.jpg')")
    $("#bannerText").text("Founded in Austin, TX")
    $("#bannerText").css("font-size", "80px")
});
$(".dc3").on("click", function(){
    $("header").css("background-image", "url('../images/bg3.jpg')")
    $("#bannerText").text("Members of UPO - North Texas have achieved recognition from the AFL-CIO! Good luck to the Dallas County and Tarrant County Neighborhood Field Teams!")
    $("#bannerText").css("font-size", "40px")
});
$(".dc4").on("click", function(){
    $("header").css("background-image", "url('../images/bg4.jpg')")
    $("#bannerText").text("The United Professional Organizers to represent the workers on Julie Oliver for TX25!")
    $("#bannerText").css("font-size", "40px")
});