import masters from "../../data/masters.js"
Page({
    data:{
        people: masters
    },
    onLoad(){
        console.log("Page people is loaded!")
    },
    onShow(){
        console.log("Page people is showed!")
    },
    onReady(){
        console.log('Page people is ready!')
    },
    onUnload(){
        console.log('Page people is unloaded!')
    }
})