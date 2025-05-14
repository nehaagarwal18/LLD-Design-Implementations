import React, {useRef, useEffect} from 'react'

/* Here log.apply is used so we have normal console behaviour as well in case 
 we want to check console logs as part of the developer tools of the iframe, 
if not required we can just do postmessage */

const Preview = ({html, css, js}) => {
  const iframeRef = useRef()
  useEffect(() => {
    if(html || css || js) {
        const output = `
            <html>
                <style>${css}</style>
                <body>
                ${html}
                <script>
                    const log = console.log;
                    console.log = function(...args) {
                        window.parent.postMessage({ type: 'console', log: args.join(' ') }, '*');
                        log.apply(console, args);
                    };
                    ${js}
                </script>
                </body>
            </html>
        `;
        iframeRef.current.srcdoc = output;
    }
  }, [html, css, js])
    
  return (
    <div className="flex-1/2 p-4 border-1 border-r-0">
        <h2><b>Preview</b></h2>
        <iframe sandbox="allow-scripts" title="preview" ref={iframeRef}/>
    </div>
  )
}

export default Preview