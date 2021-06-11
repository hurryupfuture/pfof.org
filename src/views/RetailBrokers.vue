<template>

  <Header/>
  <RetailWinner/>

  <section class="leaderboard">

    <table id="retail-brokers" v-if="!isExcludingExchanges">
        <thead>
            <th class="rank">Rank</th>
            <th class="name">Name</th>
            <th class="net-payments">
                <span class="full">Net Received Q1</span>
                <span class="trunc">Net Rec Q1</span>
            </th>
        </thead>
        <tbody>
            <tr class="td-ameritrade">
                <td>1.</td>
                <td>TD Ameritrade</td>
                <td>$182,648,749</td>
            </tr>
            <tr class="robinhood">
                <td>2.</td>
                <td>Robinhood</td>
                <td>$133,133,153</td>
            </tr>
            <tr class="e-trade">
                <td>3.</td>
                <td>E*Trade</td>
                <td>$57,652,407</td>
            </tr>
            <tr class="charles-schwab">
                <td>4.</td>
                <td>
                    <span class="full">Charles Schwab</span>
                    <span class="trunc">Schwab</span>
                </td>
                <td>$33,762,659</td>
            </tr>
            <tr class="fidelity">
                <td>5.</td>
                <td>Fidelity</td>
                <td>$16,186,271</td>
            </tr>
            <tr class="interactive-brokers">
                <td>6.</td>
                <td>
                    <span class="full">Interactive Brokers</span>
                    <span class="trunc">Int. Brokers</span>
                </td>
                <td>$14,200,741</td>
            </tr>
        </tbody>
    </table>

        <table id="retail-brokers-ex-exchanges" v-if="isExcludingExchanges">
        <thead>
            <th class="rank">Rank</th>
            <th class="name">Name</th>
            <th class="net-payments">
                <span class="full">Net Received Q1</span>
                <span class="trunc">Net Rec Q1</span>
            </th>
        </thead>
        <tbody>
            <tr class="td-ameritrade">
                <td>1.</td>
                <td>TD Ameritrade</td>
                <td>$182,648,749</td>
            </tr>
            <tr class="robinhood">
                <td>2.</td>
                <td>Robinhood</td>
                <td>$133,133,153</td>
            </tr>
            <tr class="e-trade">
                <td>3.</td>
                <td>E*Trade</td>
                <td>$57,832,307</td>
            </tr>
            <tr class="charles-schwab">
                <td>4.</td>
                <td>
                    <span class="full">Charles Schwab</span>
                    <span class="trunc">Schwab</span>
                </td>
                <td>$33,523,021</td>
            </tr>
            <tr class="interactive-brokers">
                <td>5.</td>
                <td>
                    <span class="full">Interactive Brokers</span>
                    <span class="trunc">Int. Brokers</span>
                </td>
                <td>$1,051,497</td>
            </tr>
            <tr class="fidelity">
                <td>6.</td>
                <td>Fidelity</td>
                <td>$0</td>
            </tr>
        </tbody>
    </table>

    <section id="exclude-exchanges">
      <h4 v-on:click="toggle">
        [{{ flag }}] Exclude payments from exchanges:
      </h4>
      <p class="exchange">
        NYSE, NYSE ARCA, NASDAQ, CBOE EDGX, CBOE BYX, IEX, MEMX
      </p>
    </section>

  </section>

</template>

<script>
import Header from '@/components/Header.vue';
import RetailWinner from '@/components/RetailWinner.vue';

export default {
  name: 'Home',
  components: {
    Header,
    RetailWinner,
  },
  data() {
    return {
      isExcludingExchanges: false,
      flag: '_',
    };
  },
  methods: {
    toggle() {
      if (this.isExcludingExchanges) {
        this.includeExchanges();
      } else {
        this.excludeExchanges();
      }
    },
    excludeExchanges() {
      this.isExcludingExchanges = true;
      this.flag = 'X';
    },
    includeExchanges() {
      this.isExcludingExchanges = false;
      this.flag = '_';
    },
  },
};
</script>
