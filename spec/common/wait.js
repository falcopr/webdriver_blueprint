import { delay } from 'lodash';

export let wait = (ms) => new Promise((resolve) => delay(resolve, ms));
