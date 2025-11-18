import { expect, Page } from '@playwright/test';

export class LogoutPage {
  constructor(private page: Page) {}

  async logout() {

    //  Open user profile dropdown (top right initials button)
    const profileButton = this.page.getByRole('button', { name: /ka/i });
    await profileButton.click();

    //  Wait for Sign out button to appear
    const signOutButton = this.page.getByRole('button', { name: /sign out/i });
    await expect(signOutButton).toBeVisible({ timeout: 20000 });

    //  Click Sign out
    await signOutButton.click();

    //  Confirm redirect to login page
    await this.page.waitForURL('**/login', { timeout: 20000 });
  }
}









