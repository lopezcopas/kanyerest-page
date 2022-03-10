let quote = $('#quote')

async function getQuote(){
    quote.hide()
    let response = fetch('https://api.kanye.rest', {
        method:'get',
        mode:'cors'
    })
    .then(response=>response.json())
    .then(data=>{
        quote.html(data.quote)
        var holdTop = parseInt(quote.css('top'))
        console.log(holdTop)
        quote.css('top', '60%')
        quote.css('opacity', 0)
        quote.css('display', 'block')
        quote.animate({
            top: '50%',
            opacity: 1
        },1500)
    })
}

getQuote()

$(document).click((e)=>{
    getQuote()
})