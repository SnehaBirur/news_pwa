var news;
const settings = {
    "url": "https://api.newscatcherapi.com/v2/latest_headlines?countries=US&lang=EN",
    "headers": {
        "x-api-key": "lRzjaJO-eSMdnJICDKb7mIx1Nspwmpofkee21iEnwQ4",
    }
};
function changeImage() {
    var image = document.getElementById('myImage');
    document.getElementById("headlines").innerHTML = news[i].title;
    image.src = news[i].media;
    i++;
    // image.src = ci;
}

let i = 0;
// changeImage();
// i++;

$.ajax(settings).done(function (a) {
    news = a.articles;
    changeImage();
    console.log(a);
    $(".wrapper").on('click', function () {
        changeImage();
    });

});


