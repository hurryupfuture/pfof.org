
var player1 = new Vue({
    el: "#player-1",
    data: {
        isActive: true,
        flag: "X"
    },
    methods: {
        select: function() {
            this.isActive = true
            this.flag = "X"
            player2.deselect()
            retailBrokers.show()
        },
        deselect: function() {
            this.isActive = false,
            this.flag = "_"
        }
    }
})

var player2 = new Vue({
    el: "#player-2",
    data: {
        isActive: false,
        flag: "_"
    },
    methods: {
        select: function() {
            this.isActive = true
            this.flag = "X"
            player1.deselect()
            marketMakers.show()
        },
        deselect: function() {
            this.isActive = false,
            this.flag = "_"
        }
    }
})

var retailBrokers = new Vue({
    el: "#retail-brokers",
    data: {
        isVisible: true
    },
    methods: 
    {
        show: function() {
            this.isVisible = true
            exExchanges.hide()
            marketMakers.hide()
            excludeExchanges.show()
        },
        hide: function() {
            this.isVisible = false
        }
    }
})

var exExchanges = new Vue({
    el: "#retail-brokers-ex-exchanges",
    data: {
        isVisible: false
    },
    methods: 
    {
        show: function() {
            this.isVisible = true
            retailBrokers.hide()
            marketMakers.hide()
            excludeExchanges.show()
        },
        hide: function() {
            this.isVisible = false
        }
    }
})

var marketMakers = new Vue({
    el: "#market-makers",
    data: {
        isVisible: false
    },
    methods: 
    {
        show: function() {
            this.isVisible = true
            retailBrokers.hide()
            exExchanges.hide()
            excludeExchanges.hide()
        },
        hide: function() {
            this.isVisible = false
        }
    }
})

var excludeExchanges = new Vue({
    el: "#exclude-exchanges",
    data: {
        isVisible: true,
        isExcludingExchanges: false,
        flag: "_"
    },
    methods: {
        toggle: function () {
            this.isExcludingExchanges = !this.isExcludingExchanges
            if(this.isExcludingExchanges){
                this.flag = "X"
                retailBrokers.hide()
                exExchanges.show()
            }
            else {
                this.flag = "_"
                retailBrokers.show()
                exExchanges.hide()
            }
        },
        show: function() {
            this.isVisible = true
        },
        hide: function() {
            this.isVisible = false
        }
    }
})