import 'styled-components';
import type { Theme } from './models/theme.interface';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}