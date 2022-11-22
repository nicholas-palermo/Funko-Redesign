// Home Page Navbar transparency transition on scroll
$(window).scroll(function () {
    if ($(window).scrollTop() >= $('.carousel').height()) {
    $('.navbar').css('background','rgb(34, 37, 41)');
    } else if($(window).scrollTop() > 0 && $(window).scrollTop() <= $('.carousel').height()) {
        $('.navbar').css({'background':'transparent', "backdrop-filter": 'blur(10px)'});
    } else {
    $('.navbar').css('background','transparent');
    }
    });

//Credit Card selection
function selectCard(card) {
    if (card === 0) {
        alert("You cannot add a card at this time. Please select a card you stored in your digital wallet.")
        exit(1)
    }
    for (let index = 1; index <= 4; index++) {
        let card = document.getElementById("card" + index.toString());
        card.style.outline = "2px solid rgb(230, 230, 230)";
    }
    let selectedCard = document.getElementById("card" + card.toString());
    selectedCard.style.outline = "2px solid rgb(95, 133, 221)";
    
}

