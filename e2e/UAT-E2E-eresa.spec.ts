import { test, expect } from '@playwright/test';
//const { USERNAME_TEST, PASSWORD_TEST, URL_SIT, USERNAME_SIT, PASSWORD_SIT } = process.env
const { USERNAME_TEST, PASSWORD_TEST, URL_UAT_WEBSITE, USERNAME_UAT, PASSWORD_UAT } = process.env

test.beforeEach(async ({ page }) => {
    //await page.goto(`${URL_SIT}`);
    await page.goto(`${URL_UAT_WEBSITE}`);
    //await expect(page).toHaveTitle("Authentication page");
    //await page.getByTestId('username').fill(USERNAME_TEST);
    await page.locator('//*[@id="password"]').fill(`${PASSWORD_TEST}`);
    await page.locator('//*[@id="username"]').fill(`${USERNAME_TEST}`);
    await page.locator('//*[@id="signOnButton"]').click();
    //await page.getByTestId('password').fill(PASSWORD_TEST);
    await expect(page).toHaveTitle('WELDOM, votre magasin de bricolage jardinage et décoration');
    // await expect(page).getByTestId('onetrust-banner-sdk');
    await page.locator('#onetrust-accept-btn-handler').click();
});

test("Login to Weldom account", async ({ page }) => {
    //await page.goto(`${URL_SIT}`);
    await page.goto(`${URL_UAT_WEBSITE}`);
    await page.locator('//button[@aria-label="Se connecter / S\'inscrire"]').click();
    // await page.getByRole('button', { name: /submit/i }).click();
    //*[@id="header-default"]/weldom-header/header/div/div[2]/div/header-account/section/button
    //document.querySelector("#header-default > weldom-header > header > div > div.header__right > div > header-account > section > button")
    //await page.locator('//*[@id="gb"]/div/div[2]/a').click();
    //await page.waitForLoadState('domcontentloaded');
    //await page.locator('//weldom-layered-email//input').fill(USERNAME_SIT);
    await page.locator('//weldom-layered-email//input').fill(`${USERNAME_UAT_WEBSITE}`);
    //await page.getByTestId('username').fill(`${USERNAME_UAT}`);
    // await page.getByTestId('button-submit-loggin').click();
    await page.getByRole('button', { name: 'Connexion / inscription' }).click();
    // await page.press('Enter');
    //await page.locator('//input-password//input').fill(PASSWORD_SIT);
    await page.locator('//input-password//input').fill(`${USERNAME_UAT_WEBSITE}`);
    // await page.locator('//*[@id="password"]').fill(PASSWORD_UAT);
    //await page.getByTestId('password').fill(PASSWORD_UAT);
    await page.getByRole('button', { name: 'Connexion' }).click();
    await expect(page.getByText('Bonjour')).toBeVisible();
    // await page.press('Enter');
    // await page.getByTestId('LgbsSe').click();
});