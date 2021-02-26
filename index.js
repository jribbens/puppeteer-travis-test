'use strict'

const puppeteer = require('puppeteer')

;(async () => {
  const browser = await puppeteer.launch()
  const context = await browser.createIncognitoBrowserContext()
  const page = await context.newPage()
  await page.goto('http://example.com')
  console.log('success')
  await browser.close()
})()
