import ElInput from './src/input';
import Inputmask from 'vuejs-inputmask';

/* istanbul ignore next */
ElInput.install = function(Vue) {
  Vue.component(ElInput.name, ElInput);
  Vue.use(Inputmask);
};

export default ElInput;
