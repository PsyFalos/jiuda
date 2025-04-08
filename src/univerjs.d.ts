// src/types/univerjs.d.ts
declare module '@univerjs/presets' {
    export * from '@univerjs/presets/lib/es/index';
}

declare module '@univerjs/presets/preset-sheets-core' {
    export * from '@univerjs/presets/lib/es/preset-sheets-core';
}

declare module '@univerjs/presets/preset-sheets-core/locales/*' {
    const content: any;
    export default content;
}

declare module '@univerjs/sheets-ui/lib/styles/index.css' {
    const content: never;
    export default content;
}