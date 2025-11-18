import { Page, expect } from '@playwright/test';

export class CalendarPage {
  constructor(private page: Page) {}

  async openCalendar() {
    await this.page.click('text=Calendar');
    await expect(this.page).toHaveURL(/.*calendar/i);

    // Optionally check something inside the Calendar page
    await expect(this.page.locator('text=Calendar')).toBeVisible();
  }
}
