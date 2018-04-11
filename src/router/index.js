import Vue from 'vue';
import Router from 'vue-router';
import Home from 'views/home';
import Start from 'views/start';
import Personal from 'views/personal';
import Test from 'views/test';
import Examples from '../examples';
import Button from '../examples/button.vue';
import Test02 from 'components/test02';
import ManuallyLocate from 'views/manually-locate';
Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        }, {
            path: '/start',
            name: 'Start',
            component: Start
        }, {
            path: '/personal',
            name: 'Personal',
            component: Personal
        }, {
            path: '/test',
            name: 'Test',
            component: Test
        }, {
            path: '/test02',
            name: 'Test02',
            component: Test02
        }, {
            path: '/examples',
            name: 'Examples',
            component: Examples,
            children: [
                {
                    path: 'button',
                    component: Button
                }
            ]
        }, {
            path: '/manually-locate',
            name: 'ManuallyLocate',
            component: ManuallyLocate
        }
    ]
});
