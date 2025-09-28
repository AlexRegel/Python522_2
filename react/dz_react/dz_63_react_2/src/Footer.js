import React from "react";

class Footer extends React.Component {
    render() {
        let footerText = "Copyright";
        // let {title} = props;
        return (
            <footer style={{
                backgroundColor: "#d2ccff", fontWeight: 'bold',
                padding: '5px', marginTop: "0"
            }}>
                {/* 'violet' 'purple' */}
                <p style={{ fontFamily: 'TimesNewRoman', 
                color: 'purple', fontSize: 18, margin: '0'}}>
                    {/* for (let i = 0 in 10){ */}
                        {footerText}                    
                    </p>
            </footer>
        );
    }
}

export default Footer;