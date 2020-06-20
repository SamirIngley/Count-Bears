// alert('Grrr.')

// WITH BUTTON WILL FIND NUMBER OF BEARS
// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
//     const re = new RegExp('bear', 'gi')
//     const matches = document.documentElement.innerHTML.match(re)
//     sendResponse({count: matches.length})
// })

// AUTOMATICALLY FINDS NUMBER OF BEARS

const re = new RegExp('bear', 'gi')
const matches = document.documentElement.innerHTML.match(re)
chrome.runtime.sendMessage({
    url: window.location.href,
    count: matches.length
})