export interface Theme {
  name: string;
  colors: {
    backgroundPrimary: string,
    backgroundSecondary: string,
    backgroundAccent: string,
    linkDefault: string,  
    linkActive: string,

  };
}

export interface Themes {
  [key: string] : Theme
}