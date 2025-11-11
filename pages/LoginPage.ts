import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async gotoLogin() {
    await this.page.goto('https://app.grabdocs.com/login');
  }

  async login(email: string, password: string) {
    await this.page.fill('input[placeholder="Username, Email or Phone"]', email);
    await this.page.fill('input[placeholder="Password"]', password);
    await this.page.click('button:has-text("Sign in")');

    // Wait for navigation to dashboard/uploads page
    await this.page.waitForNavigation({ waitUntil: 'networkidle' });
  }
}

