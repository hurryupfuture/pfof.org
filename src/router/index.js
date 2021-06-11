import { createRouter, createWebHashHistory } from 'vue-router';
import RetailBrokers from '../views/RetailBrokers.vue';
import MarketMakers from '../views/MarketMakers.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: RetailBrokers,
  },
  {
    path: '/retail-brokers',
    name: 'Retail Brokers',
    component: RetailBrokers,
  },
  {
    path: '/market-makers',
    name: 'Market Makers',
    component: MarketMakers,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
