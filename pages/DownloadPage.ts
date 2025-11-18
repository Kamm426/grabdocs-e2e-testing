
import { Page, expect } from '@playwright/test';

export class DownloadPage {
  constructor(private page: Page) {}

  // Opens the document preview and downloads the file.
   
  async downloadFile(filename: string) {
    const clean = filename.trim().toLowerCase();

    //  Wait for upload to finish fully 
    // GrabDocs shows "Pending", "Processing", or a spinner. We wait until NONE appear.
    await this.page.waitForSelector('text=Pending', { state: 'detached', timeout: 60000 });
    await this.page.waitForSelector('text=processing', { state: 'detached', timeout: 60000 }).catch(() => {});
    await this.page.waitForTimeout(1000); // brief settle

    // Find the file card by text
    const fileCard = this.page.getByText(clean, { exact: false }).first();
    await expect(fileCard).toBeVisible({ timeout: 15000 });

    // Click file to open preview
    await fileCard.click();

    // Wait for preview panel (right side) to appear 
    // Look for ANY UI that only appears in the preview.
    await this.page.waitForSelector('text=Download', { timeout: 20000 });

    // Download the file 
    const [download] = await Promise.all([
      this.page.waitForEvent('download'),
      this.page.getByRole('button', { name: /download/i }).click(),
    ]);

    // Save the downloaded file to disk
    const savePath = await download.path();
    console.log(`Downloaded file saved at: ${savePath}`);
  }
}



