import { extension, Banner } from "@shopify/ui-extensions/checkout";

export default extension("purchase.checkout.block.render", (root, { settings }) => {
  const {status, collapsible} = settings.current;

  const title = settings.current.title ?? "Custom Banner";
  const description = settings.current.description ?? "Custom banner description"

  const banner = root.createComponent(Banner,{
    title, status,collapsible
  }, description)

  settings.subscribe((newSettings) => {
    banner.updateProps({
      title: newSettings.title ?? "Custom banner",
      status: newSettings.status,
      collapsible: newSettings.collapsible
    })
  })

  root.appendChild(banner)
})

