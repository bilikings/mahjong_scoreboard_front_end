<template>
  <div></div>
</template>

<script>
import Stomp from 'stompjs'
import {MQTT_SERVICE, MQTT_USERNAME, MQTT_PASSWORD} from '@/utils/mqtt'

export default {
  data() {
    return {
      client: null,
    }
  },
  created() {
    console.log("Connecting ...");
    this.connect();
  },
  methods: {
    onConnected: function(frame) {
      console.log("MQ Connected: " + frame);
      var exchange = "/exchange/exchange_topics_informs/inform.test";
      this.client.subscribe(exchange, this.responseCallback, this.onFailed);
    },
    onFailed: function(frame) {
      console.log("MQ Failed: " + frame);
    },
    responseCallback: function(frame) {
      console.log("MQ msg => " + frame.body);
    },
    connect: function() {
      this.client = Stomp.client(MQTT_SERVICE);
      const headers = {
        login: MQTT_USERNAME,
        passcode: MQTT_PASSWORD,
        host: "/"
      };
      this.client.connect(headers, this.onConnected, this.onFailed);
    }
  }
}
</script>
