import {
  SimulationInput,
  SimulationItem,
} from '../typings/fullfilmentSimulation'

export const getItemsInfoFromInput = (input: SimulationInput) =>
  input.items.map((item) => {
    const { id, quantity, seller } = item

    return <SimulationItem>{
      id,
      quantity,
      seller,
      measurementUnit: 'un',
      merchantName: null,
      price: 999,
      priceTags: [],
      priceValidUntil: null,
      requestIndex: 0,
      unitMultiplier: 1,
      offerings: [
        {
          type: "Label",
          id: "Label 1",
          name: "Rótulo Especial",
          price: 1000
        }

      ],
      attachmentOfferings: [
        {
          name: "Rótulo Personalizado",
          required: false,
          schema: {
            Name: {
              maximumNumberOfCharacters: 10
            }
          }
        },
        {
          name: "Recorrência",
          required: false,
          schema: {
            Name: {
              domain: ['7 dias','15 dias','30 dias']
            }
          }
        }
      ]


    }
  })
