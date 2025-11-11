import { Page } from '@playwright/test';

export class UploadPage {
  constructor(private page: Page) {}

  async uploadFile(filePath: string) {
    await this.page.setInputFiles('input[type="file"]', filePath);
    await this.page.waitForTimeout(2000);
  }
}
