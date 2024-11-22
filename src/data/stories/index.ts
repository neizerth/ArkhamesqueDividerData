import campaigns from "./campaigns"
import custom from "./custom";
import pnp from "./pnp.json";
import standalone from "./standalone.json"

export default [
  {
    data: campaigns
  },
  {
    prefix: 'FanMade',
    data: custom
  },
  {
    prefix: 'PrintandPlay',
    data: pnp
  },
  {
    prefix: 'Standalone',
    data: standalone
  }
]