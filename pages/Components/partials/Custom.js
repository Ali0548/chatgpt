import React from 'react'
import Script from 'next/script'
const Custom = () => {
    return (
        <>
            <Script src="/main/assets/js/core/jquery.min.js"></Script>
            <Script src="/main/assets/js/core/popper.min.js"></Script>
            <Script src="/main/assets/js/core/bootstrap.min.js"></Script>
            {/* <Script src="/main/assets/js/paper-dashboard.min.js?v=2.0.1" type="text/javaScript"></Script> */}
            {/* <Script src="/main/assets/js/plugins/perfect-scrollbar.jquery.min.js"></Script> */}

            <Script src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE"></Script>

            <Script src="/main/assets/js/plugins/chartjs.min.js"></Script>

            <Script src="/main/assets/js/plugins/bootstrap-notify.js"></Script>

            <Script src="/main/assets/demo/demo.js"></Script>

        </>
    )
}

export default Custom
