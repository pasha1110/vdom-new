import { init } from './framework';
// import { div } from './framework/element';
import { User } from './src/user.js';

const first = 'Erlangga';
const last = 'Abdee';

init('#app', User({ first, last }));
