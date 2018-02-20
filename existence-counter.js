/*==============================*\
|| Existence Counter            ||
|| -----------------            ||
|| Enumerates the long seconds  ||
|| since its instantiation.     ||
\*==============================*/

Dash.widget('v0', widget => {
  const { RAW } = widget.element
  const { data } = widget

  const secondsSinceCreated = () => {
  	const created = data.get('createdAt') || Date.now()
    const now = Date.now()
    
    return Math.round((now - created) / 1000)
  }
  
  const divStyles = {
    position: 'absolute',
    height: '100%',
    width: '100%',
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#333',
    color: '#fff',
    padding: '1em',
    textAlign: 'center',
  }

  const text = RAW('span', {
    styles: {
      fontSize: '2em',
      color: '#fff'
    } 
  })

  widget.layout({
    name: 'main',
    size: '2x2',
    default: true,
    render() {
      if (!data.get('createdAt')) {
      	data.set('createdAt', Date.now())
      }
      
      $(text).text(secondsSinceCreated())
      
      return RAW('div', { styles: divStyles }, [
        text,
        RAW('span', {
          styles: {
            color: '#aaa',
            fontSize: '0.8em'
          }
        }, 'seconds of existence')
      ])
    }
  })

  setInterval(function() {
    $(text).text(secondsSinceCreated())
  }, 1000)
})

