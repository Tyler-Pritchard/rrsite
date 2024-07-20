import CSS from 'csstype';

export const AppBarStyle: CSS.Properties = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    position: "absolute",
    alignItems: "center",
    border: ".5rem groove #f7E581",
    justifyContent: "space-between",
    width: "100%",
    backgroundColor:  "#21b571",
    backgroundImage: "linear-gradient(180deg, #43724D 11%, #9ADBE0 61%, #f7E581 78%, #ffffff 95%)",
    opacity: "97%",
    paddingLeft: "3rem",
    paddingRight: "3rem",
    height: "10rem"
}

export const HeaderLeftStyle: CSS.Properties = {
    zIndex: "9999"
}

export const PrimaryNavStyle: CSS.Properties = {
    overflow: "visible",
    width: "100%"
}

export const NavigationStyle: CSS.Properties = {
    zIndex: "9999"
}