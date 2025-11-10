import asyncio
from playwright import async_api
from playwright.async_api import expect

async def run_test():
    pw = None
    browser = None
    context = None
    
    try:
        # Start a Playwright session in asynchronous mode
        pw = await async_api.async_playwright().start()
        
        # Launch a Chromium browser in headless mode with custom arguments
        browser = await pw.chromium.launch(
            headless=True,
            args=[
                "--window-size=1280,720",         # Set the browser window size
                "--disable-dev-shm-usage",        # Avoid using /dev/shm which can cause issues in containers
                "--ipc=host",                     # Use host-level IPC for better stability
                "--single-process"                # Run the browser in a single process mode
            ],
        )
        
        # Create a new browser context (like an incognito window)
        context = await browser.new_context()
        context.set_default_timeout(5000)
        
        # Open a new page in the browser context
        page = await context.new_page()
        
        # Navigate to your target URL and wait until the network request is committed
        await page.goto("http://localhost:3000", wait_until="commit", timeout=10000)
        
        # Wait for the main page to reach DOMContentLoaded state (optional for stability)
        try:
            await page.wait_for_load_state("domcontentloaded", timeout=3000)
        except async_api.Error:
            pass
        
        # Iterate through all iframes and wait for them to load as well
        for frame in page.frames:
            try:
                await frame.wait_for_load_state("domcontentloaded", timeout=3000)
            except async_api.Error:
                pass
        
        # Interact with the page elements to simulate user flow
        # -> Click on 'View work' link to navigate to Projects showcase page.
        frame = context.pages[-1]
        # Click on 'View work' link to navigate to Projects showcase page.
        elem = frame.locator('xpath=html/body/div/main/section/div/div/div/div/a').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # -> Hover over each project card to verify hover effects and check links to project detail pages.
        frame = context.pages[-1]
        # Hover over first project card to verify hover effect and link.
        elem = frame.locator('xpath=html/body/div/main/section[2]/div/div/div[2]/a').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # -> Hover over the second project card (index 10) to verify hover effect and check link placeholder status.
        frame = context.pages[-1]
        # Hover over second project card to verify hover effect and link placeholder status.
        elem = frame.locator('xpath=html/body/div/main/section[2]/div/div/div[2]/a[2]').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # -> Hover over the third project card (index 12) to verify hover effect and check link placeholder status.
        frame = context.pages[-1]
        # Hover over third project card to verify hover effect and link placeholder status.
        elem = frame.locator('xpath=html/body/div/main/section[2]/div/div/div[2]/a[3]').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # -> Hover over the fourth project card (index 14) to verify hover effect and check link placeholder status.
        frame = context.pages[-1]
        # Hover over fourth project card to verify hover effect and link placeholder status.
        elem = frame.locator('xpath=html/body/div/main/section[3]/div/div/div/div[3]/a').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # -> Click on 'View work' link (index 5) to navigate back to Projects showcase page and resume verification.
        frame = context.pages[-1]
        # Click on 'View work' link to navigate back to Projects showcase page.
        elem = frame.locator('xpath=html/body/div/main/section/div/div/div/div/a').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # -> Hover over the fourth project card by clicking element index 13 (the link for 'Clay — Outbound Certification') to verify hover effect and link placeholder status.
        frame = context.pages[-1]
        # Click on fourth project card link to verify hover effect and link placeholder status.
        elem = frame.locator('xpath=html/body/div/main/section[2]/div/div/div[2]/a[3]/div/div/img').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # -> Hover over the project card for 'Location Research Custom App' (index 10) to verify hover effect and link placeholder status.
        frame = context.pages[-1]
        # Hover over 'Location Research Custom App' project card to verify hover effect and link placeholder status.
        elem = frame.locator('xpath=html/body/div/main/section[2]/div/div/div[2]/a[4]').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # --> Assertions to verify final state
        frame = context.pages[-1]
        await expect(frame.locator('text=Clay — Inbound Automation').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Certified inbound automation flows that qualify inbound leads, sync enriched data, and notify revenue teams in real time.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Clay — CRM Enrichment').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Data enrichment playbooks that keep CRM records fresh with revenue signals, buying committees, and intent scoring.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Clay — Outbound Certification').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Outbound automation and sales outreach sequences that balance scale with personalization across the GTM stack.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Location Research Custom App').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=In-house web app for sales reps that gives them how many locations a certain company has.').first).to_be_visible(timeout=30000)
        await asyncio.sleep(5)
    
    finally:
        if context:
            await context.close()
        if browser:
            await browser.close()
        if pw:
            await pw.stop()
            
asyncio.run(run_test())
    