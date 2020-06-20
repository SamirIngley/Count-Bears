document.addEventListener('DOMContentLoaded', function() {

    // GET BACKGROUND PAGE
    const bg = chrome.extension.getBackgroundPage()
    // now we have access (below command) to the background js bears
    Object.keys(bg.bears).forEach(function(url) {
        const div = document.createElement('div')
        div.textContent = `${url}: ${bg.bears[url]}`
        document.body.appendChild(div)
    })


    // document.querySelector('button').addEventListener('click',
    // onclick, false)

    // function onclick () {
    //     chrome.tabs.query({currentWindow: true, active: true},
    //     function (tabs) {
    //         chrome.tabs.sendMessage(tabs[0].id, 'hi', setCount)
    //     })
    // }

    // function setCount (res) {
    //     const div = document.createElement('div')
    //     div.textContent = `${res.count} bears`
    //     document.body.appendChild(div)
    // }

}, false)