import axios from "axios";

export default axios.create({
    responseType: "json",
    proxy: {
        '/api': {
            target: 'http://Lenovo:8181',
            changeOrigin: true,
            secure: false,
            logLevel: "debug",
            auth: {
                username: 'ravan',
                password: 'pwd123'
            }
        }
    }
})