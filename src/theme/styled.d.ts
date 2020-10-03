import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      success: string;
      danger: string;
      muted: string;
      light: string;
      main: string;
      dark: string;
      white: string;
      black: string;
      blacks: string[];
      whites: string[];
    };
    breakpoints: number[];
    space: number[];
    fontSizes: number[];
    fontWeights: number[];
    lineHeights: {
      solid: number;
      title: number;
      copy: number;
    };
    letterSpacings: {
      normal: string;
      tracked: string;
      tight: string;
      mega: string;
    };
    fonts: {
      serif: string;
      sansSerif: string;
    };
    borders: string[];
    radii: number[];
    widths: number[];
    heights: number[];
    maxWidths: number[];
    shadows: {
      shadowColor: string;
      shadowOffset: {
        width: number;
        height: number;
      };
      shadowOpacity: number;
      shadowRadius: number;
      elevation: number;
    }[];
  }
}
