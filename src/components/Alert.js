import React from 'react'

function Alert(props) {
    const Capitalized = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1)
    }
    return (
        <div style={{ height: '55px' }}>
            {
                props.alert && <div className={`alert my-2 alert-${props.alert.type} alert-${props.alert.type}  fade show`} role="alert">
                    <strong>{Capitalized(props.alert.type)}</strong> :{props.alert.msg}
                </div>}
        </div>

    )
}

export default Alert
