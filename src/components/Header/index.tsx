import { Container } from "./styles";
import Switch from 'react-switch'
import { ThemeContext } from "styled-components";
import { useContext } from "react";
import { shade } from "polished";

type ToggleThemeProps = {
  toggleTheme(): void;
}

export function Header({toggleTheme}:ToggleThemeProps) {
  const { colors, title } = useContext(ThemeContext)
  return (
    <Container>
      Hello World

      <Switch
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={shade(0.15, colors.primary)}
        onColor={colors.secundary}
      />
    </Container>
  )
}