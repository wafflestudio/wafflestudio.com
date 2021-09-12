module.exports = {
  images: {
    domains: ['play.google.com', 'www.datocms-assets.com'],
  },
  
  webpack: config => { 
    config.module.rules.push( 
      { 
        test: /\.md$/, 
        use: "raw-loader" 
      } 
    ); 
    return config 
  }
}

