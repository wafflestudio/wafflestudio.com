const initGtag = () => {
  window.dataLayer = window.dataLayer || []
  function gtag() {
    dataLayer.push(arguments)
  }
  gtag('js', new Date())

  gtag('config', 'UA-205540392-1')
}

export { initGtag }
