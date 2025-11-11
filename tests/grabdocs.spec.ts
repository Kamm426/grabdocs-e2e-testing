import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { UploadPage } from '../pages/UploadPage';
import { DocumentsPage } from '../pages/DocumentsPage';
import { LogoutPage } from '../pages/LogoutPage';

test('GrabDocs End-to-End', async ({ page }) => {

  //  Go to login page first
  await page.goto('https://app.grabdocs.com/login');

  // Login
  const loginPage = new LoginPage(page);
  await loginPage.login(process.env.EMAIL!, process.env.PASSWORD!);

  // Upload
  const uploadPage = new UploadPage(page);
  await uploadPage.uploadFile('sample.pdf');

  // Verify upload appears in docs list
  const documentsPage = new DocumentsPage(page);
  await documentsPage.confirmDocumentExists('sample.pdf');

  // Logout
  const logoutPage = new LogoutPage(page);
  await logoutPage.logout();
});



