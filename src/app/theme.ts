export interface Theme {
    name: string;
    properties: any;
  }
  
  export const light: Theme = {
    name: 'light',
    properties: {
      '--background-default': '#ffffff',
      '--primary-default': '#000000',
      '--popup-default': '#000000',
    }
  };
  
  export const dark: Theme = {
    name: 'dark',
    properties: {
      '--background-default': '#000000',
      '--primary-default': '#ffffff',
      '--popup-default': '#000000',
    }
  };
  