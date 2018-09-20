import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import '@/plugins/vuetify';

import HelloWorld from '@/components/HelloWorld.vue';

/**
 * These lines are from this discussion
 * https://github.com/vuetifyjs/vuetify/issues/3456#issuecomment-408424406
 */
const el = document.createElement('div');
el.setAttribute('data-app', 'true');
document.body.appendChild(el);

describe('HelloWorld.vue', () => {
  it('Should be able to open the actions menu', (done) => {
    const wrapper = mount(HelloWorld, {
      propsData: {
        actions: [
          {
            color: 'red',
            icon: 'face',
            name: 'test one',
          },
          {
            color: 'blue',
            icon: 'face',
            name: 'test two',
          },
        ],
      },
    });

    wrapper.vm.$nextTick(() => {
      wrapper.find('.v-menu > div > button').trigger('click');
      expect(wrapper.findAll('.v-list').length).to.eql(1);
      expect(wrapper.findAll('.v-list > div > a').length).to.eql(2);
      done();
    });
  });
});
