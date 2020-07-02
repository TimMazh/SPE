var arrLang = {
    'de': {
        'pHomeText': "AUSSERGEWÖHNLICHE ORTE, UNVERGLEICHLICHER LEBENSSTIL. \
                    FÜR DIEJENIGEN, DIE EIN AUSSERGEWÖHNLICHES ZUHAUSE SUCHEN. FINDEN SIE EIN ZUHAUSE, DAS ZU IHNEN PASST.",
        'h1HomeTitle': "HOME",
        'h1ImmoTitle': 'IMMOBILIEN',
    },
    'en': {
        'pHomeText': "EXTRAORDINARY PLACES, INCOMPARABLE LIFESTYLE. FOR THOSE LOOKING FOR AN EXCEPTIONAL HOME. FIND A HOME THAT SUITS YOUR LIFESTYLE.",
        'h1HomeTitle': "HOME",
        'h1ImmoTitle': "REAL ESTATE",
    }
};

$(function(){
    $('.translate').click(function(){
        var lang = $(this).attr('id');

        $('.lang').each(function(index, element){
            $(this).text(arrLang[lang][$(this).attr('key')]);
        })
    });
});