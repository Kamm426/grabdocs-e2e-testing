import { Page, expect } from '@playwright/test';

export class FeedbackPage {
  constructor(private page: Page) {}

  async submitFeedback() {
    // Navigate to Feedback
    await this.page.click('text=Feedback');

    // Fill out the form (update selectors based on actual app)
    await this.page.fill('textarea', 'This is an automated E2E feedback test.');
    await this.page.click('button:has-text("Submit")');

    // Verify success message
    await expect(this.page.locator('text=Thank')).toBeVisible();
  }
}
