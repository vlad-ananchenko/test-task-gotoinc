declare const __DEVICE__: 'mobile' | 'desktop';

declare module '*.module.css' {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}

declare module '*.module.scss' {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.svg' {
  import React from 'react';
  const SVG: React.FC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}
