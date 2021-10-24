 

import React from 'react';
// import AdSense
// import AdSense
import AdSense from 'react-ssr-adsense';

export default class AdComponent extends React.Component { 

    componentDidMount () {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        console.log('DID IT!!');
    }

    render () {
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
}
{/* <script data-ad-client="XXXXXXXX" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script> */}


{/* <ins className="adsbygoogle"
  style={{display:"inline-block", width:"100%", height: "100%"}}
  data-ad-client={AD_SENSE_ACCOUNT}
  data-ad-slot={AD_SENSE_SLOT}
  data-adtest={ON_DEV ? "on" : "off"}
>
</ins> */}