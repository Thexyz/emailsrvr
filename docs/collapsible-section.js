function mobileMenu(element) {
  element.classList.toggle("change");
}

$(document).ready(function() {
    $(".rs-collapsible-section .rs-detail-section-header").click(function()
    {
        $(this).parent().toggleClass("collapsed expanded");
    });

    $('.rs-utility-dropdown').click(function() {
      console.log($(this).children().last().toggleClass("hidden visible"));
    });
});
