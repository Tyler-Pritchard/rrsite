import { ItemLink, List, NavigationWrapper } from "./navigation.styles";

type NavigationProps = {
  clicked: boolean;
  handleClick: () => void;
};

function Navigation({ clicked, handleClick }: NavigationProps): JSX.Element {
  return (
    <NavigationWrapper clicked={clicked}>
      <List>
        <li>
          <ItemLink className="h3" onClick={handleClick}>
            Home
          </ItemLink>
        </li>
        <li>
          <ItemLink className="h3" onClick={handleClick}>
            Media
          </ItemLink>
        </li>
        <li>
          <ItemLink className="h3" onClick={handleClick}>
            Music
          </ItemLink>
        </li>
        <li>
          <ItemLink className="h3" onClick={handleClick}>
            Tour
          </ItemLink>
        </li>
        <li>
          <ItemLink className="h3" onClick={handleClick}>
            News
          </ItemLink>
        </li>
        <li>
          <ItemLink className="h3" onClick={handleClick}>
            Shop
          </ItemLink>
        </li>
        <li>
          <ItemLink className="h3" onClick={handleClick}>
            Fan Club
          </ItemLink>
        </li>
        <li>
          <ItemLink className="h3" onClick={handleClick}>
            Contact
          </ItemLink>
        </li>
      </List>
    </NavigationWrapper>
  );
}

export default Navigation;
