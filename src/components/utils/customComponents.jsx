import styled from "@emotion/styled";
import Tooltip from "@mui/material/Tooltip";
import {tooltipClasses} from "@mui/material";
import React from "react";

export const CustomTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: "#DC9777",
        color: 'rgba(0, 0, 0, 0.87)',
        boxShadow: theme.shadows[1],
        fontFamily: 'Montserrat',
        fontSize: 13,
        fontWeight: "bold"
    },
}));
