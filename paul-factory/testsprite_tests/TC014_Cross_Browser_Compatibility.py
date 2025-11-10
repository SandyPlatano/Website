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
        # -> Perform smoke tests for page loading, navigation, and animations on Chrome.
        frame = context.pages[-1]
        # Click 'About' menu item to test navigation on Chrome.
        elem = frame.locator('xpath=html/body/div/header/div/div/div/ul/li[2]/a').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # -> Open the website on latest Firefox browser and repeat smoke tests.
        await page.goto('http://localhost:3000', timeout=10000)
        await asyncio.sleep(3)
        

        # -> Open the website on latest Firefox browser and perform smoke tests for page loading, navigation, and animations.
        await page.goto('http://localhost:3000', timeout=10000)
        await asyncio.sleep(3)
        

        # -> Click 'About' menu item to test navigation and animations on Firefox.
        frame = context.pages[-1]
        # Click 'About' menu item on Firefox to test navigation and animations.
        elem = frame.locator('xpath=html/body/div/header/div/div/div/ul/li[2]/a').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # -> Open the website on latest Safari browser and perform smoke tests for page loading, navigation, and animations.
        await page.goto('http://localhost:3000', timeout=10000)
        await asyncio.sleep(3)
        

        # -> Click 'About' menu item to test navigation and animations on Safari.
        frame = context.pages[-1]
        # Click 'About' menu item on Safari to test navigation and animations.
        elem = frame.locator('xpath=html/body/div/header/div/div/div/ul/li[2]/a').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # -> Open the website on latest Edge browser and perform smoke tests for page loading, navigation, and animations.
        await page.goto('http://localhost:3000', timeout=10000)
        await asyncio.sleep(3)
        

        # -> Click 'About' menu item to test navigation and animations on Edge.
        frame = context.pages[-1]
        # Click 'About' menu item on Edge to test navigation and animations.
        elem = frame.locator('xpath=html/body/div/header/div/div/div/ul/li[2]/a').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # --> Assertions to verify final state
        frame = context.pages[-1]
        await expect(frame.locator('text=HOME').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=ABOUT').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=CONTACT').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Blending automation with digital empathy.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=I’m Fermin Andujar (Ferm), formerly a personal trainer and massage therapist turned BDR, now an aspiring go-to-market engineer focused on systems that let teams spend more time with customers.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=DOWNLOAD RESUME').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=CONTACT').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=TOOLSET').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Tool stack').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=My stack spans Cursor, Apify, ChatGPT, Claude, Clay, Cognism, Gong Engage, Salesforce, Superwhisper, Tella, Vidyard, and ZoomInfo.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=CONTACT FERM').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=CORE SKILLS').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=A/B TESTING').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=ACCOUNT SCORING').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=API INTEGRATION').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=PROMPT ENGINEERING').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=WORKFLOW AUTOMATION').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=GTMwithFerm').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Building go-to-market systems that drive results, remove friction, and amplify teams.').first).to_be_visible(timeout=30000)
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
    