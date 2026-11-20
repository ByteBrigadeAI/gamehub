import { test, expect } from '@playwright/test';

test('keeps the security lab disabled without explicit opt-in', async ({ page }) => {
    await page.goto('/security-lab/');
    await expect(page.getByTestId('message-preview')).toContainText('Security lab disabled');
});

test('shows a synthetic preview when explicitly enabled', async ({ page }) => {
    await page.goto('/security-lab/?enable=1&message=Hello');
    await expect(page.getByTestId('message-preview')).toHaveText('Hello');
});
