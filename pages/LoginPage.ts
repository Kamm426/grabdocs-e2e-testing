import { Page, expect } from '@playwright/test';

export class LoginPage {
    constructor(private page: Page) {}

    async login(email: string, password: string) {
        // Navigate to login page — do NOT wait for "load" because GrabDocs redirects
        await this.page.goto('https://app.grabdocs.com/login', {
            waitUntil: 'domcontentloaded'
        });

        // Wait for the username/email field
        await this.page.waitForSelector('input[placeholder*="Username"]', { timeout: 20000 });

        // Fill email / username
        await this.page.fill('input[placeholder*="Username"]', email);

        // Fill password
        await this.page.fill('input[placeholder="Password"]', password);

        // Click Sign In
        await this.page.click('button:has-text("Sign in")');

        // Confirm login succeeded by waiting for a post-login element (user initials button)
        await this.page.waitForSelector('button:has-text("KA"), button[aria-label="Account"]', {
            timeout: 20000
        });
    }
}


