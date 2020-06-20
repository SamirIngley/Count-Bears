alert('Grrr.')
chrome.runtime.onMessage.addListener(function(request) {
    const re = new RegExp('bear', 'gi')
    const matches = document.documentElement.innerHTML.match(re)
})