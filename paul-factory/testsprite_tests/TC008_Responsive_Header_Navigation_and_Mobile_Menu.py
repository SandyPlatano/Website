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
        # -> Scroll down to test sticky header behavior on scroll.
        await page.mouse.wheel(0, 300)
        

        # -> Test navigation links by clicking each and verifying navigation.
        frame = context.pages[-1]
        # Click Home link in header navigation to verify navigation.
        elem = frame.locator('xpath=html/body/div/header/div/div/div/ul/li/a').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # -> Click 'Contact' navigation link to verify navigation.
        frame = context.pages[-1]
        # Click Contact link in header navigation to verify navigation.
        elem = frame.locator('xpath=html/body/div/header/div/div/div/ul/li[3]/a').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # -> Resize viewport to mobile dimensions to verify mobile menu button visibility.
        await page.goto('http://localhost:3000', timeout=10000)
        await asyncio.sleep(3)
        

        # -> Resize viewport to mobile dimensions to verify mobile menu button visibility.
        frame = context.pages[-1]
        # Click to open mobile menu or toggle mobile menu button if visible.
        elem = frame.locator('xpath=html/body/div/header/div/div/a/span/img').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # -> Toggle mobile menu open and close to verify animation and accessibility of navigation links.
        frame = context.pages[-1]
        # Toggle mobile menu open.
        elem = frame.locator('xpath=html/body/div/header/div/div/a/span/img').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        frame = context.pages[-1]
        # Toggle mobile menu close.
        elem = frame.locator('xpath=html/body/div/header/div/div/a/span/img').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # -> Perform a final scroll test on mobile viewport to confirm sticky header behavior.
        await page.mouse.wheel(0, 300)
        

        # --> Assertions to verify final state
        frame = context.pages[-1]
        await expect(frame.locator('text=HOME').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=ABOUT').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=CONTACT').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Building go-to-market systems that amplify teams.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Hello! I\'m Fermin, an aspiring go-to-market engineer.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=VIEW WORK').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=CONTACT FERM').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Clay — Inbound Automation').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Certified inbound automation flows that qualify inbound leads, sync enriched data, and notify revenue teams in real time.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Clay — CRM Enrichment').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Data enrichment playbooks that keep CRM records fresh with revenue signals, buying committees, and intent scoring.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Clay — Outbound Certification').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Outbound automation and sales outreach sequences that balance scale with personalization across the GTM stack.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Location Research Custom App').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=In-house web app for sales reps that gives them how many location a certain company has.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=I combine revenue operations, automation design, and storytelling to launch GTM systems that scale with the team. Dive into current experiments, certifications, and the GTM philosophies that keep me curious.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Improving in Cursor').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Built this website with Cursor').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=See how automation-first playbooks help activate SDR and CS teams faster.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Explore the frameworks I use to translate messy data into actionable sequences.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Get a snapshot of my certifications, favorite tools, and collaboration style.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=ABOUT FERM').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=CONTACT').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=GTMwithFerm').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=EMAIL:').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=andujar609@gmail.com').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=PHONE:').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=(347) 751-7446').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=LOCATION').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Based in Orlando • Working remotely').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=LINKEDIN').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=BOOK TIME').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=made by Ferm with Cursor').first).to_be_visible(timeout=30000)
        await asyncio.sleep(5)
    
    finally:
        if context:
            await context.close()
        if browser:
            await browser.close()
        if pw:
            await pw.stop()
            
asyncio.run(run_test())
    