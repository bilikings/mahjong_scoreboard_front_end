import Stomp from 'stompjs'
import {MQTT_SERVICE, MQTT_USERNAME, MQTT_PASSWORD} from '../utils/mqtt'


export default {
    data() {
        return {
            client: Stomp.client(MQTT_SERVICE)
        }
    },
    create() {
        this.connect();
    },
    methods: {
        onConnected: function(frame) {
            console.log("MQ Connected: " + frame);
            var exchange = "/exchange/exchange_test";
            this.client.subscribe(exchange, this.responseCallback, this.onFailed);
        },
        onFailed: function(frame) {
            console.log("MQ Failed: " + frame);
        },
        responseCallback: function(frame) {
            console.log("MQ msg => " + frame.body);
        },
        connect: function() {
            const headers = {
                login: MQTT_USERNAME,
                passcode: MQTT_PASSWORD
            };
            this.client.connect(headers, this.onConnected, this.onFailed);
        }
    }
}
