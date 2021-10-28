 

import React from 'react';
// import AdSense
// import AdSense
import AdSense from 'react-adsense';

export default function AdComponent (){ 
  
 
    return (
        <div>
            {/* <ins class="adsbygoogle"
            style={{display:"fluid"}}
            data-ad-client="ca-pub-9137217174806568"
            data-ad-slot="8721475502"
            data-ad-format="auto"
            data-full-width-responsive="true"></ins> */} 
            <AdSense.Google
            client='ca-pub-9137217174806568'
            slot='8721475502'
            style={{ display: 'block' }}
            layout='in-article'
            format='fluid'
            />
        </div>
    ); 
} 