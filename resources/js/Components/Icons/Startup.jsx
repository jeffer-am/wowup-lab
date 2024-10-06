import React from "react";
import PropType from "prop-types";

const Startup = ({ className }) => {
    return (
        <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M12.8125 2C13.0531 2 13.25 2.19578 13.25 2.4375V3.75H14.5625C14.8031 3.75 15 3.94687 15 4.1875C15 4.42813 14.8031 4.625 14.5625 4.625H13.25V5.9375C13.25 6.17813 13.0531 6.375 12.8125 6.375C12.5719 6.375 12.375 6.17813 12.375 5.9375V4.625H11.0625C10.8219 4.625 10.625 4.42813 10.625 4.1875C10.625 3.94687 10.8219 3.75 11.0625 3.75H12.375V2.4375C12.375 2.19578 12.5719 2 12.8125 2ZM12.8125 9.875C13.0531 9.875 13.25 10.0719 13.25 10.3125V11.625H14.5625C14.8031 11.625 15 11.8219 15 12.0625C15 12.3031 14.8031 12.5 14.5625 12.5H13.25V13.8125C13.25 14.0531 13.0531 14.25 12.8125 14.25C12.5719 14.25 12.375 14.0531 12.375 13.8125V12.5H11.0625C10.8219 12.5 10.625 12.3031 10.625 12.0625C10.625 11.8219 10.8219 11.625 11.0625 11.625H12.375V10.3125C12.375 10.0719 12.5719 9.875 12.8125 9.875ZM4.37148 9.92422L1.25408 8.4832C1.09918 8.41211 1 8.25625 1 8.08672C1 7.91445 1.09918 7.75859 1.25408 7.6875L4.37148 6.24648L5.8125 3.12902C5.88359 2.97426 6.03945 2.875 6.21172 2.875C6.38125 2.875 6.53711 2.97426 6.6082 3.12902L8.04922 6.24648L11.1664 7.6875C11.3223 7.75859 11.4207 7.91445 11.4207 8.08672C11.4207 8.25625 11.3223 8.41211 11.1664 8.4832L8.04922 9.92422L6.6082 13.0414C6.53711 13.1973 6.38125 13.2957 6.21172 13.2957C6.03945 13.2957 5.88359 13.1973 5.8125 13.0414L4.37148 9.92422ZM2.48094 8.08672L4.74063 9.12852C4.9293 9.21602 5.07969 9.36641 5.16719 9.55508L6.21172 11.8137L7.25352 9.55508C7.34102 9.36641 7.49141 9.21602 7.68008 9.12852L9.93867 8.08672L7.68008 7.04219C7.49141 6.95469 7.34102 6.8043 7.25352 6.61563L6.21172 4.35703L5.16719 6.61563C5.07969 6.8043 4.9293 6.95469 4.74063 7.04219L2.48094 8.08672Z"
                fill="currentColor"
            />
        </svg>
    );
};

Startup.propTypes = {
    className: PropType.string,
};

export default Startup;
