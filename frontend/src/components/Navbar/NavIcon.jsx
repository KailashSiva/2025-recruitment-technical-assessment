import React from 'react'

export default function NavIcon({ icon, classInfo, active }) {
    return (
        <button>
            <span className={classInfo} style={{ color: active ? 'white' : 'rgb(223, 116, 44)', backgroundColor: active ? 'rgb(223, 116, 44)' : 'transparent' }}>
                {icon}
            </span>
        </button>
    )
}
