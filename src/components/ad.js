 

import React from 'react';
// import AdSense
// import AdSense
import AdSense from 'react-ssr-adsense';

export default function AdComponent (){ 
 
    React.useEffect(() => {
        window.adsbygoogle = window.adsbygoogle || [];
        window.adsbygoogle.push({});
    }, [])
 
    return (
        <div>
            <ins class="adsbygoogle"
            style={{display:"fluid"}}
            data-ad-client="ca-pub-9137217174806568"
            data-ad-slot="8721475502"
            data-ad-format="auto"
            data-full-width-responsive="true"></ins>
        </div>
    ); 
} 