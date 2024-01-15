module.exports = {
    resolve: {
      extensions: [".ts", ".js", ".jsx", ".tsx"],
      modules: [
        path.join(__dirname, '../node_modules')
      ],
      alias: {
        'react-router': 'react-router-dom'
      } 
    }
}