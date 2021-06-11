<template>

  <Header/>
  <MarketMakersWinner/>

  <section class="leaderboard">
    <table id="market-makers">
          <thead>
              <th class="rank">Rank</th>
              <th class="name">Name</th>
              <th class="net-payments">Net Paid Q1</th>
          </thead>
          <tbody class="market-makers">
              <tr class="citadel">
                  <td>1.</td>
                  <td>Citadel</td>
                  <td>$256,020,421</td>
              </tr>
              <tr class="virtu">
                  <td>2.</td>
                  <td>Virtu</td>
                  <td>$162,151,796</td>
              </tr>
              <tr class="two-sigma">
                  <td>3.</td>
                  <td>Two Sigma</td>
                  <td>$64,640,712</td>
              </tr>
              <tr class="g1">
                  <td>4.</td>
                  <td>G1</td>
                  <td>$55,882,265</td>
              </tr>
              <tr class="ubs">
                  <td>5.</td>
                  <td>UBS</td>
                  <td>$43,589,617</td>
              </tr>
              <tr class="nasdaq exchange">
                  <td>6.</td>
                  <td>NASDAQ</td>
                  <td>$21,488,270</td>
              </tr>
              <tr class="cboe-edgx exchange">
                  <td>7.</td>
                  <td>Cboe EDGX</td>
                  <td>$10,622,674</td>
              </tr>
              <tr class="wolverine">
                  <td>8.</td>
                  <td>Wolverine</td>
                  <td>$8,372,765</td>
              </tr>
              <tr class="nyse exchange">
                  <td>9.</td>
                  <td>NYSE</td>
                  <td>$3,751,455</td>
              </tr>
              <tr class="jane-street-capital">
                  <td>10.</td>
                  <td>
                      <span class="full">Jane Street Capital</span>
                      <span class="trunc">Jane Street Cap.</span>
                  </td>
                  <td>$179,900</td>
              </tr>
              <tr class="cboe-byx exchange">
                  <td>11.</td>
                  <td>Cboe BYX</td>
                  <td>$79,198</td>
              </tr>
              <tr class="national-financial-services">
                  <td>12.</td>
                  <td>
                      <span class="full">National Fin. Svcs.</span>
                      <span class="trunc">Nat'l Fin. Svcs.</span>
                  </td>
                  <td>$0</td>
              </tr>
              <tr class="ibkr-ats">
                  <td>13.</td>
                  <td>IBKR ATS</td>
                  <td>$0</td>
              </tr>
              <tr class="memx exchange">
                  <td>13.</td>
                  <td>MEMX</td>
                  <td>-$6,547</td>
              </tr>
              <tr class="iex exchange">
                  <td>14.</td>
                  <td>IEX</td>
                  <td>-$202,744</td>
              </tr>
              <tr class="nyse-arca exchange">
                  <td>15.</td>
                  <td>NYSE ARCA</td>
                  <td>-$2,619,478</td>
              </tr>
          </tbody>
      </table>
    </section>
</template>

<script>
import Header from '@/components/Header.vue';
import MarketMakersWinner from '@/components/MarketMakersWinner.vue';

export default {
  name: 'Market Makers',
  components: {
    Header,
    MarketMakersWinner,
  },
};
</script>
