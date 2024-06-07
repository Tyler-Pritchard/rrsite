import CSS from 'csstype';

export const AppBarStyle: CSS.Properties = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",  // Prevents wrapping of items
    overflow: "hidden",  // Hides overflowed content
    alignItems: "center", // Align items vertically in the center
    border: "3px solid red",
    justifyContent: "space-between",
    height: "5rem",
    width: "100%"
}
