import Calculator from './Calculator.js';
import { setupEventListeners } from './eventHandlers.js';

const calculator = new Calculator();
setupEventListeners(calculator);