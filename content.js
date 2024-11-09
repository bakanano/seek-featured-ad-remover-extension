// ==UserScript==
// @name         SEEK Featured Ad Remover
// @namespace    http://tampermonkey.net/
// @version      1.6
// @description  Hides "Featured" job ads on SEEK job listings.
// @match        https://www.seek.co.nz/*
// @match        https://www.seek.com.au/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
  
    const style = document.createElement('style');
    style.innerHTML = `
      [data-automation='premiumAdBadge'] {
        display: none !important;
      }
      div._47fs8z0._1ekw8474z._1ekw8474x {
        display: none !important;
      }
    `;
    document.head.appendChild(style);
  
    function removeFeaturedAds() {
      const featuredBadges = document.querySelectorAll("[data-automation='premiumAdBadge']");
  
      featuredBadges.forEach(badge => {
        const jobContainer = badge.closest("div._47fs8z0._1ekw8474z._1ekw8474x");
  
        if (jobContainer) {
          console.log("Removing job container:", jobContainer);
          jobContainer.remove();
        }
      });
    }
  
    removeFeaturedAds();
  
    setInterval(removeFeaturedAds, 2000);
  })();
  