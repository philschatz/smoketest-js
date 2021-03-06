import fs from 'fs';
import path from 'path';

let codeSnifferCode = fs.readFileSync(path.join(__dirname, '..', 'node_modules/HTML_CodeSniffer/build/HTMLCS.js'), 'utf8');
// disable AMD loading because JSPM will error
codeSnifferCode = `window.__define2 = window.define; delete window.define; ${codeSnifferCode}; window.define = window.__define2; delete window.__define2`;

codeSnifferCode += "\n; window.HTMLCS = HTMLCS;";
codeSnifferCode += `
window.HTMLCS_Section508_Sniffs_A = HTMLCS_Section508_Sniffs_A;
window.HTMLCS_Section508_Sniffs_B = HTMLCS_Section508_Sniffs_B;
window.HTMLCS_Section508_Sniffs_C = HTMLCS_Section508_Sniffs_C;
window.HTMLCS_Section508_Sniffs_D = HTMLCS_Section508_Sniffs_D;
window.HTMLCS_Section508_Sniffs_G = HTMLCS_Section508_Sniffs_G;
window.HTMLCS_Section508_Sniffs_H = HTMLCS_Section508_Sniffs_H;
window.HTMLCS_Section508_Sniffs_I = HTMLCS_Section508_Sniffs_I;
window.HTMLCS_Section508_Sniffs_J = HTMLCS_Section508_Sniffs_J;
window.HTMLCS_Section508_Sniffs_K = HTMLCS_Section508_Sniffs_K;
window.HTMLCS_Section508_Sniffs_L = HTMLCS_Section508_Sniffs_L;
window.HTMLCS_Section508_Sniffs_M = HTMLCS_Section508_Sniffs_M;
window.HTMLCS_Section508_Sniffs_N = HTMLCS_Section508_Sniffs_N;
window.HTMLCS_Section508_Sniffs_O = HTMLCS_Section508_Sniffs_O;
window.HTMLCS_Section508_Sniffs_P = HTMLCS_Section508_Sniffs_P;
window.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_1_1_1_1 = HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_1_1_1_1;
window.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_2_1_2_1 = HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_2_1_2_1;
window.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_2_1_2_2 = HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_2_1_2_2;
window.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_2_1_2_3 = HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_2_1_2_3;
window.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_2_1_2_4 = HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_2_1_2_4;
window.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_2_1_2_5 = HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_2_1_2_5;
window.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_2_1_2_6 = HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_2_1_2_6;
window.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_2_1_2_7 = HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_2_1_2_7;
window.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_2_1_2_8 = HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_2_1_2_8;
window.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_2_1_2_9 = HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_2_1_2_9;
window.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_3_1_3_1 = HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_3_1_3_1;
window.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_3_1_3_1_A = HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_3_1_3_1_A;
window.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_3_1_3_1_AAA = HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_3_1_3_1_AAA;
window.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_3_1_3_2 = HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_3_1_3_2;
window.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_3_1_3_3 = HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_3_1_3_3;
window.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_1 = HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_1;
window.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_2 = HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_2;
window.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_3 = HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_3;
window.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_3_Contrast = HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_3_Contrast;
window.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_3_F24 = HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_3_F24;
window.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_4 = HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_4;
window.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_5 = HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_5;
window.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_6 = HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_6;
window.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_7 = HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_7;
window.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_8 = HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_8;
window.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_9 = HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_9;
window.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_1_2_1_1 = HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_1_2_1_1;
window.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_1_2_1_2 = HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_1_2_1_2;
window.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_2_2_2_1 = HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_2_2_2_1;
window.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_2_2_2_2 = HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_2_2_2_2;
window.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_2_2_2_3 = HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_2_2_2_3;
window.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_2_2_2_4 = HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_2_2_2_4;
window.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_2_2_2_5 = HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_2_2_2_5;
window.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_3_2_3_1 = HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_3_2_3_1;
window.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_3_2_3_2 = HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_3_2_3_2;
window.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_4_2_4_1 = HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_4_2_4_1;
window.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_4_2_4_2 = HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_4_2_4_2;
window.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_4_2_4_3 = HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_4_2_4_3;
window.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_4_2_4_4 = HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_4_2_4_4;
window.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_4_2_4_5 = HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_4_2_4_5;
window.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_4_2_4_6 = HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_4_2_4_6;
window.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_4_2_4_7 = HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_4_2_4_7;
window.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_4_2_4_8 = HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_4_2_4_8;
window.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_4_2_4_9 = HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_4_2_4_9;
window.HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_1_3_1_1 = HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_1_3_1_1;
window.HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_1_3_1_2 = HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_1_3_1_2;
window.HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_1_3_1_3 = HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_1_3_1_3;
window.HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_1_3_1_4 = HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_1_3_1_4;
window.HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_1_3_1_5 = HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_1_3_1_5;
window.HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_1_3_1_6 = HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_1_3_1_6;
window.HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_2_3_2_1 = HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_2_3_2_1;
window.HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_2_3_2_2 = HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_2_3_2_2;
window.HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_2_3_2_3 = HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_2_3_2_3;
window.HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_2_3_2_4 = HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_2_3_2_4;
window.HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_2_3_2_5 = HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_2_3_2_5;
window.HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_3_3_3_1 = HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_3_3_3_1;
window.HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_3_3_3_2 = HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_3_3_3_2;
window.HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_3_3_3_3 = HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_3_3_3_3;
window.HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_3_3_3_4 = HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_3_3_3_4;
window.HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_3_3_3_5 = HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_3_3_3_5;
window.HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_3_3_3_6 = HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_3_3_3_6;
window.HTMLCS_WCAG2AAA_Sniffs_Principle4_Guideline4_1_4_1_1 = HTMLCS_WCAG2AAA_Sniffs_Principle4_Guideline4_1_4_1_1;
window.HTMLCS_WCAG2AAA_Sniffs_Principle4_Guideline4_1_4_1_2 = HTMLCS_WCAG2AAA_Sniffs_Principle4_Guideline4_1_4_1_2;
window.HTMLCS_Section508 = HTMLCS_Section508;
window.HTMLCS_WCAG2A = HTMLCS_WCAG2A;
window.HTMLCS_WCAG2AA = HTMLCS_WCAG2AA;
window.HTMLCS_WCAG2AAA = HTMLCS_WCAG2AAA;
`;
codeSnifferCode += ";arguments[arguments.length - 1]('CODE_SNIFFER_INITIALIZED');";

export default codeSnifferCode;
