/*==============================*\
|| Sticky Note                  ||
|| -----------------            ||
|| Stores text notes.           ||
\*==============================*/

Dash.widget('v0', widget => {
  const { textbox } = widget.element
  
  widget.layout({
    name: 'main',
    size: '2x2',
    default: true,
    render() {
      const content = widget.data.get('noteContent') || ''
          
      console.log('content is', content)
            
      return textbox({
        styles: {
          width: '100%',
          height: '100%',
          backgroundColor: '#FDE77D',
          padding: '1em'
        },
        onInput() {
          widget.data.set('noteContent', this.value)
        },
      }, content)
		}
	})
})