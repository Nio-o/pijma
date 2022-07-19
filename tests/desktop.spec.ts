import {test, expect} from '@playwright/test'
import {components, getStyleguideURL} from './components'

test.describe.parallel('Desktop', async () => {
  for (const component of components) {
    test.describe(`Component: ${component}`, async () => {
      test(`Example`, async ({page}) => {
        const componentUrl = getStyleguideURL(component)
        await page.goto(componentUrl)
        const nodes = page.locator('div[data-testid="mountNode"]').nth(0)

        expect(await nodes.screenshot()).toMatchSnapshot()
      })
    })
  }
})
