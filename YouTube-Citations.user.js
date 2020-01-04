// ==UserScript==
// @name         YouTube Citations
// @namespace    http://www.lorenzoswank.com/
// @version      0.1
// @description  Change the title of every video to a Citation for that video. YouTube time is now research time.
// @author       Lorenzo Swank
// @include     http://youtube.com/*
// @include     https://youtube.com/*
// @include     http://www.youtube.com/*
// @include     https://www.youtube.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    async function delay(delayInms) {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(1);
        }, delayInms);
      });
    }
    async function reTitleVideo() {
      let delayres = await delay(5000);
      let videoTitle = document.getElementsByClassName("ytd-video-primary-info-renderer")[0].getElementsByClassName("title")[0].innerText
      let publicationDate = document.getElementById("date").innerText.substring(1)
      let channelName = (document.getElementById("meta-contents")).getElementsByClassName("ytd-video-owner-renderer")[2].innerText.split('\n')[0]
      let videoURL = window.location.href.split('&')[0]
      let citationText = channelName + ". (" + publicationDate + "). " + videoTitle + " [Video]. YouTube. " + videoURL
      document.getElementsByClassName("ytd-video-primary-info-renderer")[0].getElementsByClassName("title")[0].children[0].innerText = citationText
    }
    reTitleVideo();
})();