import { expect, Page } from '@playwright/test';

export class DocumentsPage {
  constructor(private page: Page) {}

  async confirmDocumentExists(name: string) {
    const cleanName = name.replace('.pdf', '');

    //  Wait for the "Files uploaded successfully" notification
    await this.page.getByText('Files uploaded successfully').waitFor({ timeout: 60000 });

    //  Wait for at least one document list item to render
    await this.page.waitForSelector('li', { timeout: 60000 });

    //  Look for the document that contains our file name
    const doc = this.page.getByRole('listitem').filter({ hasText: cleanName }).first();

    //  Ensure it appears
    await expect(doc).toBeVisible({ timeout: 60000 });
  }
}






