import { NotificationInput } from '@vtex/clients'
import { ExternalClient, InstanceOptions, IOContext } from '@vtex/api'

import {
  SimulationInput,
  SimulationResponse,
} from '../typings/fullfilmentSimulation'
import {
  MarketplaceOrderInput,
  MarketplaceOrderResponse,
} from '../typings/orderPlacement'
import { getItemsInfoFromInput } from '../utils/simulationMock'

export class ExternalSeller extends ExternalClient {
  constructor(ctx: IOContext, options?: InstanceOptions) {
    super(`baseUrl`, ctx, {
      ...options,
    })
  }

  /*
  public fullfilmentSimulation2(){
    const body = {

    }

  }*/

  public fullfilmentSimulation(input: SimulationInput) {
    const items = getItemsInfoFromInput(input)

    const body: SimulationResponse = {
      country: 'BRA',
      items,
      logisticsInfo: [
        {
          itemIndex: 0,
          quantity: 1,
          shipsTo: ['BRA'],
          slas: [
            {
              id: 'Regular',
              deliveryChannel: 'delivery',
              name: 'Regular Delivery',
              price: 1000,
              shippingEstimate: '7bd',
            },
          ],
          stockBalance: 199,
          deliveryChannels: [
            {
              id: 'delivery',
              stockBalance: 179,
            },
            {
              id: 'pickup-in-point',
              stockBalance: 20,
            },
          ],
        },
      ],
      postalCode: input.postalCode,

    }
    console.log(body)
    return body
  }

  public placeOrder(request: MarketplaceOrderInput) {
    const body: MarketplaceOrderResponse = {
      ...request,
      orderId: '123456',
      followUpEmail: 'murilo.faria93@gmail.com',
    }

    return body
  }

  public async dispatchOrder(orderId: string, marketplaceOrderId: string) {
    const body: OrderDispatch = {
      date: new Date().toISOString(),
      marketplaceOrderId,
      orderId,
      receipt: null,
    }

    return body
  }

  public async invoiceOrder(_: string) {
    const invoiceData: NotificationInput = {
      type: 'Output',
      invoiceNumber: 'NFe-00001',
      issuanceDate: '2020-11-21T00:00:00',
      invoiceValue: 1999,
      invoiceUrl: 'https://7dfd0931fce9d4b74d20fd70d48eb714.m.pipedream.net',
      courier: '',
      trackingNumber: '',
      trackingUrl: '',
      items: [
        {
          id: '7',
          quantity: 1,
          price: 999,
        },
      ],
    }

    return invoiceData
  }
// Fluxo para testes de CancelOrder() retornando null
  public async cancelOrder() {
    const body = {}
    return body}

    


/*
  public async cancelOrder(orderId: string, marketplaceOrderId: string) {
    const body = {
      date: '2020-11-02 18:52:00',
      marketplaceOrderId,
      orderId,
      receipt: 'e39d05f9-0c54-4469-a626-8bb5cff169f8',
    }

    return body
  }

*/

/*
public async cancelOrder() {
  const body = {

    type: 'Output',
    invoiceNumber: 'NFe-00001',
    issuanceDate: '2020-11-21T00:00:00',
    invoiceValue: 1999,
    invoiceUrl: 'https://7dfd0931fce9d4b74d20fd70d48eb714.m.pipedream.net',
    courier: '',
    trackingNumber: '',
    trackingUrl: '',
    items: [
      {
        id: '7',
        quantity: 1,
        price: 999,
      },
    ],
  }

  console.log(body)

  return body
}*/


}

interface OrderDispatch {
  date: string
  marketplaceOrderId: string
  orderId: string
  receipt: string | null
}
