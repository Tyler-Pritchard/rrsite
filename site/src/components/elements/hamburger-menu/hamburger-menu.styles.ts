import styled from "styled-components";
const MenuLabel = styled.label`
  background-color: none;
  position: fixed;
  top: 6.7vh;
  right: 6vh;
  border-radius: 50%;
  height: 6.7vh;
  width: 6.7vw;
  cursor: pointer;
  z-index: 1000;
  text-align: center;
`;

const NavBackground = styled.div`
  position: fixed;
  top: 6.7vh;
  right: 6.7vw;
  background-color: black;
  height: 6.7vw;
  width: 6.7vw;
  border-radius: 50%;
  z-index: 600;
  transform: scale(200);
  transition: transform 0.8s;
`;

const Icon = styled.span`
  position: relative;
  background-color: black;
  width: 6.7vw;
  height: 2px;
  display: inline-block;
  margin-top: 0.2rem;
  transition: all 0.3s;
  &::before,
  &::after {
    content: "";
    background-color: white;
    width: 6.7vw;
    height: 2px;
    display: inline-block;
    position: absolute;
    left: 0;
    transition: all 0.3s;
  }
  &::before {
    top: 0;
    transform: rotate(0);
  }
  &::after {
    top: 0;
    transform: rotate(0);
  }
  ${MenuLabel}:hover &::before {
    top: -1rem;
  }
  ${MenuLabel}:hover &::after {
    top: 1rem";
  }
`;
export { MenuLabel, NavBackground, Icon };


// import styled from "styled-components";
// const MenuLabel = styled.label`
//   background-color: none;
//   position: fixed;
//   top: 6.7vh;
//   right: 6vh;
//   border-radius: 50%;
//   height: 6.7vh;
//   width: 6.7vw;
//   cursor: pointer;
//   z-index: 1000;
//   text-align: center;
// `;

// const NavBackground = styled.div`
//   position: fixed;
//   top: 6.7vh;
//   right: 6.7vw;
//   background-color: black;
//   height: 6.7vw;
//   width: 6.7vw;
//   border-radius: 50%;
//   z-index: 600;
//   transform: ${(props) => (props.clicked ? "scale(200)" : "scale(0)")};
//   transition: transform 0.8s;
// `;

// const Icon = styled.span`
//   position: relative;
//   background-color: ${(props) => (props.clicked ? "transparent" : "black")};
//   width: 6.7vw;
//   height: 2px;
//   display: inline-block;
//   margin-top: 0.2rem;
//   transition: all 0.3s;
//   &::before,
//   &::after {
//     content: "";
//     background-color: ${(props) => (props.clicked ? "white" : "black")};
//     width: 6.7vw;
//     height: 2px;
//     display: inline-block;
//     position: absolute;
//     left: 0;
//     transition: all 0.3s;
//   }
//   &::before {
//     top: ${(props) => (props.clicked ? "0" : "-0.8rem")};
//     transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
//   }
//   &::after {
//     top: ${(props) => (props.clicked ? "0" : "0.8rem")};
//     transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
//   }
//   ${MenuLabel}:hover &::before {
//     top: ${(props) => (props.clicked ? "0" : "-1rem")};
//   }
//   ${MenuLabel}:hover &::after {
//     top: ${(props) => (props.clicked ? "0" : "1rem")};
//   }
// `;
// export { MenuLabel, NavBackground, Icon };
