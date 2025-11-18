import { Page, expect } from '@playwright/test';

export class DocumentsPage {

  constructor(private page: Page) {}

  async confirmDocumentExists(filename: string) {

    // Cleanup name (GrabDocs might drop extension)
    const cleanName = filename.replace('.pdf', '').trim();

    //  Wait for at least one item to render
    await this.page.waitForSelector('div', { timeout: 60000 });

    //  Find the uploaded document by partial text match  
    const doc = this.page.getByText(cleanName, { exact: false }).first();

    //  Ensure the document is visible  
    await expect(doc).toBeVisible({ timeout: 15000 });
  }
}









